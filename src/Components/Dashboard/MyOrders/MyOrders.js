import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import Spinner from "../../Spinner/Spinner";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const { data: orders = [], isLoading } = useQuery({
    queryKey: ["orders", user],
    queryFn: async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/bookings?email=${user?.email}`
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
  return orders?.length === 0 ? (
    <div className="p-20 flex justify-center text-2xl">
      <div className="text-center">
        You haven't Ordered Anything
        <br />
        <span className="text-semibold ">Please Order Something</span>
      </div>
    </div>
  ) : (
    <div className="container p-2 mb-[12.9rem] mt-12 mx-auto sm:p-4 text-gray-800">
      <h2 className="mb-4 text-3xl text-center font-semibold leading-tight">
        My Orders
      </h2>
      <div className="overflow-x-auto min-h-full lg:w-[90%] mx-auto">
        <table className="min-w-full bg-gray-700 text-xs w-[40%]">
          <thead className="bg-gray-800">
            <tr className="text-left text-gray-100">
              <th className="p-3">Image</th>
              <th className="p-3">Title</th>
              <th className="p-3">Price</th>
              <th className="p-3"></th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order) => (
              <tr
                key={order._id}
                className="border-b w-6 border-opacity-20 border-gray-300 bg-gray-700 text-gray-100"
              >
                <td className="p-3">
                  <img
                    className="w-20 h-16 rounded"
                    src={order?.productImage}
                    alt="productImage"
                  />
                </td>
                <td className="p-3 ">
                  <p>{order?.productName}</p>
                </td>
                <td className="p-3">
                  <p className="text-gray-100">{order?.productPrice}</p>
                </td>
                <td className="p-3 text-right">
                  <span className="px-3 py-1 font-semibold rounded-md text-gray-50">
                    <div className="flex">
                      <button className="btn text-black btn-xs btn-ghost bg-gray-300 mr-2">
                        Pay
                      </button>
                    </div>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
