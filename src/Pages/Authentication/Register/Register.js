import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { saveUser } from "../../../Api/users";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import useToken from "../../../hooks/useToken";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const imageBBKey = process.env.REACT_APP_imgbb_api_key;
  const [error, setError] = useState();
  // const [email, setEmail] = useState();
  // const [token] = useToken(email);
  const { createUser, updateUser, googleLogin } = useContext(AuthContext);
  // if (token) {
  //   navigate("/");
  // }
  const handleGoogleSignIn = () => {
    setError("");
    googleLogin()
      .then((result) => {
        const user = result.user;
        toast.success("You have been registered Successfully");
        console.log(user);
        const currentUserInfo = {
          userEmail: user?.email,
          userName: user?.displayName,
          userAvatar: user?.photoURL,
          role: "Buyer",
        };
        saveUser(currentUserInfo);
        // setEmail(currentUserInfo.userEmail);

        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err.message);
        console.error(err.message);
      });
  };
  const handleRegistration = (e) => {
    e.preventDefault();
    setError("");
    const name = e.target.name.value;
    const image = e.target.imageURL.files[0];
    console.log(image);
    const email = e.target.email.value;
    const password = e.target.password.value;
    const role = e.target.role.value;

    const formData = new FormData();
    formData.append("image", image);
    console.log(formData);
    fetch(`https://api.imgbb.com/1/upload?key=${imageBBKey}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.success) {
          createUser(email, password)
            .then((result) => {
              const user = result.user;
              console.log(user);
              const userProfile = {
                displayName: name,
                photoURL: data?.data?.url,
              };
              updateUser(userProfile).then(() => {
                const currentUserInfo = {
                  userEmail: user?.email,
                  userName: user?.displayName,
                  userAvatar: user?.photoURL,
                  role: role,
                };
                saveUser(currentUserInfo);
                // setEmail(currentUserInfo.userEmail);
                toast.success("You have been registered Successfully");
                e.target.reset();
                navigate(from, { replace: true });
              });
            })
            .catch((err) => {
              setError(err.message);
            });
        }
      });
  };
  return (
    <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-xl my-6">
      <div className="w-full px-6 py-4 md:px-8">
        <p className="text-3xl text-center text-gray-600 ">Welcome !</p>
        <Link
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center mt-3 text-gray-600 transition-colors duration-300 transform border rounded-lg hover:bg-gray-50 "
        >
          <div className="px-4 py-2">
            <svg className="w-6 h-6" viewBox="0 0 40 40">
              <path
                d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                fill="#FFC107"
              />
              <path
                d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                fill="#FF3D00"
              />
              <path
                d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                fill="#4CAF50"
              />
              <path
                d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                fill="#1976D2"
              />
            </svg>
          </div>
          <span className="w-5/6 px-4 py-3 font-bold text-center">
            Sign in with Google
          </span>
        </Link>
        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b lg:w-1/4"></span>
          <Link
            to="/register"
            className="text-xs text-center text-gray-500 uppercase hover:underline"
          >
            or sign up with email
          </Link>
          <span className="w-1/5 border-b lg:w-1/4"></span>
        </div>

        <form onSubmit={handleRegistration}>
          <div className="mt-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-600 "
              htmlFor="LoggingUserName"
            >
              User Name
            </label>
            <input
              required
              name="name"
              id="LoggingUserName"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
              type="text"
            />
          </div>
          <div className="mt-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-600"
              htmlFor="LoggingEmailAddress"
            >
              Image URL
            </label>
            <input
              required
              type="file"
              id="image"
              accept="image/*"
              name="imageURL"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="mt-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-600"
              htmlFor="LoggingEmailAddress"
            >
              Email Address
            </label>
            <input
              required
              name="email"
              id="LoggingEmailAddress"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="email"
            />
          </div>
          <div className="mt-4">
            <div className="flex justify-between">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 "
                htmlFor="loggingPassword"
              >
                Password
              </label>
              <Link className="text-xs text-gray-500 hover:underline">
                Forget Password?
              </Link>
            </div>
            <input
              required
              name="password"
              id="loggingPassword"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="password"
            />
          </div>
          <div className="mt-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-600"
              htmlFor="LoggingEmailAddress"
            >
              What are you?
            </label>
            <select
              name="role"
              className="select select-bordered select-md w-full max-w-xs"
            >
              <option defaultValue>Buyer</option>
              <option>Seller</option>
            </select>
          </div>
          <div className="mt-8">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Sign Up
            </button>
          </div>
          <h1 className="text-red-600 text-center text-sm mt-2">{error}</h1>
        </form>

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b  md:w-1/4"></span>

          <div to="/login" className="text-xs text-gray-500">
            Already registered? then{" "}
            <Link to="/login">
              <span className="font-semibold uppercase hover:underline">
                sign in
              </span>
            </Link>
          </div>
          <span className="w-1/5 border-b md:w-1/4"></span>
        </div>
      </div>
    </div>
  );
};

export default Register;
