import React from "react";

const Banner = () => {
  return (
    <div class="container px-6 py-16 mx-auto">
      <div class="items-center lg:flex">
        <div class="w-full lg:w-1/2">
          <div class="lg:max-w-lg">
            <h1 class="text-2xl font-semibold text-gray-800 uppercase lg:text-3xl">
              Upgrading to the new Phone? Buy used but Great phone here for the
              less cash!
            </h1>

            <p class="mt-2 text-gray-600">
              Select your device & tell us about perfect price for you.
              <br />
              We offer you the best and fully freshed checked by professionals
              phone! Don't be confused! Check, buy and roll!
            </p>

            <button class="w-full btn tracking-wider px-6 py-2.5 mt-6 text-sm text-white uppercase transition-colors duration-300 transform rounded-md lg:w-auto focus:outline-none ">
              Shop Now
            </button>
          </div>
        </div>

        <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
          <img
            class="w-full h-full lg:max-w-sm"
            src="https://images.unsplash.com/photo-1578345218746-50a229b3d0f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
            alt="Catalogue-pana.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
