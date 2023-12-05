import React from "react";
import { Link } from "react-router-dom";

const Submit = () => {
  return (
    <Link
      to={"/submission"}
      className="h-[100vh] bg-black flex justify-center items-center cursor-pointer"
    >
      <div className="lg:w-[80%] w-[85%] h-[25vh] text-black bg-white border border-red-500 rounded-md p-5 flex items-center justify-center">
        <div className="w-full h-full flex items-center justify-center rounded-md border-4 border-dashed border-black">
          HEEREE
        </div>
      </div>
    </Link>
  );
};

export default Submit;
