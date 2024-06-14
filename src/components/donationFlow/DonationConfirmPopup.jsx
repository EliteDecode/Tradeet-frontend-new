import React from 'react';

const DonationConfirmPopup = ({ onCancel, onConfirm }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 w-[365px]">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Reachout to charity</h2>
          <button onClick={onCancel}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <p className="text-center mb-6">
          Contact the charity team to discuss delivery process.
        </p>
        <div className="flex justify-between">
          <button
            className="px-4 py-2 rounded-lg bg-[#12362A] text-white mr-4 md:text-sm text-xs"
            onClick={onConfirm}
          >
            Call Charity
          </button>
          <button
            className="px-4 py-2 rounded-lg bg-gray-200 text-black md:text-sm text-xs"
            onClick={onConfirm}
          >
            Message Charity
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationConfirmPopup;