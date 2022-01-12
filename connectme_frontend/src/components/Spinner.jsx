import React from "react";
import HashLoader from "react-spinners/HashLoader";

const Spinner = ({ message }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full p-5">
      <HashLoader size={150} />
      <p className="text-lg text-center px-2 mt-10">{message}</p>
    </div>
  );
};

export default Spinner;
