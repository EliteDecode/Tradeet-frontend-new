import React, { useState } from "react";

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="flex items-center">
      <button
        onClick={toggleSwitch}
        className={`relative inline-flex flex-shrink-0 h-6 w-12 border-2  rounded-full cursor-pointer transition-colors focus:outline-none ${
          isOn ? "border-[#12362A] bg-gray-200" : "border-gray-400"
        }`}
        aria-pressed={isOn ? "true" : "false"}
        aria-labelledby="toggleLabel"
      >
        <span className="sr-only">Toggle</span>
        <span
          aria-hidden="true"
          className={`pointer-events-none inline-block m-1 h-3 w-3 rounded-full shadow-lg transform ring-0 transition ease-in-out duration-200 ${
            isOn ? "translate-x-6 bg-[#12362A]" : "translate-x-0 bg-gray-400"
          }`}
        />
      </button>
    </div>
  );
};

export default ToggleButton;