import React from "react";

const Spinner = ({ customClass }) => {
  return (
    <div className="flex justify-center items-center">
      <div
        className={`w-16 h-16 border-4 border-dashed rounded-full animate-spin border-gray-900 m-6 ${customClass}`}
      ></div>
    </div>
  );
};

export default Spinner;
