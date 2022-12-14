import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
const CheckoutForm = ({ order }) => {
  const [cardError, setCardError] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [processing, setProcessing] = useState(false);
  const { productPrice, buyerEmail, buyerName, _id, productId } = order;
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  useEffect(() => {
    fetch("https://re-cell-server.vercel.app/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem("recellaccessToken")}`,
      },
      body: JSON.stringify({ productPrice }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [productPrice]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
    } else {
      setCardError("");
    }
    setPaymentSuccess("");
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: buyerName,
            email: buyerEmail,
          },
        },
      });
    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      const payment = {
        productId,
        productPrice,
        transactionId: paymentIntent.id,
        email: buyerEmail,
        bookingId: _id,
      };
      fetch("https://re-cell-server.vercel.app/payments", {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("recellaccessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          setPaymentSuccess("Congrats! your payment completed");
          setTransactionId(paymentIntent.id);
          toast.success(`Congrats! your payment is completed`);
        });
    }
    setProcessing(false);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "20px",
                color: "#424770",
                "::placeholder": {
                  color: "#eeeee4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-sm mt-6 btn-primary"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      <div className="m-6 ">
        <p className="text-red-500">{cardError}</p>
        {paymentSuccess && (
          <div>
            <p className="text-gray-600">{paymentSuccess}</p>
            <p className="font-bold text-gray-600">
              Your transaction id: {transactionId}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default CheckoutForm;
