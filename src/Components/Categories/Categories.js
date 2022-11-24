import React from "react";
import { useQuery } from "@tanstack/react-query";
const Categories = () => {
  const { data: allCategories = [], isLoading } = useQuery({
    queryKey: ["allCategories"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:5000/categories");
        const data = res.json();
        return data;
      } catch (error) {
        console.error(error);
      }
    },
  });
  if (isLoading) {
    return <div>loading....</div>;
  }
  return (
    <div>
      <h1>{allCategories.data.length}</h1>
    </div>
  );
};

export default Categories;
