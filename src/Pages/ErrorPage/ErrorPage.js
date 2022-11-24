import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="flex flex-col items-center h-screen p-16">
      <img
        className="w-40"
        src="https://cdn-icons-png.flaticon.com/512/6358/6358087.png"
        alt=""
      />
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-gray-700">
            <span className="sr-only">Error</span>
            <div className="flex justify-center items-center h-full">404</div>
          </h2>
          <p className="text-2xl font-semibold md:text-3xl mb-8">
            Sorry, we couldn't find this page.
          </p>
          <Link to="/">
            <button className="btn px-8 py-3 text-white font-semibold rounded ">
              Back to homepage
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
