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
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "",
        element: <DashboardWelcome></DashboardWelcome>,
      },
      {
        path: "/dashboard/myorders",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/dashboard/addproducts",
        element: <AddAProduct></AddAProduct>,
      },
      {
        path: "/dashboard/myproducts",
        element: <MyProducts></MyProducts>,
      },
      {
        path: "/dashboard/allsellers",
        element: <AllSellers></AllSellers>,
      },
      {
        path: "/dashboard/allbuyers",
        element: <AllBuyers></AllBuyers>,
      },
      {
        path: "/dashboard/reportedItem",
        element: <ReportedItems></ReportedItems>,
      },
      {
        path: "/dashboard/payment/:id",
        element: <Purchase></Purchase>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/bookings/${params.id}`),
      },
    ],
  },
]);
