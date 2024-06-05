import { useEffect, useState } from "react";
import SingleProductCardDashboard from "../components/dashboard/SingleProductCardDashboard";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AllProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fruiterer-server2.onrender.com/fruits `)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product._id !== id));
    alert("Are you sure you want to delete");

    toast("Product delete Successfully");
  };

  return (
    <div>
      <h1 className="text-5xl font-bold text-green-600 text-center">
        All Products
      </h1>
      <div className="my-16 flex flex-wrap  gap-4">
        {products.map((fruit) => (
          <SingleProductCardDashboard
            key={fruit._id}
            fruit={fruit}
            onDelete={handleDeleteProduct}
          />
        ))}
        <ToastContainer />
      </div>
    </div>
  );
}
