import React from "react";
import { useLoaderData } from "react-router-dom";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
const Purchase = () => {
  const order = useLoaderData();
  console.log(order);
  return (
    <section class="flex mt-20 flex-col max-w-5xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg md:flex-row md:h-fit p-4">
      <div class="md:w-1/2 bg-gray-800 rounded-lg">
        <div class="md:px-4 md:py-0">
          <h2 class="font-bold text-white  md:text-gray-100 text-3xl mt-4">
            Check Out
          </h2>
          <div className="space-y-2 m-2">
            <p class="flex">
              <img className="w-24" src={order?.productImage} alt="" />
            </p>
            <p class="flex">
              <span class="text-base text-gray-300 md:text-gray-300">
                Product Name: {order?.productName}
              </span>
            </p>
            <p class="flex items-start ">
              <span class="text-base text-gray-300  md:text-gray-300">
                Price: ${order?.productPrice}
              </span>
            </p>
            <p class="flex items-start ">
              <span class="text-base text-gray-300 md:text-gray-300">
                Seller Name: {order?.sellerName}
              </span>
            </p>
            <p class="flex items-start ">
              <span class="text-base text-gray-300 md:text-gray-300">
                Product Desciption: {order?.productDescription}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/2 sm:w-full lg:p-8 sm:p-6 border rounded-lg m-4">
        <Elements stripe={stripePromise}>
          <CheckoutForm order={order}></CheckoutForm>
        </Elements>
      </div>
    </section>
  );
};

export default Purchase;
