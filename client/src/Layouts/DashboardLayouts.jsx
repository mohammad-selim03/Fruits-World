import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2 ">
        <div className="drawer lg:drawer-open sticky top-0">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            <label
              htmlFor="my-drawer-2"
              className="btn  bg-green-600 hover:bg-green-700 w-32 mt-52 text-white drawer-button lg:hidden sticky md:top-52"
            >
              Menu
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="bg-green-500 min-h-screen p-3">
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
        </div>
      </div>
      <div className="col-span-10 p-20">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
