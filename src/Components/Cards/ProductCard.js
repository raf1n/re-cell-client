import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import BookModal from "../BookModal/BookModal";
import Spinner from "../Spinner/Spinner";

const ProductCard = ({ categoryProduct, handleReportedItem }) => {
  const [productDetails, setProductDetails] = useState(null);
  const { data: seller, isLoading } = useQuery({
    queryKey: ["seller", categoryProduct?.SellerEmail],
    queryFn: async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/user?email=${categoryProduct?.sellerEmail}`
        );
        return res.data;
      } catch (error) {
        console.error(error);
      }
    },
  });

  if (isLoading) {
    return <Spinner></Spinner>;
  }
  return (
    <div key={categoryProduct?._id}>
      <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-xl">
        <div>
          {}
          <img
            src={categoryProduct?.productImage}
            className="mx-auto object-cover w-64 h-64"
            alt=""
          />
        </div>
        <div className="p-5">
          <div className="mb-3 text-xs font-semibold tracking-wide uppercase">
            <div
              href="/"
              className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700 flex items-center gap-1"
              aria-label="Category"
            >
              Seller: {categoryProduct?.sellerName}
              <img
                className="w-4"
                src={
                  seller?.isVerified
                    ? "https://cdn-icons-png.flaticon.com/512/6928/6928921.png"
                    : "https://cdn-icons-png.flaticon.com/512/2550/2550327.png"
                }
                alt=""
              />
            </div>
            <span className="text-gray-600">
              Posted on: {categoryProduct?.postedDate}
            </span>
          </div>
          <div
            href="/"
            aria-label="Category"
            title="Visit the East"
            className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
          >
            {categoryProduct?.productName}
          </div>
          <div className="mb-2 text-gray-700">
            <p>Location: {categoryProduct?.location}</p>
            <p>Years of Use: {categoryProduct?.yearsOfUse}</p>
          </div>
          <div>
            <p className="font-bold">
              Seller Price: {categoryProduct?.resalePrice}
            </p>
            <p>Original Price: {categoryProduct?.originalPrice}</p>
          </div>
          <div className="flex">
            <label
              htmlFor="booking-modal"
              className="btn btn-sm mt-4 mx-auto"
              onClick={() => setProductDetails(categoryProduct)}
            >
              Book Now
            </label>
            <label
              className="btn btn-sm mt-4 mx-auto"
              onClick={() => handleReportedItem(categoryProduct)}
            >
              Report To Admin
            </label>
          </div>
          {productDetails && (
            <BookModal
              setProductDetails={setProductDetails}
              productDetails={productDetails}
            ></BookModal>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
