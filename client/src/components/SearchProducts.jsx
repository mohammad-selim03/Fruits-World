import React, { useState, useEffect } from "react";
import axios from "axios"; // Assuming you use axios for HTTP requests
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
    const productName = product.name || ''; // Default to empty string if product.name is undefined
    return productName.toLowerCase().includes(searchTerm.toLowerCase());
  })
  return (
    <div>
      {/* Search input */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearchChange}
      />

      {/* Product list */}
      <ul>
        {filteredProducts.map((product) => (
          <li key={product._id}>
            <div>{product.name}</div>
            <div>{product.description}</div>
            <div>{product.price}</div>
            {/* Add more product details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchProducts;
