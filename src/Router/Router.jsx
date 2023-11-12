import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Home from "../Pages/HomePage/Home/Home";
import MenuPage from "../Pages/MenuPage/MenuPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "contactUs",
            element: <ContactUs></ContactUs>
        },
        {
          path: "menu",
          element: <MenuPage></MenuPage>
        }

    ]
  },
]);

export default router
