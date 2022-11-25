import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const BookModal = ({ productDetails, setProductDetails }) => {
  console.log(productDetails);

  const { user } = useContext(AuthContext);
  const handleBooking = (e) => {
    e.preventDefault();
    toast.success("Your item is booked. Thank you!");
    setProductDetails(null);
  };
  return (
    <>
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
              name="location"
              type="text"
              placeholder="Meeting Location"
              className="input w-full input-bordered"
            />
            <br />
            <input
              htmlFor="booking-modal"
              className="btn btn-sm w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookModal;
