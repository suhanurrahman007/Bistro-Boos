import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import useAuth from "../../hooks/useAuth";
import auth from "../../Config/firebase.config";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../hooks/useCart";

const Navbar = () => {
  const [data] = useCart()
  console.log(data);
  // console.log(data.length);


  const links = (
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

      <li id="sidebar" className="space-x-7">
        <NavLink
          to="/dashboard/manageItems"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <FaShoppingCart></FaShoppingCart>
          <div className="badge badge-secondary">+{data?.length}</div>
        </NavLink>
      </li>
    </>
  );

  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout(auth)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };


  return (
    <div className="navbar fixed opacity-70 z-10 max-w-6xl bg-[#150F2D] text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
          >
            {links}
          </ul>
        </div>

        <a className="btn btn-ghost normal-case text-xl">Bistro Boos</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul id="sidebar" className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button
            onClick={handleLogout}
            className="btn btn-outline btn-secondary"
          >
            Logout
          </button>
        ) : (
          <Link to={"/login"} className="btn btn-outline btn-success">
            login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
