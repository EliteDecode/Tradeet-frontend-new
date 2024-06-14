import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import backGroundImageDesktop from "../../../../assets/image17.png";
import backGroundImageMobile from "../../../../assets/image17(1).png";

function SellerLandingPageStartSelling() {
  const isMobile = useMediaQuery({
    query: "(max-width: 640px)",
  });

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/SellerSignUpInformation");
  };

  return (
    <div className="relative w-full">
      <img
        src={isMobile ? backGroundImageMobile : backGroundImageDesktop}
        alt=""
        className="w-full h-auto"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center w-full gap-4 px-10 text-center text-white 2xl:gap-8 xl:gap-6">
        <h1 className="md:text-[48px] md:leading-[58.51px] text-[32px] leading-[39.01px] font-semibold">
          Start Selling on <span className="text-[#12362A]">Tradeet</span>
        </h1>
        <p className="text-xl font-normal">
          Tradeet offers sellers an opportunity to reach millions of customers.
        </p>
        <button
          onClick={handleNavigation}
          className="flex items-center justify-center h-[55px] w-full sm:max-w-[718px] bg-[#12362A] md:text-base text-xl rounded-lg font-semibold"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default SellerLandingPageStartSelling;
