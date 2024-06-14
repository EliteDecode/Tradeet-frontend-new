import { useState } from "react";
import { Link } from "react-router-dom";
import ReactFlagsSelect from "react-flags-select";
import { customList } from "country-codes-list";

const ConfirmNumberForm = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  
  const countryCodes = customList("countryCode", "{countryCallingCode}");
  return (
    <form>
      <div className="rounded-[10px]  mt-8 w-full">
        <p className="ml-1 mb-1 text-[14px] text-[#2D2D2D] font-medium leading-[20px]">
          Country
        </p>
        <div className=" relative w-full">
          <ReactFlagsSelect
            selected={selectedCountry}
            onSelect={(code) => setSelectedCountry(code)}
            searchable
          />
        </div>
      </div>

      {/* Phone number */}
      <div className=" mt-4 ">
        <label
          htmlFor="phone"
          className="ml-1 mb-1 text-[14px] text-[#2D2D2D] font-medium leading-[20px]"
        >
          Phone Number
        </label>
        <div className=" relative">
          <p className="absolute top-3 left-3 font-medium">
            {Object.entries(countryCodes).map(([key, value]) => {
              if (key === selectedCountry) {
                return (
                  <span key={key} className="user-detail">
                    <span>+{value}</span>
                  </span>
                );
              } else {
                return null;
              }
            })}
          </p>
          <input
            name="phone"
            id="phone"
            type="number"
            placeholder="8100000000"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="flex justify-start items-center pl-16 md:w-[450px] w-full h-[46px] rounded-[10px] font-medium text-[16px] leading-[20px] border border-[#D9D9D9] focus:border-[#12362A] focus:outline-none "
          />
        </div>
      </div>

      {/* Continue button */}
      <Link to="/auth/verification">
        <button className="bg-[#12362A] md:w-[450px] w-full h-[46px] rounded-[8px] mt-6">
          <span className="text-white md:text-[20px] text-[18px] font-semibold leading-[24px]">
            Continue
          </span>
        </button>
      </Link>
    </form>
  );
};

export default ConfirmNumberForm;
