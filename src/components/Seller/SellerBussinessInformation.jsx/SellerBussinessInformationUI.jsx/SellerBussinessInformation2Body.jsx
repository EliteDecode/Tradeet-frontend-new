import { useState } from "react";
import dropDownIcon from "../../../../assets/dropDownIcon.svg";
import reloadArrow from "../../../../assets/reloadArrow.svg";
import PinInput from "./PinInput";

function SellerBussinessInformation2Body() {
  const [isRotating, setIsRotating] = useState(false);

  const handleRotate = () => {
    setIsRotating(!isRotating);
  };

  return (
    <div className="flex flex-col items-center justify-center font-montserrat mt-8 px-6 mb-[87px]">
      <div className="flex flex-col items-center justify-center gap-5 md:gap-14">
        <h1 className="sm:text-[32px] sm:leading-[39.01px] text-[24px] leading-[29.26px] font-semibold text-[#42684F] text-center">
          Tradeet Sellers Hub
        </h1>
        <div className="flex flex-row lg:flex lg:gap-[70px] px-7 sm:gap-[30px] gap-[10px] items-center justify-evenly">
          <div className="md:w-[220px] md:h-[166px] w-[105px] h-[79.23px] bg-[#12362A] rounded-[10px] flex items-center justify-center text-white text-[14px] md:text-[24px] leading-[25px] text-center">
            Business Information
          </div>
          <div className="md:w-[220px] md:h-[166px] w-[105px] h-[79.23px] bg-[#12362A14] rounded-[10px] flex items-center justify-center text-black text-[14px] md:text-[24px] leading-[25px] text-center">
            Billing
          </div>
          <div className="md:w-[220px] md:h-[166px] w-[105px] h-[79.23px] bg-[#12362A14] rounded-[10px] flex items-center justify-center text-black text-[14px] md:text-[24px] leading-[25px] text-center">
            Products
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1102px] mt-20">
        <h1 className="text-[24px] leading-[40px] font-semibold text-[#2D2D2D]">
          Business Information
        </h1>
        <form className="shadow-custom border rounded-lg h-full pt-[38px] md:pr-[53px] md:pl-[31px] pr-[13px] pl-[13px] mt-3 pb-20">
          <div className="flex flex-col gap-8">
            <div>
              <label className="sm:leading-[20.3px] leading-[40px] text-[14px] sm:font-semibold font-medium">
                Business Name
              </label>
              <input
                className="w-full h-14 border border-[#D9D9D9] rounded-md px-3 placeholder:sm:text-[14px] placeholder:sm:leading-[17.07px] placeholder:text-[12px] placeholder:leading-[17.4px]"
                type="text"
                placeholder="BuildHubb"
              />
            </div>

            <div>
              <label className="sm:leading-[20.3px] leading-[40px] text-[14px] sm:font-semibold font-medium">
                Business Registration Number
              </label>
              <input
                className="w-full h-14 border border-[#D9D9D9] rounded-md px-3 placeholder:sm:text-[14px] placeholder:sm:leading-[17.07px] placeholder:text-[12px] placeholder:leading-[17.4px]"
                type="text"
                placeholder="200000200FD"
              />
            </div>
          </div>

          <div className="mt-[101px]">
            <h1 className="sm:leading-[20.3px] leading-[40px] text-[14px] sm:font-semibold font-medium">
              Registered Business Address
            </h1>
            <div className="flex lg:flex-row flex-col lg:gap-[13px] gap-6">
              <div className="flex flex-col lg:gap-[13px] gap-6 w-full">
                <div className="relative w-full">
                  <input
                    className="w-full h-14 border border-[#D9D9D9] rounded-md px-3 placeholder:sm:text-[14px] placeholder:sm:leading-[17.07px] placeholder:text-[12px] placeholder:leading-[17.4px]"
                    type="text"
                    placeholder="Nigeria"
                  />
                  <img
                    className="absolute top-[25px] right-5 h-[9.27px] w-[15px]"
                    src={dropDownIcon}
                    alt=""
                  />
                </div>

                <input
                  className="w-full h-14 border border-[#D9D9D9] rounded-md px-3 placeholder:sm:text-[14px] placeholder:sm:leading-[17.07px] placeholder:text-[12px] placeholder:leading-[17.4px]"
                  type="text"
                  placeholder="12 Babatunde Complex, Surulere"
                />

                <input
                  className="w-full h-14 border border-[#D9D9D9] rounded-md px-3 placeholder:sm:text-[14px] placeholder:sm:leading-[17.07px] placeholder:text-[12px] placeholder:leading-[17.4px]"
                  type="text"
                  placeholder="Lagos"
                />
              </div>

              <div className="flex flex-col gap-[13px] w-full">
                <input
                  className="w-full h-14 border border-[#D9D9D9] rounded-md px-3 placeholder:sm:text-[14px] placeholder:sm:leading-[17.07px] placeholder:text-[12px] placeholder:leading-[17.4px]"
                  type="text"
                  placeholder="500602"
                />

                <input
                  className="w-full h-14 border border-[#D9D9D9] rounded-md px-3 placeholder:sm:text-[14px] placeholder:sm:leading-[17.07px] placeholder:text-[12px] placeholder:leading-[17.4px]"
                  type="text"
                  placeholder="Address line 2"
                />

                <input
                  className="w-full h-14 border border-[#D9D9D9] rounded-md px-3 placeholder:sm:text-[14px] placeholder:sm:leading-[17.07px] placeholder:text-[12px] placeholder:leading-[17.4px]"
                  type="text"
                  placeholder="Lagos"
                />
              </div>
            </div>
          </div>

          <div className="mt-[105px] flex items-center gap-[72px]">
            <div className="bg-gradient-to-r from-[#ADBC9F] via-[rgba(173, 188, 159, 0)] max-w-[511px] w-full md:h-[127px] h-[59.65px] rounded-[10px]"></div>
            <img
              className={`${isRotating ? "rotate" : ""} cursor-pointer`}
              src={reloadArrow}
              alt=""
              onClick={handleRotate}
            />
          </div>

          <div className="flex lg:flex-row flex-col lg:gap-32 gap-16 mt-[101px]">
            <div className="flex flex-col gap-[13px] w-full">
              <div>
                <label className="sm:leading-[20.3px] leading-[40px] text-[14px] sm:font-semibold font-medium">
                  Type the characters above
                </label>
                <input
                  className="w-full h-14 border border-[#D9D9D9] rounded-md px-3 placeholder:sm:text-[14px] placeholder:sm:leading-[17.07px] placeholder:text-[12px] placeholder:leading-[17.4px]"
                  type="text"
                  placeholder="n8ZB77k"
                />
              </div>

              <div>
                <label className="sm:leading-[20.3px] leading-[40px] text-[14px] sm:font-semibold font-medium">
                  Email
                </label>
                <input
                  className="w-full h-14 border border-[#D9D9D9] rounded-md px-3 placeholder:sm:text-[14px] placeholder:sm:leading-[17.07px] placeholder:text-[12px] placeholder:leading-[17.4px]"
                  type="text"
                  placeholder="tradeet@example.com"
                />
              </div>

              <div>
                <label className="sm:leading-[20.3px] leading-[40px] text-[14px] sm:font-semibold font-medium">
                  Receive Pin Through
                </label>
                <PinInput />
              </div>
            </div>

            <div className="flex justify-end flex-col gap-[13px] w-full">
              <button className="lg:w-[372px] w-full h-[77px] bg-[#12362A] rounded-[15px] md:text-[24px] md:leading-[34.8px] text-[20px] leading-[29px] font-semibold text-white">
                Send Code
              </button>
              <button className="lg:w-[372px] w-full h-[77px] bg-[#ADBC9F] rounded-[15px] md:text-[24px] md:leading-[34.8px] text-[20px] leading-[29px] font-semibold text-white">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SellerBussinessInformation2Body;
