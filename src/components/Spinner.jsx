import { ImSpinner9 } from "react-icons/im";
import { Spinner } from "@material-tailwind/react";
import React from "react";

const Loading = () => {
  return (
    <div className="">
      <div className="absolute z-50 top-0 left-0 bg-gray-100/50 opacity- w-full h-screen flex justify-center items-center">
        <Spinner className="h-[50px] w-[50px]"/>
      </div>
    </div>
      
  );
};

export default Loading;
