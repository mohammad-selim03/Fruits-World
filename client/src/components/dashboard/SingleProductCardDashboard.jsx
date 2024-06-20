/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import star from "../../assets/star.png";

// eslint-disable-next-line react/prop-types
const SingleProductCardDashboard = ({ fruit, onDelete }) => {
  const token = localStorage.getItem("token");
  const { _id, title, brand, price, description, image_url } = fruit;

  const handleDelete = async () => {
    await fetch(`https://fruiterer-server2.onrender.com/fruits/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        onDelete(_id);
      });
  };

  return (
    <div className="card w-72 bg-base-100 shadow-xl">
      <figure>
        <img className="w-72 h-52" src={image_url} alt="fruits" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-center">
          <h2 className="card-title uppercase text-green-600 font-semibold">
            {title}
          </h2>
          <h3 className="text-xl font-semibold text-orange-500 -mt-3">
            ${price}
          </h3>
        </div>
        <p>{description}</p>
        <h3 className="text-xl font-semibold">{brand}</h3>
        <div>
          <img className="w-32 mx-auto -mt-2" src={star} alt="" />
        </div>
        <div className="card-actions justify-center gap-4">
          <button className="btn bg-green-400 text-white text-xs w-14">
            <Link to={`edit/${_id}`}>Edit</Link>
          </button>
          <button className="btn bg-fuchsia-600 text-white text-xs w-20">
            <Link to={`/products/${_id}`}>See details</Link>
          </button>
          <button
            onClick={handleDelete}
            className="btn bg-red-500 text-white text-xs w-14"
          >
            Delete
          </button>
        </div>
      </div>
    </div>

    // my work
    // <div className="card lg:card-s_ide bg-base-100 shadow-xl">
    //   <figure>
    //     <img
    //       src={image_url}
    //       alt="Album"
    //     />
    //   </figure>
    //   <div className="card-body">
    //     <h1>{brand}</h1>
    //     <h2 className="card-title">{title}</h2>
    //     <p>{price}</p>
    //     <p>{description}</p>
    //     <div className="card-actions justify-end">
    //       <button className="btn btn-primary">Listen</button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default SingleProductCardDashboard;
