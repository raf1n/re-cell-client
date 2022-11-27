import React, { useContext } from "react";
import toast from "react-hot-toast";
import { addReportedData } from "../../Api/reported";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import ProductCard from "./ProductCard";

const CategoryProductsCards = ({ categoriesProducts }) => {
  const { user } = useContext(AuthContext);
  const handleReportedItem = (product) => {
    const id = product._id;
    product.productId = id;
    const reporterEmail = user?.email;
    product.reporterEmail = reporterEmail;
    const reporterName = user?.displayName;
    product.reporterName = reporterName;
    addReportedData(product)
      .then((res) => res.json())
      .then((data) => {
        if (data?.insertedId) {
          toast.success("Your report have been added successfully");
        } else {
          toast.success(data.message);
        }
      });
  };
  if (categoriesProducts.length === 0) {
    return (
      <div className="p-20 flex justify-center text-5xl font-bold">
        <div className="text-center">
          This category
          <br />
          <span className="text-semibold ">have No product</span>
        </div>
      </div>
    );
  }
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
