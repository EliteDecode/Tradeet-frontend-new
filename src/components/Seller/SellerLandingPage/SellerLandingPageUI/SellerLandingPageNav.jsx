import tradeetLogo from "../../../../assets/TradeetLogo.png";
import hamburgerMenu from "../../../../assets/hamburgerMenu.png";
import cart from "../../../../assets/cart.png";
import search from "../../../../assets/search.png";
import car from "../../../../assets/car.png";

function SellerLandingPageNav() {
  return (
    <nav className="flex flex-col gap-5 xl:px-24 xl:py-4  px-6 py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8 cursor-pointer">
          <img src={hamburgerMenu} alt="" />
          <img src={tradeetLogo} alt="" />
        </div>

        <form className="lg:flex items-center gap-3 hidden ">
          <div className="relative w-full">
            <input
              className="min-w-[430px] w-full h-14 bg-[#FBFADB] focus:outline px-12 rounded-lg font-normal"
              type="text"
              placeholder="Search products, items and categories"
            />
            <img
              className="absolute top-5 left-4 font-inter font-semibold"
              src={search}
              alt=""
            />
          </div>
          <button className="bg-[#12362A] w-[103px] h-[55px] text-white rounded-lg font-inter font-semibold">
            Search
          </button>
        </form>

        <div className="flex items-center gap-[17px]">
          <div className="items-center gap-3 sm:flex hidden">
            <button className="bg-[#12362A] w-[103px] h-[55px] text-white rounded-lg font-inter font-semibold">
              Sign Up
            </button>
            <button className="text-[#12362A] w-[103px] h-[55px] bg-white rounded-lg border-2 border-[#12362A] font-montserrat font-semibold">
              log In
            </button>
          </div>
          <div className="flex items-center gap-4">
            <img className="sm:hidden block" src={car} alt="" />
            <img className="cursor-pointer" src={cart} alt="" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-full">
        <form className="flex items-center gap-3 lg:hidden w-full">
          <div className="relative w-full ">
            <input
              className=" w-full h-14 bg-[#FBFADB] focus:outline px-12 rounded-lg"
              type="text"
              placeholder="Search products, items and categories"
            />
            <img className="absolute top-5 left-4" src={search} alt="" />
          </div>
          <button className="bg-[#12362A] w-[103px] h-[55px] text-white rounded-lg sm:block hidden">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default SellerLandingPageNav;
