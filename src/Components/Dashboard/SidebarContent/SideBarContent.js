import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const SideBarContent = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isSeller, setIsSeller] = useState(false);
  return (
    <div>
      {isSeller || isAdmin ? (
        isAdmin ? (
          <div>admin</div>
        ) : (
          <div>seller</div>
        )
      ) : (
        <div>
          <h1 className="text-xl text-gray-100 text-center mb-5">
            Hello, {user?.displayName}
          </h1>
          <Link to="/dashboard/mybookings">
            <li className="rounded-sm">
              <div className="flex items-center p-2 space-x-3 rounded-md btn">
                <img
                  className="w-6"
                  src="https://img.icons8.com/ios/512/mobile-order.png"
                  alt=""
                />
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
