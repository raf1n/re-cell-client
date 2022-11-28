import { useQuery } from "@tanstack/react-query";
import React from "react";
import Spinner from "../../Components/Spinner/Spinner";
import AdvertiseProductsCards from "../Cards/AdvertiseProductsCards";

const AdvertiseProducts = () => {
  const { data: advertiseProducts = [], isLoading } = useQuery({
    queryKey: ["advertiseProducts"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `https://re-cell-server.vercel.app/advertises`,
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
  if (advertiseProducts.length === 0) {
    return;
  }
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <AdvertiseProductsCards
        advertiseProducts={advertiseProducts}
      ></AdvertiseProductsCards>
    </div>
  );
};

export default AdvertiseProducts;
