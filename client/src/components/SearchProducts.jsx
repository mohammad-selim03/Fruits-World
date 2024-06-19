import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, Link } from "react-router-dom";

const SearchProducts = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const search = query.get("search") || "";
    setSearchTerm(search);
    fetchProducts(search);
  }, [location.search]);

  const fetchProducts = async (search) => {
    try {
      const response = await axios.get("https://fruiterer-server2.onrender.com/fruits");
      const filteredProducts = response.data.filter(product => {
        const productTitle = product.title || ""; // Default to an empty string if product.title is undefined
        return productTitle.toLowerCase().includes(search.toLowerCase());
      });
      setProducts(filteredProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div className="min-h-screen w-[1200px] mx-auto">
      <h2 className="text-center uppercase font-bold underline mt-5">Products</h2>
      <ul className="mt-20 ml-20 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 w-[1200px] mx-auto gap-10">
        {products.map((product) => (
          <div key={product._id} className="card w-64 bg-base-100 shadow-xl">
            <figure>
              <img className="w-64 rounded-xl" src={product.image_url} alt={product.title} />
            </figure>
            <div className="card-body shadow-2xl">
              <div className="flex justify-between">
                <h2 className="card-title text-green-600 uppercase font-semibold">
                  {product.title}
                </h2>
                <h3 className="text-xl font-semibold">
                  <span className="text-orange-400">$</span>
                  {product.price}
                </h3>
              </div>
              <p>{product.description}</p>
              <div className="flex flex-wrap -mt-3 gap-2">
                <img className="w-[18px] h-[18px]" src="/src/assets/img/icon/1.png" alt="icon" />
                <img className="w-[18px] h-[18px]" src="/src/assets/img/icon/1.png" alt="icon" />
                <img className="w-[18px] h-[18px]" src="/src/assets/img/icon/1.png" alt="icon" />
                <img className="w-[18px] h-[18px]" src="/src/assets/img/icon/3.png" alt="icon" />
                <img className="w-[18px] h-[18px]" src="/src/assets/img/icon/2.png" alt="icon" />
              </div>
              <h3 className="text-xl font-semibold">{product.brand}</h3>
              <div className="card-actions justify-center">
                <button className="btn bg-green-600 text-white w-3/4 font-sans">
                  <Link to={`/products/${product._id}`}>See details</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default SearchProducts;
