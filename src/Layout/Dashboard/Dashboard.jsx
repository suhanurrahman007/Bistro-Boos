import { FaAd, FaBookmark, FaHome, FaMagnet, FaUser } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
const Dashboard = () => {

  const [isAdmin] = useAdmin()

      const navLinks = (
        <>
          <li id="sidebar" className="space-x-7">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Home
            </NavLink>
          </li>

          <li id="sidebar" className="space-x-7">
            <NavLink
              to="/menu"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Menu
            </NavLink>
          </li>

          <li id="sidebar" className="space-x-7">
            <NavLink
              to="/shop"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Our Shop
            </NavLink>
          </li>

          <li id="sidebar" className="space-x-7">
            <NavLink
              to="/contactUs"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Contact Us
            </NavLink>
          </li>
        </>
      );


      const UserSidebarLinks = (
        <>
          <li id="sidebar">
            <NavLink
              to="/dashboard/userHome"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <FaHome></FaHome>
              User Home
            </NavLink>
          </li>

          <li id="sidebar">
            <NavLink
              to="/dashboard/addItems"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <FaAd></FaAd>
              Add items
            </NavLink>
          </li>

          <li id="sidebar">
            <NavLink
              to="/dashboard/manageItems"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <FaMagnet></FaMagnet>
              My Cart
            </NavLink>
          </li>

          <li id="sidebar">
            <NavLink
              to="/dashboard/manageBookings"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <FaBookmark></FaBookmark>
              Manage bookings
            </NavLink>
          </li>
        </>
      );

      const AdminSidebarLinks = (
        <>
          <li id="sidebar">
            <NavLink
              to="/dashboard/adminHome"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <FaHome></FaHome>
              Admin Home
            </NavLink>
          </li>

          <li id="sidebar">
            <NavLink
              to="/dashboard/adminAddItems"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <FaAd></FaAd>
               Admin Add items
            </NavLink>
          </li>

          <li id="sidebar">
            <NavLink
              to="/dashboard/adminManageItems"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <FaMagnet></FaMagnet>
              Admin Manage items
            </NavLink>
          </li>

          <li id="sidebar">
            <NavLink
              to="/dashboard/adminManageBookings"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <FaBookmark></FaBookmark>
              Admin Manage bookings
            </NavLink>
          </li>
          <li id="sidebar">
            <NavLink
              to="/dashboard/allUsers"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <FaUser>y</FaUser>
              All users
            </NavLink>
          </li>
        </>
      );
    return (
      <div>
        <div className="drawer">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <div className="w-full navbar bg-base-300">
              <div className="flex-none">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <div className="flex-1 px-2 mx-2">Navbar Title</div>
              <div className="flex-none hidden lg:block">
                <ul className="menu menu-horizontal">
                  {/* Navbar menu content here */}
                  {navLinks}
                </ul>
              </div>
            </div>
            {/* Page content here */}
            <Outlet></Outlet>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 space-y-5 text-lg min-h-full bg-[#d1a054]">
              {/* Sidebar content here */}
              {
                isAdmin ? AdminSidebarLinks : UserSidebarLinks
              }
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Dashboard;