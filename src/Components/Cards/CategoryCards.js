import React from "react";
import { Link } from "react-router-dom";

const CategoryCards = ({ categories }) => {
  return (
    <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
      {categories.map((category) => (
        <Link to={`/categories/${category?._id}`} key={category?._id}>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm border border-t-0">
            <div className="flex items-center justify-center">
              <img
                src={category.categoryImg}
                className="w-44 h-44 pt-2"
                alt=""
              />
            </div>
            <div className="p-5 text-center">
              <div className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700">
                {category.categoryName}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryCards;
