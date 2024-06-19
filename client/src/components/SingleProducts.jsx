/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const SingleProducts = ({ fruit }) => {
  // console.log(fruit);

  const { _id, title, brand, price, description, image_url } = fruit;
  return (
    <div className="card w-64 bg-base-100 shadow-xl">
      <figure>
        <img className="w-64 rounded-xl" src={image_url} alt="fruits" />
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
