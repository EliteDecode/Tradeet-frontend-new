import React from "react";
import PopupImage from "../../assets/img/thumbs up.png";
import CloseButton from "../../assets/img/close-btn.png";

const Popup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-green-700 text-white p-12 rounded-lg shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 p-2 focus:outline-none"
        >
          <img src={CloseButton} alt="Close Button" className="w-6 h-6" />
        </button>
        <div className="flex items-center justify-center mb-4">
          <h2 className="text-2xl font-bold mr-4">Succesful</h2>
          <img
            src={PopupImage}
            alt="Image Description"
            className="w-12 h-12"
          />
        </div>
        <p className="text-lg">our team will contact you soon</p>
      </div>
    </div>
  );
};

export default Popup;