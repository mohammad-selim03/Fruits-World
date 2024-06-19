import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import defaultUser from '../assets/defaultUser.png'

const Navbar = () => {
  const { logout, user } = useAuth();

  const handleLogout = async () => {
    alert("LogOut successfully")
   await logout();
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-red-100  rounded-box w-52"
          >
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            {!user && (
              <>
                <li>
                  <Link to={"/login"}>Login</Link>
                </li>
                <li>
                  <Link to={"/register"}>Register</Link>
                </li>
              </>
            )}
            {user && (
              <li>
                <Link to={"/dashboard"}>Dashboard</Link>
              </li>
            )}
            {user && (
              <li>
                <button
                  onClick={handleLogout}
                  className="btn text-green-500 text-white"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
        <Link to={'/'} className="btn btn-ghost text-green-500 uppercase font-bold text-xl">
        Fruits World
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link className="text-green-500 font-semibold" to={"/"}>Home</Link>
          </li>
          <li>
            <Link className="text-green-500 font-semibold" to={"/about"}>About</Link>
          </li>
          <li>
            <Link className="text-green-500 font-semibold" to={"/"}>Partners</Link>
          </li>
          <li>
            <Link className="text-green-500 font-semibold" to={"/menu"}>Menu</Link>
          </li>
          <li>
            <Link className="text-green-500 font-semibold" to={"/contact"}>Contact us</Link>
          </li>
          {!user && (
            <>
              <li>
                <Link className="text-green-500 font-semibold" to={"/login"}>Login</Link>
              </li>
              <li>
                <Link className="text-green-500 font-semibold" to={"/register"}>Register</Link>
              </li>
            </>
          )}
          {user && (
            <li>
              <Link className="text-green-500 font-semibold" to={"/dashboard"}>Dashboard</Link>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end space-x-2">
        {user && (
          <button
            onClick={handleLogout}
            className="btn bg-green-500  text-white hidden lg:block"
          >
          Logout
          </button>
        )}
        <div className="avatar">
          <div className="w-12 rounded-full border-2 border-violet">
            <img src={user?.photoURL || defaultUser} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
