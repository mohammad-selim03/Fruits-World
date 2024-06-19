import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import defaultUser from "../assets/defaultUser.png";
import axios from "axios";
import { useEffect, useState } from "react";
import SearchProducts from "./SearchProducts";

const Navbar = () => {
  const { logout, user } = useAuth();

  const handleLogout = async () => {
    alert("LogOut successfully");
    await logout();
  };

  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchProducts(); // Fetch products when component mounts
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "https://fruiterer-server2.onrender.com/fruits"
      ); // Adjust URL as per your backend route
      setProducts(response.data); // Assuming response.data is an array of products
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) => {
    const productName = product.name || ""; // Default to empty string if product.name is undefined
    return productName.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
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
          <Link
            to={"/"}
            className="btn btn-ghost text-green-500 uppercase font-bold text-xl"
          >
            Fruits World
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link className="text-green-500 font-semibold" to={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link className="text-green-500 font-semibold" to={"/about"}>
                About
              </Link>
            </li>
            <li>
              <Link className="text-green-500 font-semibold" to={"/"}>
                Partners
              </Link>
            </li>
            <li>
              <Link className="text-green-500 font-semibold" to={"/menu"}>
                Menu
              </Link>
            </li>
            <li>
              <Link className="text-green-500 font-semibold" to={"/contact"}>
                Contact us
              </Link>
            </li>
            {!user && (
              <>
                <li>
                  <Link className="text-green-500 font-semibold" to={"/login"}>
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-green-500 font-semibold"
                    to={"/register"}
                  >
                    Register
                  </Link>
                </li>
              </>
            )}
            {user && (
              <li>
                <Link
                  className="text-green-500 font-semibold"
                  to={"/dashboard"}
                >
                  Dashboard
                </Link>
              </li>
            )}
          </ul>
        </div>
        {/* Search functinalities */}
        <div className="form-control">
          <input
            type="text"
            placeholder="Search Products"
            value={searchTerm}
            onChange={handleSearchChange}
            className="input input-bordered w-24 md:w-auto border-success"
          />
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

      {/* search products */}
      <div className="mb-64">
        <ul className="mt-20 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 justify-center items-center gap-10 lg:w-[1200px] mx-auto">
          {filteredProducts.map((product) => (
            <div className="card w-64 bg-base-100 shadow-xl">
            <figure>
              <img className="w-64 rounded-xl" src={product?.image_url} alt="fruits" />
            </figure>
            <div className="card-body shadow-2xl ">
              <div className="flex justify-between">
                <h2 className="card-title text-green-600 uppercase font-semibold  ">
                  {product?.title}
                </h2>
                <h3 className="text-xl font-semibold">
                  <span className="text-orange-400">$</span>
                  {product?.price}
                </h3>
              </div>
      
              <p>{products?.description}</p>
              <div className="flex flex-wrap -mt-3 gap-2">
                <img
                  className="w-[18px] h-[18px]"
                  src="/src/assets/img/icon/1.png"
                  alt=""
                />
                <img
                  className="w-[18px] h-[18px]"
                  src="/src/assets/img/icon/1.png"
                  alt=""
                />
                <img
                  className="w-[18px] h-[18px]"
                  src="/src/assets/img/icon/1.png"
                  alt=""
                />
                <img
                  className="w-[18px] h-[18px]"
                  src="/src/assets/img/icon/3.png"
                  alt=""
                />
                <img
                  className="w-[18px] h-[18px]"
                  src="/src/assets/img/icon/2.png"
                  alt=""
                />
              </div>
              <h3 className="text-xl font-semibold">{products?.brand}</h3>
      
              <div className="card-actions justify-center">
                <button className="btn bg-green-600 text-white w-3/4 font-sans">
                  <Link to={`/products/${product?._id}`}>See details</Link>
                </button>
              </div>
            </div>
          </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
