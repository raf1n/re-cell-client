import React from "react";
import { Outlet } from "react-router-dom";
import SideBarContent from "../../Components/Dashboard/SidebarContent/SideBarContent";
import Navbar from "../../Pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex">
        <div className="drawer drawer-mobile">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <Outlet></Outlet>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4  text-base-content border border-l-0 rounded-md bg-gray-800 shadow w-60 border-gray-700">
              <SideBarContent></SideBarContent>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
