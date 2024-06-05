export default function Categoris() {
  return (

    // <div></div>
    <div>
      <h1 className="mt-12 text-center text-3xl font-bold ">
        Our Top Categories
      </h1>
      <div className="flex justify-center mt-6 gap-5 ">
        <div className="card w-96 bg-base-100 border-green-500 border-4 shadow-xl">
          <div className="card-body">
            
            <h3 className="text-center text-2xl font-bold text-green-600 uppercase">
            multiple fruits</h3>

            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card w-96 bg-base-100  border-green-500 border-4  shadow-xl">
          <div className="card-body">
            
            <h3 className="text-center text-2xl font-bold text-green-600 uppercase">aggregate fruit</h3>

            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card w-96 bg-base-100  border-green-500 border-4  shadow-xl">
          <div className="card-body">
            
            <h3 className="text-center text-2xl text-green-600 font-bold uppercase">Pome</h3>

            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
