import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { HiOutlinePlusCircle, HiUsers } from "react-icons/hi";
import { FaUsers } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import { GrProductHunt } from "react-icons/gr";
import useSeller from "../../../hooks/useSeller";
import Spinner from "../../Spinner/Spinner";
import useAdmin from "../../../hooks/useAdmin";
const SideBarContent = () => {
  const { user } = useContext(AuthContext);

  const [isSeller, isSellerLoading] = useSeller(user?.email);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  if (isSellerLoading || isAdminLoading) {
    return <Spinner customClass="border-white"></Spinner>;
  }
  return (
    <div className="text-xl text-gray-100 text-center mb-6">
      <h1>Dashboard</h1>
      {isSeller || isAdmin ? (
        isAdmin ? (
          <div>
            <h1 className="text-xl text-gray-100 text-center mb-5">
              {user?.displayName}
            </h1>
            <Link to="/dashboard/allsellers">
              <li className="rounded-sm">
                <div className="flex items-center p-2 rounded-md btn">
                  <FaUsers className="w-6 text-xl text-gray-100 font-bold"></FaUsers>
                  <span className="text-gray-100">All seller</span>
                </div>
              </li>
            </Link>
            <Link to="/dashboard/allbuyers">
              <li className="rounded-sm mt-4">
                <div className="flex items-center p-2 rounded-md btn">
                  <HiUsers className="w-6 text-xl text-gray-100 font-bold"></HiUsers>
                  <span className="text-gray-100">All Buyers</span>
                </div>
              </li>
            </Link>
            <Link to="/dashboard/reportedItem">
              <li className="rounded-sm mt-4">
                <div className="flex items-center p-2 rounded-md btn">
                  <TiDelete className="w-6 text-xl text-gray-100 font-bold"></TiDelete>
                  <span className="text-gray-100">Reported Items</span>
                </div>
              </li>
            </Link>
          </div>
        ) : (
          <div>
            <h1 className="text-xl text-gray-100 text-center mb-5">
              {user?.displayName}
            </h1>
            <Link to="/dashboard/addproducts">
              <li className="rounded-sm">
                <div className="flex items-center p-2 rounded-md btn">
                  <HiOutlinePlusCircle className="w-6 text-xl text-gray-100 font-bold"></HiOutlinePlusCircle>
                  <span className="text-gray-100">Add A product</span>
                </div>
              </li>
            </Link>
            <Link to="/dashboard/myproducts">
              <li className="rounded-sm mt-4">
                <div className="flex items-center p-2 rounded-md btn">
                  <GrProductHunt className="w-6 text-xl text-gray-100 font-bold"></GrProductHunt>
                  <span className="text-gray-100">My Products</span>
                </div>
              </li>
            </Link>
          </div>
        )
      ) : (
        <div>
          <h1 className="text-xl text-gray-100 text-center mb-5">
            {user?.displayName}
          </h1>
          <Link to="/dashboard/myorders">
            <li className="rounded-sm">
              <div className="flex items-center p-2 rounded-md btn">
                <AiOutlineUnorderedList className="w-6 text-xl text-gray-100 font-bold"></AiOutlineUnorderedList>
                <span className="text-gray-100">My Orders</span>
              </div>
            </li>
          </Link>
        </div>
      )}
    </div>
  );
};

export default SideBarContent;
