import boxImage from "../../../../assets/boxImage.png";
import arrow from "../../../../assets/Arrow.svg";

function SellOnTradeet() {
  return (
    <div className="px-5 py-16 cursor-default lg:p-32">
      <div className="flex lg:flex-row flex-col items-center justify-between bg-[#DFDFDF] rounded-[10px]">
        <img src={boxImage} alt="" />
        <div className="flex flex-col items-start gap-5 p-3 lg:pr-10">
          <h1 className="text-[#12362A] text-[36px] leading-[43.88px] text-center font-montserrat font-semibold">
            How to sell on Tradeet
          </h1>
          <p className="max-w-[411px] w-full text-base font-inter font-semibold">
            This updated beginner's guide provides an overview of how to create
            an account to sell, list products, fulfill your customer orders, and
            much more —whether you’re new to online retail or just new to the
            Tradeet store.
          </p>
          <div className="flex items-center justify-center gap-3 mb-10 font-semibold cursor-pointer font-montserrat">
            <h2 className="text-[#12362A] text-xl">
              Read the beginner's guide
            </h2>
            <img src={arrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellOnTradeet;
