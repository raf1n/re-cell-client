import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import Spinner from "../../Spinner/Spinner";

const AllSellers = () => {
  const {
    data: sellers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["sellers", "role"],
    queryFn: async () => {
      try {
        const res = await axios.get(
          `https://re-cell-server.vercel.app/users?role=Seller`,
          {
            headers: {
              authorization: `bearer ${localStorage.getItem(
                "recellaccessToken"
              )}`,
            },
          }
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
  const handleVerify = (id) => {
    console.log(id);
    fetch(`https://re-cell-server.vercel.app/users/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("recellaccessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("Seller Verified Successfully");
          refetch();
        }
      });
  };
  const handleDelete = (email) => {
    fetch(`https://re-cell-server.vercel.app/user/${email}`, {
      method: "Delete",
      headers: {
        authorization: `bearer ${localStorage.getItem("recellaccessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success("Seller Deleted Successfully");
          refetch();
        }
      });
  };
  return sellers?.length === 0 ? (
    <div className="p-20 flex justify-center text-2xl">
      <div className="text-center">
        No Seller Found
        <br />
      </div>
    </div>
  ) : (
    <div className="container p-2 mb-[12.9rem] mt-2 mx-auto sm:p-4 text-gray-800">
      <h2 className="mb-4 text-3xl text-center font-semibold leading-tight">
        All sellers
      </h2>
      <div className="overflow-x-auto min-h-full lg:w-[90%] mx-auto">
        <table className="min-w-full bg-gray-700 text-xs w-[40%]">
          <thead className="bg-gray-800">
            <tr className="text-left text-gray-100">
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Status</th>
              <th className="p-3"></th>
            </tr>
          </thead>
          <tbody>
            {sellers?.map((seller) => (
              <tr
                key={seller._id}
                className="border-b w-6 border-opacity-20 border-gray-300 bg-gray-700 text-gray-100"
              >
                <td className="p-3">
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={seller?.userAvatar}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-base">
                        {seller?.userName}
                      </div>
                    </div>
                  </div>
                </td>

                <td className="p-3">
                  <p className="text-gray-100 font-bold text-base">
                    {seller?.userEmail}
                  </p>
                </td>
                <td className="p-3 text-right">
                  <span className="px-3 py-1 font-semibold rounded-md text-gray-50">
                    {seller?.isVerified ? (
                      <div className="flex text-sm">
                        <p>Verified</p>
                        <img
                          className="w-5 ml-1"
                          src="https://cdn-icons-png.flaticon.com/512/6928/6928921.png"
                          alt=""
                        />
                      </div>
                    ) : (
                      <div className="flex">
                        <button
                          onClick={() => handleVerify(seller._id)}
                          className="btn text-black btn-xs btn-ghost bg-gray-300 mr-2"
                        >
                          Verify
                        </button>
                      </div>
                    )}
                  </span>
                </td>
                <td className="p-3">
                  <p className="text-gray-100 font-bold text-base">
                    <button
                      onClick={() => handleDelete(seller?.userEmail)}
                      className="btn text-black btn-xs btn-ghost bg-gray-300 mr-2"
                    >
                      Delete
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

export default AllSellers;
