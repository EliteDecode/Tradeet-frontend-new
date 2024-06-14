import React, { useState } from "react";
import { Link } from "react-router-dom";
import DonationConfirmPopup from "./DonationConfirmPopup";
import ToggleButton from "../UI/ToggleButton";
import { useNavigate } from "react-router-dom/dist";
import { MdArrowBackIos } from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";


function DonationItemsFilled() {
  const [showPopup, setShowPopup] = useState(false);
  const [isToggleButtonActive, setIsToggleButtonActive] = useState(false);
  const [isItem, setIsItem] = useState(false);
  const navigate = useNavigate()
  const handleConfirm = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleToggleButtonChange = () => {
    setIsToggleButtonActive((prev) => !prev);
  };

  return (
    <div className="max-w-screen-md mx-auto px-4 py-8">
      <button onClick={() => navigate(-1)}>
        <div className="items-center gap-2 md:text-lg text-base flex">
          <MdArrowBackIos /> Go Back
        </div>
      </button>

      <div className="md:border md:border-gray-300 md:p-8 rounded-lg my-8">
        <h2 className="md:text-2xl text-[22px] font-semibold border-b border-black-300 pb-4 mb-4 ps-8">
          {isItem ? "Enter quantity" : "Enter Amount"}
        </h2>

        {/* SVG */}
        {isItem && (
          <div className="flex gap-2 md:items-center mb-4 md:text-base text-sm text-[#777777]">
            <IoIosInformationCircleOutline size={24} />
            <span>
              item(s) donated to BuildHub will be displayed on Tradeet as
              GIVEAWAY ITEMS.
            </span>
          </div>
        )}

        {/* Boxes */}
        <div className="mb-6">
          <h3 className="md:text-sm text-xs font-semibold mb-2">
            {isItem ? "Item" : "Donation Amount"}
          </h3>
          <div className="border border-gray-300 p-4 rounded-md">
            <input
              type="text"
              className="w-full border-none outline-none md:text-sm text-xs"
              placeholder={
                isItem ? "Enter item details" : "Enter donation amount"
              }
            />
          </div>
          {!isItem && (
            <div className="flex items-center gap-1 md:text-sm text-xs">
              <IoIosInformationCircleOutline size={20} />
              <span>Minimum amount: &#8358;1,000 </span>
            </div>
          )}
        </div>
        {isItem && (
          <div className="mb-6">
            <h3 className="md:text-sm text-xs font-semibold mb-2">Quantity</h3>
            <div className="border border-gray-300 p-4 rounded-md">
              <input
                type="number"
                className="w-full border-none outline-none md:text-sm text-xs"
                placeholder="Enter quantity"
              />
            </div>
          </div>
        )}
        <div className="mb-6">
          <h3 className="md:text-sm text-xs font-semibold mb-2">
            Donation Message (optional)
          </h3>
          <div className="border border-gray-300 p-4 rounded-md">
            <textarea
              className="w-full border-none outline-none md:text-sm text-xs"
              rows="4"
              placeholder="Send message to the organization"
            ></textarea>
          </div>
        </div>

        <div className=" items-center mb-10">
          <div className="flex">
            <span onClick={handleToggleButtonChange}>
              <ToggleButton />
            </span>
            <span
              className={`md:text-sm text-xs x ${
                isToggleButtonActive ? "" : "font-semibold"
              }`}
            >
              &nbsp;Donate anonymously
            </span>
          </div>

          {isToggleButtonActive ? (
            <div className="flex items-center gap-1 mt-2 md:text-sm text-xs">
              <IoIosInformationCircleOutline size={20} />
              <span>Your name will be displayed as "ANONYMOUS DONOR"</span>
            </div>
          ) : (
            ""
          )}
        </div>

        {/* Confirm button */}
        <button
          className="w-full bg-[#12362A] text-white py-4 rounded-lg text-xl font-semibold"
          onClick={handleConfirm}
        >
          {isItem? "Confirm" : "Donate"}
        </button>
        {showPopup && <DonationConfirmPopup onCancel={handleClosePopup} />}
      </div>
    </div>
  );
}

export default DonationItemsFilled;
