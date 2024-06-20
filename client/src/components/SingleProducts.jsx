/* eslint-disable react/prop-types */
// import { FaStar } from "react-icons/fa";
// import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import star from "../assets/star.png"

const SingleProducts = ({ fruit }) => {
  // console.log(fruit);

  const { _id, title, brand, price, description, image_url } = fruit;
  return (
    <div className="card w-64 bg-base-100 shadow-xl">
      <figure>
        <img className="w-64 rounded-xl h-40" src={image_url} alt="fruits" />
      </figure>
      <div className="card-body shadow-2xl ">
        <div className="flex justify-between">
          <h2 className="card-title text-green-600 uppercase font-semibold  ">
            {title}
          </h2>
          <h3 className="text-xl font-semibold">
            <span className="text-orange-400">$</span>
            {price}
          </h3>
        </div>

        <p>{description}</p>
        <div className="flex flex-wrap -mt-3 gap-2">
         
          <img className="w-32 mx-auto mt-2" src={star} alt="" />
        </div>
        <h3 className="text-xl font-semibold">{brand}</h3>

        <div className="card-actions justify-center">
          <button className="btn bg-green-600 text-white w-3/4 font-sans">
            <Link to={`/products/${_id}`}>See details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProducts;
