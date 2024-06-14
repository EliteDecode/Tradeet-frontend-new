import { useState } from "react";
import greenCheck from "../../../../assets/greenCheck.svg";
import OverlayModal from "./OverlayModal";

function SellerPromationPagePlan() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="mt-10 text-[#2D2D2D] font-montserrat">
      <h1 className="sm:text-[32px] sm:leading-[39.01px] text-[24px] leading-[29.26px] font-semibold">
        Choose Promotion Plan
      </h1>
      <p className="sm:text-[18px] sm:leading-[21.94px] text-[16px] leading-[19.5px] text-[#777777]">
        Choose the plan that suits your goals and audience
      </p>
      <div className="flex xl:flex-nowrap flex-wrap gap-6 mt-6 mb-[60px] justify-center">
        <div className="w-full sm:w-[282px] border border-[#D9D9D9] rounded-md">
          <div className="border-b border-[#D9D9D9] h-16">
            <h3 className="text-[18px] leading-[21.94px] font-semibold px-6 py-[21px]">
              Freemium
            </h3>
          </div>

          <div className="border-b border-[#D9D9D9] h-[158px] px-6 flex flex-col gap-2">
            <h2 className="pt-6 text-[24px] leading-[29.26px] font-semibold">
              <span className="line-through">N</span>0
            </h2>
            <p className="text-[18px] leading-[21.94px]">For 2 days</p>
            <p className="text-[16px] leading-[19.5px]">Once a month</p>
          </div>

          <div className="flex flex-col border-b border-[#D9D9D9] h-[332px] px-6 pt-6 gap-2">
            <div className="flex items-start gap-[6px]">
              <img className="mt-1" src={greenCheck} alt="" />
              <p className="text-[16px] leading-[26px]">
                Maximum product promotion in search results and categories (1)
              </p>
            </div>
            <div className="flex items-start gap-[6px]">
              <img className="mt-1" src={greenCheck} alt="" />
              <p className="text-[16px] leading-[26px]">
                Auto-renew ads every 24 hours
              </p>
            </div>
          </div>

          <div className="border-t border-[#D9D9D9] h-[91px] py-5 px-6">
            <button
              onClick={toggleModal}
              className="w-full sm:w-[234px] h-[47px] border border-[#12362A] rounded-lg font-inter text-[16px] leading-[23.2px] font-semibold text-[#12362A]"
            >
              Choose Plan
            </button>
          </div>
        </div>

        <div className="w-full sm:w-[282px] border border-[#D9D9D9] rounded-md">
          <div className="border-b border-[#D9D9D9] h-16">
            <h3 className="text-[18px] leading-[21.94px] font-semibold px-6 py-[21px]">
              Bronze
            </h3>
          </div>

          <div className="border-b border-[#D9D9D9] h-[158px] px-6 flex flex-col gap-2">
            <h2 className="pt-6 text-[24px] leading-[29.26px] font-semibold">
              <span className="line-through">N</span>5000
            </h2>
            <p className="text-[18px] leading-[21.94px]">For 30 days</p>
          </div>

          <div className="flex flex-col border-b border-[#D9D9D9] h-[332px] px-6 pt-6 gap-2">
            <div className="flex items-start gap-[6px]">
              <img className="mt-1" src={greenCheck} alt="" />
              <p className="text-[16px] leading-[26px]">
                Maximum product promotion in search results and categories (2)
              </p>
            </div>
            <div className="flex items-start gap-[6px]">
              <img className="mt-1" src={greenCheck} alt="" />
              <p className="text-[16px] leading-[26px]">
                Auto-renew ads every 24 hours
              </p>
            </div>
            <div className="flex items-start gap-[6px]">
              <img className="mt-1" src={greenCheck} alt="" />
              <p className="text-[16px] leading-[26px]">
                3 days of Tradeet on-site ads
              </p>
            </div>
          </div>

          <div className="border-t border-[#D9D9D9] h-[91px] py-5 px-6">
            <button
              onClick={toggleModal}
              className="w-full sm:w-[234px] h-[47px] border border-[#12362A] rounded-lg font-inter text-[16px] leading-[23.2px] font-semibold text-[#12362A]"
            >
              Choose Plan
            </button>
          </div>
        </div>

        <div className="w-full sm:w-[282px] border border-[#D9D9D9] rounded-md">
          <div className="flex items-center justify-between border-b border-[#D9D9D9] h-16 bg-[#42684F] text-[#FFFFFF] px-6 py-[21px] rounded-md">
            <h3 className="text-[18px] leading-[21.94px] font-semibold ">
              Silver
            </h3>
            <div className="border border-[#12362A] bg-[#3c8069] rounded-[5px] p-1">
              <p className="text-[12px] leading-[14.63px] font-semibold">
                Recommended
              </p>
            </div>
          </div>

          <div className="border-b border-[#D9D9D9] h-[158px] px-6 flex flex-col gap-2">
            <h2 className="pt-6 text-[24px] leading-[29.26px] font-semibold">
              <span className="line-through">N</span>7500
            </h2>
            <p className="text-[18px] leading-[21.94px]">For 30 days</p>
          </div>

          <div className="flex flex-col border-b border-[#D9D9D9] h-[332px] px-6 pt-6 gap-2">
            <div className="flex items-start gap-[6px]">
              <img className="mt-1" src={greenCheck} alt="" />
              <p className="text-[16px] leading-[26px]">
                Maximum product promotion in search results and categories (3)
              </p>
            </div>
            <div className="flex items-start gap-[6px]">
              <img className="mt-1" src={greenCheck} alt="" />
              <p className="text-[16px] leading-[26px]">
                Auto-renew ads every 24 hours
              </p>
            </div>
            <div className="flex items-start gap-[6px]">
              <img className="mt-1" src={greenCheck} alt="" />
              <p className="text-[16px] leading-[26px]">
                7 days of Tradeet on-site ads
              </p>
            </div>
          </div>

          <div className="border-t border-[#D9D9D9] h-[91px] py-5 px-6">
            <button
              onClick={toggleModal}
              className="w-full sm:w-[234px] h-[47px] border border-[#12362A] bg-[#12362A] rounded-lg font-inter text-[16px] leading-[23.2px] font-semibold text-[#FFFFFF]"
            >
              Choose Plan
            </button>
          </div>
        </div>

        <div className="w-full sm:w-[282px] border border-[#D9D9D9] rounded-md">
          <div className="border-b border-[#D9D9D9] h-16">
            <h3 className="text-[18px] leading-[21.94px] font-semibold px-6 py-[21px]">
              Gold
            </h3>
          </div>

          <div className="border-b border-[#D9D9D9] h-[158px] px-6 flex flex-col gap-2">
            <h2 className="pt-6 text-[24px] leading-[29.26px] font-semibold">
              <span className="line-through">N</span>10,000
            </h2>
            <p className="text-[18px] leading-[21.94px]">For 30 days</p>
          </div>

          <div className="flex flex-col border-b border-[#D9D9D9] h-[332px] px-6 pt-6 gap-2">
            <div className="flex items-start gap-[6px]">
              <img className="mt-1" src={greenCheck} alt="" />
              <p className="text-[16px] leading-[26px]">
                Maximum product promotion in search results and categories (5)
              </p>
            </div>
            <div className="flex items-start gap-[6px]">
              <img className="mt-1" src={greenCheck} alt="" />
              <p className="text-[16px] leading-[26px]">
                Auto-renew ads every 24 hours
              </p>
            </div>
            <div className="flex items-start gap-[6px]">
              <img className="mt-1" src={greenCheck} alt="" />
              <p className="text-[16px] leading-[26px]">
                15 days of Tradeet on-site ads
              </p>
            </div>
            <div className="flex items-start gap-[6px]">
              <img className="mt-1" src={greenCheck} alt="" />
              <p className="text-[16px] leading-[26px]">
                2 days of Meta and Google ads Tradeet Managers call
              </p>
            </div>
          </div>

          <div className="border-t border-[#D9D9D9] h-[91px] py-5 px-6">
            <button
              onClick={toggleModal}
              className="w-full sm:w-[234px] h-[47px] border border-[#12362A] rounded-lg font-inter text-[16px] leading-[23.2px] font-semibold text-[#12362A]"
            >
              Choose Plan
            </button>
          </div>
        </div>
      </div>
      <OverlayModal show={showModal} onClose={toggleModal} />
    </div>
  );
}

export default SellerPromationPagePlan;
