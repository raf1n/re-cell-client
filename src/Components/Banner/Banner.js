import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="container px-6 py-14 mx-auto">
      <div className="items-center lg:flex">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <h1 className="text-2xl font-semibold text-gray-800 uppercase lg:text-3xl">
              Upgrading to the new Phone? Buy used but Great phone here for the
              less cash!
            </h1>

            <p className="mt-2 text-gray-600">
              Select your device & tell us about perfect price for you.
              <br />
              We offer you the best and fully freshed checked by professionals
              phone! Don't be confused! Check, buy and roll!
            </p>

            <Link to="/login">
              <button className="w-full btn tracking-wider px-6 py-2.5 mt-6 text-sm text-white transition-colors duration-300 transform rounded-md lg:w-auto focus:outline-none ">
                Be A USER & Explore Now
              </button>
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
          <img
            className="w-full h-full lg:max-w-sm"
            src="https://images.unsplash.com/photo-1578345218746-50a229b3d0f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
            alt="Catalogue-pana.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
