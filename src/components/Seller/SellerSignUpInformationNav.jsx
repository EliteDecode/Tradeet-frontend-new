import tradeetLogo from "../../assets/TradeetLogo.png";
import hamburgerMenu from "../../assets/hamburgerMenu.png";
import cart from "../../assets/cart.png";
import search from "../../assets/search.png";
import car from "../../assets/car.png";
import dropDownIcon from "../../assets/dropDownIcon.png";
import profilePic from "../../assets/profilePic.jpg";

function SellerSignUpInformationNav() {
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

        <div className="flex items-center gap-8">
          <button className="sm:flex items-center justify-center hidden bg-[#12362A] w-[221px] h-[55px] text-white rounded-lg font-inter font-semibold">
            Track your order
          </button>
          <div className="flex items-center gap-4">
            <img className="sm:hidden block" src={car} alt="" />
            <img className="cursor-pointer" src={cart} alt="" />
          </div>
          <div className="sm:flex hidden items-center gap-3">
            <img
              className="cursor-pointer w-[32px] h-[32px] rounded-full border border-[#12362A]"
              src={profilePic}
              alt=""
            />

            <div className="cursor-pointer flex items-center gap-3">
              <p className="font-montserrat font-normal text-[16px] leading-[19.5px]">
                Profile
              </p>
              <img src={dropDownIcon} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-full">
        <div className="flex items-center gap-3 lg:hidden w-full">
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
        </div>
      </div>
    </nav>
  );
}

export default SellerSignUpInformationNav;
