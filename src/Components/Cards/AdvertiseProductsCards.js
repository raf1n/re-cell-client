import React from "react";

const AdvertiseProductsCards = ({ advertiseProducts }) => {
  return (
    <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full mx-auto">
      {advertiseProducts.map((advertiseProduct) => (
        <div key={advertiseProduct?._id}>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-md">
            <div>
              <img
                src={advertiseProduct?.productImage}
                className="mx-auto p-4 object-cover w-64 h-64"
                alt=""
              />
            </div>
            <div className="p-5">
              <div
                aria-label="Category"
                title="Visit the East"
                className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                {advertiseProduct?.productName}
              </div>
              <div className="mb-2 text-gray-700">
                <p>Location: {advertiseProduct?.location}</p>
                <p>Years of Use: {advertiseProduct?.yearsOfUse}</p>
              </div>
              <div>
                <p className="font-bold">
                  Price: ${advertiseProduct?.resalePrice}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdvertiseProductsCards;
