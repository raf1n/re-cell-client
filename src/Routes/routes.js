import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import CategoryProducts from "../Pages/CategoryProducts/CategoryProducts";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import PrivateRoute from "./PrivateRoutes";
import Blogs from "../Pages/Blogs/Blogs";
import DashboardLayout from "../Layout/Dashboard/DashboardLayout";
import DashboardWelcome from "../Components/Dashboard/DashboardWelcome/DashboardWelcome";
import MyOrders from "../Components/Dashboard/MyOrders/MyOrders";
import AddAProduct from "../Components/Dashboard/AddAProduct/AddAProduct";
import MyProducts from "../Components/Dashboard/MyProducts/MyProducts";
import AllSellers from "../Components/Dashboard/AllSellers/AllSellers";
import AllBuyers from "../Components/Dashboard/AllBuyers/AllBuyers";
import ReportedItems from "../Pages/ReportedItems/ReportedItems";
import Purchase from "../Components/Dashboard/Payment/Purchase";
import AdminRoute from "./AdminRoute/AdminRoute";
import SellerRoute from "./SellerRoute/SellerRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/categories/:id",
        element: (
          <PrivateRoute>
            <CategoryProducts></CategoryProducts>
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
  {
    path: "/dashboard",
    errorElement: <ErrorPage></ErrorPage>,
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "",
        element: (
          <PrivateRoute>
            <DashboardWelcome></DashboardWelcome>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/myorders",
        element: (
          <PrivateRoute>
            <MyOrders></MyOrders>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/addproducts",
        element: (
          <SellerRoute>
            <AddAProduct></AddAProduct>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/myproducts",
        element: (
          <SellerRoute>
            <MyProducts></MyProducts>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/allsellers",
        element: (
          <AdminRoute>
            <AllSellers></AllSellers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allbuyers",
        element: (
          <AdminRoute>
            <AllBuyers></AllBuyers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/reportedItem",
        element: (
          <AdminRoute>
            <ReportedItems></ReportedItems>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        element: (
          <PrivateRoute>
            <Purchase></Purchase>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://re-cell-server.vercel.app/bookings/${params.id}`, {
            headers: {
              authorization: `bearer ${localStorage.getItem(
                "recellaccessToken"
              )}`,
            },
          }),
      },
    ],
  },
]);
