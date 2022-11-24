import React from "react";

const CategoryProductsCards = ({ categoriesProducts }) => {
  return (
    <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
      {categoriesProducts.map((categoryProduct) => (
        <div key={categoryProduct?._id}>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <img
              src={categoryProduct?.picture}
              className="object-cover w-full h-64"
              alt=""
            />
            <div className="p-5 border border-t-0">
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
                <span className="text-gray-600">Posted on: {}</span>
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
                <p>Seller Price: {categoryProduct?.resalePrice}</p>
                <p>Original Price: {categoryProduct?.originalPrice}</p>
              </div>
              <div
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryProductsCards;