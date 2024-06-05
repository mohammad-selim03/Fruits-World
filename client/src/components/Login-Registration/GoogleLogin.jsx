// import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";

const GoogleLogin = () => {
  const { googleLogin } = useAuth();

  const handleGoogleSignIn = () => {
    googleLogin().then((data) => {
      if (data?.user?.email) {
        const userInfo = {
          email: data?.user?.email,
          name: data?.user?.displayName,
        };
        fetch("https://fruiterer-server2.onrender.com/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("token", data?.token);
          });
      }
    });
  };

  return (
    <button onClick={handleGoogleSignIn} className="btn w-full">
      <div className="flex items-center gap-2">
        {/* <FcGoogle size={24} /> */}
        <p className="font-bold text-xl">
          <span className="text-blue-600">G</span>
          <span className="text-red-600">o</span>
          <span className="text-orange-500">o</span>
          <span className="text-blue-600">g</span>
          <span className="text-green-600">l</span>
          <span className="text-red-600">e</span>
        </p>
      </div>
    </button>
  );
};

export default GoogleLogin;
