import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import { AiOutlineUnorderedList } from "react-icons/ai";
const SideBarContent = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isSeller, setIsSeller] = useState(false);
  return (
    <div className="text-xl text-gray-100 text-center mb-6">
      <h1>Dashboard</h1>
      {isSeller || isAdmin ? (
        isAdmin ? (
          <div>admin</div>
        ) : (
          <div>seller</div>
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
