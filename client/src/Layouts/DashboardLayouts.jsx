import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2 bg-pink-100 min-h-screen p-12">
        <ul className="bg-green-500 rounded-xl p-3">
          <li className="  rounded-xl mb-4 p-4 text-center text-white font-semibold text w-full">
            <Link to={""}>Dashboard</Link>
          </li>
          <li className=" rounded-xl mb-4 p-4 text-center text-white font-semibold  text w-full">
            <Link to={"all-products"}>All Products</Link>
          </li>
          <li className=" rounded-xl mb-4 p-4 text-center text-white font-semibold text w-full">
            <Link to={"add-products"}>Add Product</Link>
          </li>
          <li className=" rounded-xl mb-4 p-4 text-center text-white font-semibold  text w-full">
            <Link to={"/"}>Home</Link>
          </li>
        </ul>    
      </div>
      <div className="col-span-10 p-20">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;