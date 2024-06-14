import dropDownIcon from "../../../../assets/dropDownIcon.svg";
import back from "../../../../assets/back.svg";
import forward from "../../../../assets/forward.svg";

function Pagination() {
  return (
    <div className="flex items-center justify-between w-full px-[36px] sm:text-[20px] text-[10px] sm:leading-[24.38px] leading-[12.19px] font-semibold mt-[50px] mb-[30px]">
      <div className="relative sm:px-[10px] sm:w-[180px] w-[75px] sm:h-[61px] h-[30px] border border-[#D9D9D9] rounded-md cursor-pointer">
        <select className="w-full h-full px-2 text-black bg-transparent appearance-none sm:px-4 focus:outline-none">
          <option>Show: 10</option>
          <option>Show: 20</option>
          <option>Show: 50</option>
          <option>Show: 100</option>
        </select>
        <img
          src={dropDownIcon}
          alt="Dropdown Icon"
          className="absolute transform -translate-y-1/2 pointer-events-none top-1/2 sm:right-4 right-1"
        />
      </div>
      <div className="flex items-center gap-[10px]">
        <div className="flex items-center justify-center sm:w-[50px] w-[20px] sm:h-[48px] h-[20px] border border-[#2D2D2D] sm:rounded-[10px] rounded-[3px] cursor-pointer">
          <img
            className="sm:w-[12px] sm:h-[12px] w-[5px] h-[5px]"
            src={back}
            alt="Back Icon"
          />
        </div>
        <div className="flex items-center justify-center sm:w-[50px] w-[20px] sm:h-[48px] h-[20px] border border-[#00000040] sm:rounded-[10px] rounded-[3px] text-[#FFFFFF] bg-[#12362A] cursor-pointer">
          1
        </div>
        <div className="flex items-center justify-center sm:w-[50px] w-[20px] sm:h-[48px] h-[20px] border border-[#2D2D2D] sm:rounded-[10px] rounded-[3px] cursor-pointer">
          2
        </div>
        <div className="flex items-center justify-center sm:w-[50px] w-[20px] sm:h-[48px] h-[20px] border border-[#2D2D2D] sm:rounded-[10px] rounded-[3px] cursor-pointer">
          3
        </div>
        <div className="flex items-center justify-center sm:w-[50px] w-[20px] sm:h-[48px] h-[20px] border border-[#2D2D2D] sm:rounded-[10px] rounded-[3px] cursor-pointer">
          <img
            className="sm:w-[12px] sm:h-[12px] w-[5px] h-[5px]"
            src={forward}
            alt="Forward Icon"
          />
        </div>
      </div>
    </div>
  );
}

export default Pagination;
