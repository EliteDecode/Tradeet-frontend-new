import React, { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

const DonationInput = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const showPasswordHandler = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  }

  return (
    <div className="pb-4 w-full mb-2">
      <h1 className="text-base text-gray-600 mb-2">
        {props.title}
        {props.important && <span className="text-red-500">*</span>}
      </h1>
      <div className="border-2 p-2 w-full text-sm rounded-md flex items-center justify-between">
        <input
          type={props.type}
          name={props.name}
          value={props.value}
          important={props.important}
          required={props.important}
          placeholder={props.placeholder}
          className="outline-none appearance-none w-full"
        />
        <button
          className={`${
            props.name === "password" ? "inline" : "hidden"
          } w-[1rem] text-center`}
          onClick={showPasswordHandler}
        >
          {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
        </button>
      </div>
    </div>
  );
};

export default DonationInput;
