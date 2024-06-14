import back from "../../../assets/back.svg";
import womanInAwhiteDress from "../../../assets/womanInAwhiteDress.png";
import dropDownIcon from "../../../assets/dropDownIcon.svg";
import SellerPromationPagePlan from "./SellerPromationPageUI/SellerPromationPagePlan";

function SellerPromationPage() {
  return (
    <div className="text-[#2D2D2D] md:px-[120px] px-6 font-montserrat">
      <div className="flex items-center gap-3 mt-[61px] mb-[40px]">
        <img src={back} alt="back" />
        <p className="text-[18px] leading-[21.94px] font-medium">Go back</p>
      </div>
      <h1 className="flex items-center sm:text-[32px] sm:leading-[39.01px] text-[24px] leading-[29.26px] font-semibold">
        Promote Product
      </h1>
      <p className="sm:text-[18px] sm:leading-[21.94px] text-[16px] leading-[19.5px] text-[#777777] font-normal mt-2 mb-10">
        Promote your product and increase the visibility on Tradeet
      </p>
      <img src={womanInAwhiteDress} alt="back" />
      <h2 className="flex items-center sm:text-[32px] sm:leading-[39.01px] text-[24px] leading-[29.26px] font-semibold mt-10 mb-6">
        Product description
      </h2>
      <p className="letter-spacing-2-percent sm:text-[18px] sm:leading-[21.94px] text-[16px] leading-[19.5px] text-[#777777] font-normal mt-2 mb-10">
        Presenting our White Elegance Maxi Dress, a manifestation of timeless
        grace and contemporary style. This exquisite dress is crafted from
        premium, lightweight fabric, offering a perfect blend of comfort and
        sophistication. The flowing silhouette and subtle pleats create a
        flattering, graceful look for various occasions, from formal events to
        casual gatherings.{" "}
      </p>
      <h3 className="sm:text-[26px] sm:leading-[31.69px] text-[22px] leading-[26.82px] font-semibold">
        White Dress
      </h3>
      <div className="flex items-center flex-row gap-6 border-t border-b border-[#D9D9D9] max-w-[588px] h-[90px] mt-6">
        <h3 className="sm:text-[26px] sm:leading-[31.69px] text-[22px] leading-[26.82px] font-semibold">
          N15,000
        </h3>
        <div className="flex items-center gap-3">
          <p className="letter-spacing-2-percent text-[20px] leading-[24.38px] line-through">
            N25,000
          </p>
          <div className="letter-spacing-2-percent w-[53px] h-[42px] bg-[#D90A0A] rounded p-[10px] leading-[21.94px] text-[18px] text-[#FFFFFF]">
            61%
          </div>
        </div>
      </div>

      <h3 className="sm:text-[26px] sm:leading-[31.69px] text-[22px] leading-[26.82px] mt-6 font-semibold">
        Variation available
      </h3>

      <div className="flex flex-col gap-8 mt-6">
        <div className="flex items-center flow-row gap-7">
          <p className="letter-spacing-2-percent text-[18px] leading-[21.94px]">
            Colors:
          </p>
          <div className="relative w-[100px] h-[44px] border border-[#D9D9D9] rounded-md cursor-pointer px-[10px]">
            <select className="appearance-none w-full h-full bg-transparent text-black focus:outline-none text-[16px] leading-[19.5px] font-semibold">
              <option>Black</option>
              <option>White</option>
              <option>Red</option>
              <option>Yelow</option>
            </select>
            <img
              src={dropDownIcon}
              alt="Dropdown Icon"
              className="h-[10px] w-[19px] absolute top-1/2 right-2  transform -translate-y-1/2 pointer-events-none"
            />
          </div>
        </div>

        <div className="flex items-center flow-row gap-7">
          <p className="letter-spacing-2-percent text-[18px] leading-[21.94px]">
            Size:
          </p>
          <div className="relative w-[100px] h-[44px] border border-[#D9D9D9] rounded-md cursor-pointer px-[10px]">
            <select className="appearance-none w-full h-full bg-transparent text-black focus:outline-none text-[16px] leading-[19.5px] font-semibold">
              <option>X</option>
              <option>XL</option>
              <option>XXl</option>
              <option>XXXl</option>
            </select>
            <img
              src={dropDownIcon}
              alt="Dropdown Icon"
              className="h-[10px] w-[19px] absolute top-1/2 right-2  transform -translate-y-1/2 pointer-events-none"
            />
          </div>
        </div>
      </div>

      <SellerPromationPagePlan />
    </div>
  );
}

export default SellerPromationPage;
