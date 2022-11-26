import React from "react";
import ProductCard from "./ProductCard";

const CategoryProductsCards = ({ categoriesProducts }) => {
  const handleReportedItem = (product) => {
    const id = product._id;
    product.productId = id;
    console.log(product);
  };
  return (
    <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
      {categoriesProducts.map((categoryProduct) => (
        <ProductCard
          handleReportedItem={handleReportedItem}
          key={categoryProduct._id}
          categoryProduct={categoryProduct}
        ></ProductCard>
      ))}
    </div>
  );
};

export default CategoryProductsCards;
