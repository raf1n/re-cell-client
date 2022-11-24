import React from "react";

const Blogs = () => {
  return (
    <section class="bg-white ">
      <div class="container px-6 py-12 mx-auto">
        <h1 class="text-2xl font-semibold text-gray-800 lg:text-4xl ">
          Frequently asked questions.
        </h1>

        <div class="grid grid-cols-1 gap-8 mt-8 lg:mt-16 md:grid-cols-2 xl:grid-cols-2">
          <div>
            <div class="inline-block p-3 text-white  bg-gray-700 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <div>
              <h1 class="text-xl font-semibold text-gray-700 ">
                What are the different ways to manage a state in a React
                application?
              </h1>

              <p class="mt-2 text-sm text-gray-500 ">
                There are four main types of state you need to properly manage
                in React apps: Local state - Local state is data we manage in
                one or another component. Global state - Global state is data we
                manage across multiple components.Server state - Data that comes
                from an external server that must be integrated with our UI
                state.URL state - Data that exists on our URLs, including the
                pathname and query parameters.
              </p>
            </div>
          </div>

          <div>
            <div class="inline-block p-3 text-white  bg-gray-700 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <div>
              <h1 class="text-xl font-semibold text-gray-700 ">
                How does prototypical inheritance work?
              </h1>

              <p class="mt-2 text-sm text-gray-500 ">
                The Prototypal Inheritance is a feature in javascript used to
                add methods and properties in objects. It is a method by which
                an object can inherit the properties and methods of another
                object. Traditionally, in order to get and set the "Prototype"
                of an object, we use Object. getPrototypeOf and Object.
              </p>
            </div>
          </div>

          <div>
            <div class="inline-block p-3 text-white  bg-gray-700 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <div>
              <h1 class="text-xl font-semibold text-gray-700 ">
                What is a unit test? Why should we write unit tests?
              </h1>

              <p class="mt-2 text-sm text-gray-500">
                What is meant by unit testing? A unit test is a way of testing a
                unit - the smallest piece of code that can be logically isolated
                in a system. The main objective of unit testing is to isolate
                written code to test and determine if it works as intended. Unit
                testing is an important step in the development process, because
                if done correctly, it can help detect early flaws in code which
                may be more difficult to find in later testing stages.
              </p>
            </div>
          </div>

          <div>
            <div class="inline-block p-3 text-white  bg-gray-700 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <div>
              <h1 class="text-xl font-semibold text-gray-700 ">
                React vs. Angular vs. Vue?
              </h1>

              <p class="mt-2 text-sm text-gray-500 ">
                React can be used as a UI library to render elements, without
                enforcing a specific project structure, and that's why it's not
                strictly a framework.
                <br />
                The Vue.js core library focuses on the View layer only. It's
                called a progressive framework because you can extend its
                functionality with official and third-party packages, such as
                Vue Router or Vuex, to turn it into an actual framework.
                <br />
                AngularJS, the original framework, is an MVC
                Model-View-Controller framework. But in Angular 2, there's no
                strict association with MV*-patterns as it is also
                component-based. Projects in Angular are structured into
                Modules, Components, and Services. Each Angular application has
                at least one root component and one root module.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
