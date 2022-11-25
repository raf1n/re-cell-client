import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext, useState } from "react";
import { deleteProduct } from "../../../Api/products";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import Spinner from "../../Spinner/Spinner";

const MyProducts = () => {
  const [isSold, setIsSold] = useState(true);
  const { user } = useContext(AuthContext);
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products", user],
    queryFn: async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/products?email=${user?.email}`
        );
        return res.data;
      } catch (error) {
        console.error(error);
      }
    },
  });
  const handleDelete = (id) => {
    deleteProduct(id)
      .then((res) => res.json())
      .then((data) => {
        refetch();
      });
  };
  if (isLoading) {
    return <Spinner></Spinner>;
  }
  return products?.length === 0 ? (
    <div className="p-20 flex justify-center text-2xl">
      <div className="text-center">
        You haven't Add Anything
        <br />
        <span className="text-semibold ">Please Add Product</span>
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
              <th className="p-3">Product Name</th>
              <th className="p-3">Category</th>
              <th className="p-3">Price</th>
              <th className="p-3">Status</th>
              <th className="p-3">Advertisement</th>
              <th className="p-3"></th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product) => (
              <tr
                key={product._id}
                className="border-b w-6 border-opacity-20 border-gray-300 bg-gray-700 text-gray-100"
              >
                <td className="p-3">
                  <img
                    className="w-20 h-16 rounded"
                    src={product?.productImage}
                    alt="productImage"
                  />
                </td>
                <td className="p-3 ">
                  <p>{product?.productName}</p>
                </td>
                <td className="p-3">
                  <p className="text-gray-100">{product?.categoryName}</p>
                </td>
                <td className="p-3">
                  <p className="text-gray-100">{product?.resalePrice}</p>
                </td>
                <td className="p-3 text-right">
                  <span className="px-3 py-1 font-semibold rounded-md text-gray-50">
                    <div className="flex">
                      {isSold ? (
                        <button className="btn btn-xs text-black bg-gray-300 btn-ghost mr-2">
                          Sold
                        </button>
                      ) : (
                        <button className="btn text-black btn-xs btn-ghost bg-gray-300 mr-2">
                          Available
                        </button>
                      )}
                    </div>
                  </span>
                </td>
                <td className="p-3 text-right">
                  <span className="px-3 py-1 font-semibold rounded-md text-gray-50">
                    <div className="flex">
                      {isSold ? (
                        <p className="font-bold">Sold Already</p>
                      ) : (
                        <button
                          className="btn 
                      text-black btn-xs btn-ghost bg-gray-100 mr-2"
                        >
                          Advertise
                        </button>
                      )}
                    </div>
                  </span>
                </td>
                <td className="p-3">
                  <p className="text-gray-100">
                    <button
                      onClick={() => handleDelete(product?._id)}
                      className="btn 
                      text-black btn-xs btn-ghost bg-gray-100 mr-2"
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

export default MyProducts;
