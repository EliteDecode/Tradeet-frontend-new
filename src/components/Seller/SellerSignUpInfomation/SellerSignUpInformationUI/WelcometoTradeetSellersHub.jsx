import { useNavigate } from "react-router-dom";
import dropDownIcon from "../../../../assets/dropDownIcon.svg";

function WelcometoTradeetSellersHub() {
  const navigate = useNavigate();

  const handleNavigation = (e) => {
    e.preventDefault();
    navigate("/SellerBussinessInformation1");
  };
  return (
    <div className="mx-5">
      <div className="flex flex-col items-center justify-center w-full font-montserrat">
        <div className="flex flex-col items-center justify-center w-full mt-10 ">
          <h1 className="sm:text-4xl text-[24px] leading-[25px] font-semibold max-w-[606px] w-full text-center mx-20">
            Welcome to
            <span className="text-[#42684F]"> Tradeet Sellers Hub!</span> Here's
            what to expect
          </h1>

          <div className="mt-10 flex flex-col items-center gap-[30px] ">
            <div className="flex sm:gap-[30px] gap-[20px]">
              <p className="min-w-[50px] h-[50px] bg-[#ADBC9F] rounded-full flex items-center justify-center text-[32px] leading-[50px] font-extrabold">
                1
              </p>
              <div className="flex flex-col items-start justify-center max-w-[528px] w-full">
                <h2 className="text-[24px] leading-[40px] sm:font-extrabold font-semibold">
                  Provide your Information and Document
                </h2>
                <p className="text-[20px] leading-[40px] font-medium text-[#2D2D2D]">
                  We need to collect relevant personal and business information
                  to comply with identification and verification measures. We
                  may require additional information or documents later.
                </p>
              </div>
            </div>

            <div className="flex sm:gap-[30px] gap-[20px]">
              <p className="min-w-[50px] h-[50px] bg-[#ADBC9F] rounded-full flex items-center justify-center text-[32px] leading-[50px] font-extrabold">
                2
              </p>
              <div className="flex flex-col items-start justify-center max-w-[528px] w-full">
                <h2 className="text-[24px] leading-[40px] sm:font-extrabold font-semibold">
                  We'll verify your submission
                </h2>
                <p className="text-[20px] leading-[40px] font-medium text-[#2D2D2D]">
                  You may be asked to meet with our Associate to verify your
                  submission. This is intended to help us keep a trusted
                  shopping destination.
                </p>
              </div>
            </div>

            <div className="flex sm:gap-[30px] gap-[20px]">
              <p className="min-w-[50px] h-[50px] bg-[#ADBC9F] rounded-full flex items-center justify-center text-[32px] leading-[50px] sm:font-extrabold font-semibold">
                3
              </p>
              <div className="flex flex-col items-start justify-center max-w-[528px] w-full">
                <h2 className="text-[24px] leading-[40px] sm:font-extrabold font-semibold">
                  Get verified and start selling!
                </h2>
                <p className="text-[20px] leading-[40px] font-medium text-[#2D2D2D]">
                  After we receive all of the required information, it will be
                  verified as soon as possible.
                </p>
              </div>
            </div>

            <div className="flex sm:gap-[30px] gap-[20px]">
              <p className="min-w-[50px] h-[50px] bg-[#ADBC9F] rounded-full flex items-center justify-center text-[32px] leading-[50px] font-extrabold">
                4
              </p>
              <div className="flex flex-col items-start justify-center max-w-[528px] w-full">
                <h2 className="text-[24px] leading-[40px] sm:font-extrabold font-semibold">
                  Promote your product
                </h2>
                <p className="text-[20px] leading-[40px] font-medium text-[#2D2D2D]">
                  Verified Sellers have the option to promote their products
                  through targeted marketing campaigns, to enhance visibility
                  and drive sales growth.
                </p>
              </div>
            </div>
          </div>

          <form className="flex flex-col gap-5 my-16 w-full max-w-[656px]">
            <div className="relative w-full">
              <input
                className="w-full h-[77px] border border-[#777777] placeholder:text-[#777777] px-2 rounded-[15px] sm:text-[14px] text-[12px]"
                type="text"
                placeholder="What country is your business located?"
              />
              <img
                className="absolute top-[34px] right-5 h-[9.27px] w-[15px]"
                src={dropDownIcon}
                alt=""
              />
            </div>
            <button
              onClick={handleNavigation}
              className="w-full h-[77px] bg-[#12362A] rounded-[15px] text-[24px] leading-[34.8px] text-white font-semibold"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default WelcometoTradeetSellersHub;
