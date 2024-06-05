import { useLoaderData } from "react-router-dom";

export default function EditProfile() {
  const data = useLoaderData();
  console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;

    const age = form.age.value;
    const mobileNumber = form.mobileNumber.value;

    const userData = {
      name,
      age,
      mobileNumber,
      email: data?.email,
    };

    fetch(`https://fruiterer-server2.onrender.com/user/${data?.email}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <h1 className="text-center mb-4 font-bold text-2xl text-green-600">
        Edit profile
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-5">
        <div className="flex flex-col">
          <label className="text-green-600 font-semibold" htmlFor="">
            User Name
          </label>
          <input
            type="text"
            name="name"
            defaultValue={data?.name}
            className="py-2 px-1 rounded-lg bg-pink-50"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-green-600 font-semibold" htmlFor="">
            User Email
          </label>
          <input
            type="text"
            name="email"
            value={data?.email}
            disabled
            className="py-2 px-1 rounded-xl bg-pink-50"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-green-600 font-semibold" htmlFor="">
            User Age
          </label>
          <input
            type="text"
            name="age"
            className="py-2 px-1 rounded-xl bg-pink-50"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-green-600 font-semibold" htmlFor="">
            User Mobile
          </label>
          <input
            type="text"
            name="mobileNumber"
            className="py-2 px-1 rounded-xl bg-pink-50"
          />
        </div>
        <div>
          <button className="btn bg-green-600 text-white w-full uppercase">
            update profile
          </button>
        </div>
      </form>
    </div>
  );
}
