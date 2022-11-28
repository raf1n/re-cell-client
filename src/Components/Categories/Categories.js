import React from "react";
import { useQuery } from "@tanstack/react-query";
import CategoryCards from "../Cards/CategoryCards";
import Spinner from "../Spinner/Spinner";
const Categories = () => {
  const { data = [], isLoading } = useQuery({
    queryKey: ["allCategories"],
    queryFn: async () => {
      try {
        const res = await fetch(
          "https://re-cell-server.vercel.app/categories",
          {
            headers: {
              authorization: `bearer ${localStorage.getItem(
                "recellaccessToken"
              )}`,
            },
          }
        );
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
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Explore these <span className="text-zinc-900">Categories</span>
      </h1>
      <CategoryCards categories={data.data}></CategoryCards>
    </div>
  );
};

export default Categories;
