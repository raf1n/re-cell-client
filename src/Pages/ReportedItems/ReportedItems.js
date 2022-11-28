import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import Spinner from "../../Components/Spinner/Spinner";

const ReportedItems = () => {
  const {
    data: reportedProducts = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["reportedProducts"],
    queryFn: async () => {
      try {
        const res = await axios.get(
          `https://re-cell-server.vercel.app/reporteditem`
        );
        return res.data;
      } catch (error) {
        console.error(error);
      }
    },
  });
  if (isLoading) {
    return <Spinner></Spinner>;
  }
  const handleDelete = (_id) => {
    fetch(`https://re-cell-server.vercel.app/reportedItem/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data?.message) {
          toast.success("This Item is Deleted Successfully");
          refetch();
        } else {
          toast.error(`This item is already ${data?.message}`);
        }
      });
  };
  return reportedProducts?.length === 0 ? (
    <div className="p-20 flex justify-center text-2xl">
      <div className="text-center text-4xl font-bold">
        No Reported Item
        <br />
      </div>
    </div>
  ) : (
    <div className="container p-2 mb-[12.9rem] mt-2 mx-auto sm:p-4 text-gray-800">
      <h2 className="mb-4 text-3xl text-center font-semibold leading-tight">
        Reported Items
      </h2>
      <div className="overflow-x-auto min-h-full lg:w-[90%] mx-auto">
        <table className="min-w-full bg-gray-700 text-xs w-[40%]">
          <thead className="bg-gray-800">
            <tr className="text-left text-gray-100">
              <th className="p-3">Product</th>
              <th className="p-3">Reporter Name</th>
              <th className="p-3">Seller Name</th>
              <th className="p-3"></th>
            </tr>
          </thead>
          <tbody>
            {reportedProducts?.map((reportedProduct) => (
              <tr
                key={reportedProduct._id}
                className="border-b w-6 border-opacity-20 border-gray-300 bg-gray-700 text-gray-100"
              >
                <td className="p-3">
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={reportedProduct?.productImage}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-base">
                        {reportedProduct?.productName}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="p-3">
                  <p className="text-gray-100 font-bold text-base">
                    {reportedProduct?.reporterName}
                  </p>
                </td>
                <td className="p-3">
                  <p className="text-gray-100 font-bold text-base">
                    {reportedProduct?.sellerName}
                  </p>
                </td>
                <td className="p-3">
                  <p className="text-gray-100 font-bold text-base">
                    <button
                      onClick={() => handleDelete(reportedProduct?._id)}
                      className="btn text-black btn-xs btn-ghost bg-gray-300 mr-2"
                    >
                      Delete item
                    </button>
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportedItems;
