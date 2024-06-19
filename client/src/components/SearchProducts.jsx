import React, { useState, useEffect } from "react";
import axios from "axios"; // Assuming you use axios for HTTP requests
import { Link } from "react-router-dom";
const SearchProducts = () => {
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
    <div className="min-h-screen">
      <h2 className="text-center uppercase font-bold underline mt-5">products</h2>
      {/* Search input */}
     

      {/* Product list */}
      <ul className=" mt-20 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 w-[1200px] mx-auto gap-10">
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

              <p>{product?.description}</p>
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
              <h3 className="text-xl font-semibold">{product?.brand}</h3>

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
  );
};

export default SearchProducts;
