import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Register from "../Pages/Authentication/Register/Register";
import CategoryProducts from "../Pages/CategoryProducts/CategoryProducts";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import PrivateRoute from "./PrivateRoutes";

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
    ],
  },
]);
