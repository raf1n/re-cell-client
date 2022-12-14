import React, { useContext } from "react";
import toast from "react-hot-toast";
import { addBookingData } from "../../Api/bookings";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const BookModal = ({ productDetails, setProductDetails }) => {
  const { user } = useContext(AuthContext);
  console.log(productDetails);
  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const bookingDetails = {
      productDescription: productDetails?.description,
      sellerName: productDetails?.sellerName,
      productId: productDetails?._id,
      buyerName: form.name.value,
      buyerEmail: form.email.value,
      productName: form.productName.value,
      productPrice: form.price.value,
      productImage: productDetails?.productImage,
      location: form.location.value,
      phone: form.phone.value,
      paid: false,
    };
    console.log(bookingDetails);
    addBookingData(bookingDetails)
      .then((res) => res.json())
      .then((data) => {
        toast.success(`${data.message}`);
        console.log(data);
      });
    setProductDetails(null);
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Booking</h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 mt-6">
            <label className="label">
              <span className="label-text font-semibold text-base">Name</span>
            </label>
            <input
              disabled
              defaultValue={user?.displayName}
              name="name"
              type="text"
              placeholder="Your Name"
              className="input w-full input-bordered"
            />
            <label className="label">
              <span className="label-text font-semibold text-base">Email</span>
            </label>
            <input
              name="email"
              type="email"
              disabled
              defaultValue={user?.email}
              placeholder="Email Address"
              className="input w-full input-bordered"
            />
            <label className="label">
              <span className="label-text font-semibold text-base">
                Product Name
              </span>
            </label>
            <input
              disabled
              defaultValue={productDetails?.productName}
              name="productName"
              type="text"
              placeholder="Item Name"
              className="input w-full input-bordered"
            />
            <label className="label">
              <span className="label-text font-semibold text-base">
                Product Price
              </span>
            </label>
            <input
              disabled
              defaultValue={productDetails?.resalePrice}
              name="price"
              type="text"
              placeholder="Price"
              className="input w-full input-bordered"
            />
            <label className="label">
              <span className="label-text font-semibold text-base">
                Your Phone Number
              </span>
            </label>
            <input
              required
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input w-full input-bordered"
            />
            <label className="label">
              <span className="label-text font-semibold text-base">
                Your Meeting Location
              </span>
            </label>
            <input
              required
              name="location"
              type="text"
              placeholder="Meeting Location"
              className="input w-full input-bordered"
            />
            <br />
            <input
              htmlFor="booking-modal"
              className="btn btn-sm w-full mt-2"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
