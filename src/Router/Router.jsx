import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Home from "../Pages/HomePage/Home/Home";
import MenuPage from "../Pages/MenuPage/MenuPage";
import OurShop from "../Pages/OurShop/OurShop";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SingUp/SignUp";
import PrivetRoute from "./PrivetRoute";
import Dashboard from "../Layout/Dashboard/Dashboard";
import AddItems from "../Pages/DashboardPages/AddItems/AddItems";
import ManageItems from "../Pages/DashboardPages/ManageItems/ManageItems";
import ManageBookings from "../Pages/DashboardPages/ManageBookings/ManageBookings";
import AllUser from "../Pages/DashboardPages/AllUser/AllUser";
import UserHome from "../Pages/DashboardPages/UserHome/UserHome";
import AdminHome from "../Pages/DashboardPages/AdminHome/AdminHome";
import AdminAddItems from "../Pages/DashboardPages/AdminAddItems/AdminAddItems";
import AdminManageItems from "../Pages/DashboardPages/AdminManageItems/AdminManageItems";
import AdminManageBookings from "../Pages/DashboardPages/AdminManageBookings/AdminManageBookings";
import AdminRoute from "./AdminRoute";
import Payment from "../Pages/DashboardPages/Payment/Payment";

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
    path: "/dashboard",
    element: (
      <PrivetRoute>
        <Dashboard></Dashboard>
      </PrivetRoute>
    ),
    children: [
      {
        path: "userHome",
        element: <UserHome></UserHome>,
      },
      {
        path: "addItems",
        element: <AddItems></AddItems>,
      },
      {
        path: "manageItems",
        element: <ManageItems></ManageItems>,
      },
      {
        path: "manageBookings",
        element: <ManageBookings></ManageBookings>,
      },
      {
        path: "adminHome",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "adminAddItems",
        element: <AdminAddItems></AdminAddItems>,
      },
      {
        path: "adminManageItems",
        element: <AdminManageItems></AdminManageItems>,
      },
      {
        path: "adminManageBookings",
        element: <AdminManageBookings></AdminManageBookings>,
      },
      {
        path: "payment",
        element: <Payment></Payment>
      },
      {
        path: "allUsers",
        element: (
          <AdminRoute>
            <AllUser></AllUser>
          </AdminRoute>
        ),
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
