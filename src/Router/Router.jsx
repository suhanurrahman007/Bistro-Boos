import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Home from "../Pages/HomePage/Home/Home";
import MenuPage from "../Pages/MenuPage/MenuPage";
import OurShop from "../Pages/OurShop/OurShop";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SingUp/SignUp";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "contactUs",
        element: (
          <PrivetRoute>
            <ContactUs></ContactUs>
          </PrivetRoute>
        ),
      },
      {
        path: "menu",
        element: <MenuPage></MenuPage>,
      },
      {
        path: "shop",
        element: <OurShop></OurShop>,
      },
    ],
  },

  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signUp",
    element: <SignUp></SignUp>,
  },
]);

export default router
