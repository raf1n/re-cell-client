import React, { useState } from "react";
import BookModal from "../BookModal/BookModal";

const CategoryProductsCards = ({ categoriesProducts }) => {
  const [productDetails, setProductDetails] = useState(null);
  return (
    <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
      {categoriesProducts.map((categoryProduct) => (
        <div key={categoryProduct?._id}>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-xl">
            <div>
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
                      categoryProduct?.isVerified
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
              <label
                htmlFor="booking-modal"
                className="btn btn-sm mt-4 mx-auto"
                onClick={() => setProductDetails(categoryProduct)}
              >
                Book Now
              </label>
              {productDetails && (
                <BookModal
                  setProductDetails={setProductDetails}
                  productDetails={productDetails}
                ></BookModal>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryProductsCards;
