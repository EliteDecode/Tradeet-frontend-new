import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const Accordion = ({ answer, question }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  
  return (
    <div className="w-full px-6 py-4 mt-8 bg-[#FBFADB] rounded-lg">
      <div className="w-full flex justify-between text-[#12362A] md:text-xl text-[18px] font-semibold my-2">
        <span>{question}</span>
        <button
          onClick={() => {
            setAccordionOpen(!accordionOpen);
          }}
          className=""
        >
          {accordionOpen ? <FaMinus size={24} /> : <FaPlus size={24} />}
        </button>
      </div>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-[#2D2D2D] ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden md:text-base text-sm">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;
