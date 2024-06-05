import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddProducts() {
  const handleSubmit = async (e) => {
    const token = localStorage.getItem("token");
    e.preventDefault();
    toast("Product Add Successfully");

    const form = e.target;
    // const id = form.id.value;
    const title = form.title.value;
    // const brand = form.brand.value;
    const price = form.price.value;
    const dscription = form.dscription.value;
    const image_url = form.image_url.value;

    const data = { image_url, title, price, dscription };

    await fetch("https://fruiterer-server2.onrender.com/fruits", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
      });
  };
  return (
    <div>
      <h1 className="text-5xl font-bold text-green-600 text-center">
        Add a Product
      </h1>

      <div className="my-16">
        <form onSubmit={handleSubmit}>
          <div className="mt-3">
            <input
              className="bg-gray-100 p-4 w-full border rounded-lg border-green-600 "
              type="text"
              name="title"
              placeholder="Title"
            />
          </div>
          {/* <div className="mt-3">
            <input
              className="bg-gray-100 p-4 w-full border rounded-lg border-green-600 "
              type="text"
              name="brand"
              placeholder="Brand"
            />
          </div> */}
          <div className="mt-3">
            <input
              className="bg-gray-100 p-4 w-full border rounded-lg border-green-600 "
              type="number"
              name="price"
              placeholder="Price"
            />
          </div>
          <div className="mt-3">
            <input
              className="bg-gray-100 p-4 w-full border rounded-lg border-green-600 "
              type="text"
              name="dscription"
              placeholder="Dscription"
            />
          </div>
          <div className="mt-3">
            <input
              className="bg-gray-100 p-4 w-full border rounded-lg border-green-600 "
              type="text"
              name="image_url"
              placeholder="Image Url"
            />
          </div>

          <div className="mt-2 flex justify-center items-center ">
            <input
              className="btn mt-4 text-white  p-4 bg-green-600"
              type="submit"
              value="Add Product"
            />
            <ToastContainer />
          </div>
        </form>
      </div>
    </div>
  );
}
