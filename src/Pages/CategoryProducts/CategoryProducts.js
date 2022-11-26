import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import CategoryProductsCards from "../../Components/Cards/CategoryProductsCards";
import Spinner from "../../Components/Spinner/Spinner";

const CategoryProducts = () => {
  const { id } = useParams();
  console.log(id);
  const { data: categoriesProducts = [], isLoading } = useQuery({
    queryKey: ["allCategories", id],
    queryFn: async () => {
      try {
        const res = await fetch(`http://localhost:5000/categories/${id}`);
        const data = res.json();
        return data;
      } catch (error) {
        console.error(error);
      }
    },
  });
  if (isLoading) {
    return <Spinner></Spinner>;
  }
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <CategoryProductsCards
        categoriesProducts={categoriesProducts.data}
      ></CategoryProductsCards>
    </div>
  );
};

export default CategoryProducts;
