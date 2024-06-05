/* eslint-disable react/prop-types */
import SingleProducts from "../SingleProducts";

const Products = ({ data }) => {
  // console.log(data);
  return (
    <div>
      <h1 className="my-8 text-2xl text-green-600 font-bold text-center">
        Our Products
      </h1>
      <div className="flex justify-center gap-4">
        {data?.slice(0 , 3).map((fruit) => (
          <SingleProducts key={fruit._id} fruit={fruit} />
        ))}
      </div>
    </div>
  );
};

export default Products;
