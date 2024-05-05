import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const Links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#23be0a] font-bold text-sm border border-solid border-[#23be0a] px-3 py-2 rounded-md"
              : "font-bold text-sm"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-[#23be0a] font-bold text-sm border border-solid border-[#23be0a] px-3 py-2 rounded-md"
              : "font-bold text-sm"
          }
        >
          {" "}
          About Us
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/order"
          className={({ isActive }) =>
            isActive
              ? "text-[#23be0a] font-bold text-sm border border-solid border-[#23be0a] px-3 py-2 rounded-md"
              : "font-bold text-sm"
          }
        >
          Order
        </NavLink>
      </li>
    </>
  );
  const handleLogout = () => {
    logOut()
      .then(() => console.log("User logged Out Suessfully"))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className=" navbar bg-base-100 font-work-sans fixed mx-auto z-10 px-3 md:px-16 shadow-md ">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {Links}
            </ul>
          </div>
          <a className="cursor-pointer text-2xl font-bold">MOHA MILON</a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu-horizontal px-1 gap-6">{Links}</ul>
        </div>
        <div className="navbar-end gap-4 ">
          <Link to="/register" className="btn bg-purple-600 text-white">
            Register
          </Link>
          <Link to="/login" className="btn text-white bg-[#59C6D2]">
            Login
          </Link>
          {user ? (
            <>
              <span>{user.email}</span>
              <a onClick={handleLogout} className="btn btn-sm">
                {" "}
                sign Out
              </a>
            </>
          ) : (
            <Link to="/login">
              <button className="btn">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
