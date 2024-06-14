import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import Confirmationscreen from "./Confirmationscreen";
// import Back from "..//../assets/Vector.svg"
const CampaignForm = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  return (
    <>
      <div className=" flex flex-col text-[#2D2D2D] p-6 lg:px-24 ">
        <div
          className="flex flex-row border-b-[2px] border-[#D9D9D9] items-center gap-4 py-4 lg:border-none  "
        >
        <IoIosArrowBack color="#2D2D2D" size="22px" />

        <p className="text-[#2D2D2D] font-semibold text-[22px] leading-[26.82px] lg:hidden ">
          Campaign Creation
        </p>
        <p className="hidden lg:block lg:text-lg lg:leading-[21.94px] lg:font-medium">
          Go back
        </p>
      </div>

      <div className="   lg:mx-auto lg:w-8/12  lg:border-[#D9D9D9] lg:border-2 lg:rounded-lg">
        <form className="flex flex-col py-8 lg:p-4">
          <p className="font-semibold leading-[21.94px] text-lg lg:leading-[29.26px] lg:text-[26px] ">
            New Campaign
          </p>

          <div className="flex flex-col mt-6">
            <label className="font-medium text-sm leading-[17.07px] mb-3 lg:leading-[20.3px]">
              Campaign
            </label>
            <input
              className="rounded-lg border-[1px] p-4 border-[#2D2D2D]"
              type="text"
              required
            />
          </div>

          <div className="flex flex-col mt-6">
            <label className="font-medium text-sm leading-[17.07px] mb-3 lg:leading-[20.3px]">
              Campaign Target
            </label>
            <input
              className="rounded-lg border-[1px] p-4 border-[#2D2D2D]"
              type="text"
              required
            />
          </div>

          <div className="flex flex-col mt-6">
            <label className="font-medium text-sm leading-[17.07px] mb-3 lg:leading-[20.3px]">
              Duration
            </label>
            <select required className="rounded-lg border-[1px] p-4  border-[#2D2D2D]">
              <option value="2 months">2 Months</option>
              <option value="6 months">6 Months</option>
              <option value="1 year">1 year</option>
            </select>
          </div>

          <div className="flex flex-col mt-6">
            <label className="font-medium text-sm leading-[17.07px] mb-3 lg:leading-[20.3px]">
              Upload Document
            </label>
            <input
              className="rounded-lg border-[1px] p-4 border-[#2D2D2D]"
              type="file"
              required
              placeholder=".jpg, .jpeg, .png"
            />
          </div>

          <div className="flex flex-col mt-6">
            <label className="font-medium text-sm leading-[17.07px] mb-3 lg:leading-[20.3px]">
              Campaign Goal
            </label>
            <textarea required  className=" border-[1px] p-4 border-[#2D2D2D] rounded-lg"
            name="" id="" cols="30" rows="5">
            </textarea>
          </div>
          <button onClick={(e)=>{ e.preventDefault(); onOpenModal()}} className=" rounded-lg mt-6 bg-[#12362A] text-white 
          font-semibold text-base leading-[19.5px] p-4 border-[#2D2D2D] 
          lg:leading-[24.38px] lg:text-xl">
            Confirm
          </button>
          
        </form>
      </div>
    </div>
    {open && <Confirmationscreen open={open} setOpen={setOpen}/> }
    
    </>
  );
};

export default CampaignForm;
