import { useEffect, useRef, useState } from "react";
import { useWindowSize } from "react-use";
// import dropDownIcon2 from "../../../assets/dropDownIcon2.svg";
import Search from "../../../assets/Search.svg";
import { IoIosArrowDown } from "react-icons/io";


function Filter() {
  const { width } = useWindowSize();
  const [showDropDown, setShowDropDown] = useState(false);
  const [showPricesItems, setShowPricesItems] = useState(false);
  const [showCategoriesItems, setShowCategoriesItems] = useState(false);
  const [showBrandItems, setShowBrandItems] = useState(false);
  const [showSizeItems, setShowSizeItems] = useState(false);
  const [checkedState, setCheckedState] = useState({
    giveaway: false,
    soldItems: false,
    phonesTablets: false,
    computers: false,
    fashion: false,
    homeAppliances: false,
    officeAppliances: false,
    electronics: false,
    iphone: false,
    samsung: false,
    itel: false,
    tecno: false,
    pro: false,
    proMax: false,
  });
  const [searchTermBrand, setSearchTermBrand] = useState("");
  const [searchTermSize, setSearchTermSize] = useState("");

  const Brands = ["Iphone", "Samsung", "Itel", "Tecno"];
  const Sizes = ["Pro", "Pro Max", "Ultra"];

  const pricesRef = useRef(null);
  const categoriesRef = useRef(null);
  const brandRef = useRef(null);
  const sizeRef = useRef(null);

  useEffect(() => {
    if (width <= 640) {
      setShowDropDown(true);
      setShowPricesItems(false);
      setShowCategoriesItems(false);
      setShowBrandItems(false);
      setShowSizeItems(false);
    } else {
      setShowDropDown(false);
      setShowPricesItems(true);
      setShowCategoriesItems(true);
      setShowBrandItems(true);
      setShowSizeItems(true);
    }
  }, [width]);

  const scrollToSection = (ref) => {
    if (width <= 640 && ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const TogglePriceItems = () => {
    setShowPricesItems((prev) => !prev);
    scrollToSection(pricesRef);
  };

  const ToggleShowCategoriesItems = () => {
    setShowCategoriesItems((prev) => !prev);
    scrollToSection(categoriesRef);
  };

  const ToggleShowBrandItems = () => {
    setShowBrandItems((prev) => !prev);
    scrollToSection(brandRef);
  };

  const ToggleShowSizeItems = () => {
    setShowSizeItems((prev) => !prev);
    scrollToSection(sizeRef);
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedState((prevState) => {
      return {
        ...prevState,
        [name]: checked,
      };
    });
  };

  const handleBrandSearchChange = (event) => {
    setSearchTermBrand(event.target.value.toLowerCase());
  };

  const handleSizeSearchChange = (event) => {
    setSearchTermSize(event.target.value.toLowerCase());
  };

  const filteredBrands = Brands.filter((brand) =>
    brand.toLowerCase().includes(searchTermBrand)
  );

  const filteredSizes = Sizes.filter((size) =>
    size.toLowerCase().includes(searchTermSize)
  );

  return (
    <div>
      <form>
        <div className="flex items-center md:w-[331px] w-full h-[65px] px-6 text-[#2D2D2D]">
          <div className="flex items-center justify-between md:w-[299px] w-full">
            <h1 className="text-[24px] leading-[29.26px] text-[#000000] font-semibold">
              Filter
            </h1>
            <button className="w-[86px] h-[36px] bg-[#12362A] rounded-lg text-[#F9F9F9] text-[16px] leading-[23.2px] font-inter font-semibold">
              Save
            </button>
          </div>
        </div>

        <div
          className="text-[18px] leading-[21.94px] font-medium"
          ref={pricesRef}
        >
          <div className="flex items-center gap-[15px] px-6 w-[331px] h-[65px]">
            <h2 className="text-[#000000]">Prices</h2>
            {showDropDown && (
              <IoIosArrowDown
                onClick={TogglePriceItems}
                className="cursor-pointer"
              />
            )}
          </div>
          {showPricesItems && (
            <>
              <div
                onClick={handleCheckboxChange}
                className="w-[331px] h-[65px] flex items-center gap-3 pl-[43px]"
              >
                <input
                  className="accent-white custom-checkbox checked"
                  type="checkbox"
                  name="giveaway"
                  checked={checkedState.giveaway}
                  onChange={handleCheckboxChange}
                />
                <label>Giveaway</label>
              </div>
              <div className="w-[331px] h-[65px] flex items-center gap-3 pl-[43px]">
                <input
                  className="accent-white custom-checkbox"
                  type="checkbox"
                  name="soldItems"
                  checked={checkedState.soldItems}
                  onChange={handleCheckboxChange}
                />
                <label>Sold item</label>
              </div>
            </>
          )}
        </div>

        <div
          className="text-[18px] leading-[21.94px] font-medium"
          ref={categoriesRef}
        >
          <div className="flex items-center gap-[15px] px-6 w-[331px] h-[65px]">
            <h2 className="text-[#000000]">Categories</h2>
            {showDropDown && (
              <IoIosArrowDown
                onClick={ToggleShowCategoriesItems}
                className="cursor-pointer"
              />
            )}
          </div>
          {showCategoriesItems && (
            <>
              <div className="w-[331px] h-[65px] flex items-center gap-3 px-6">
                <input
                  className="accent-white custom-checkbox"
                  type="checkbox"
                  name="phonesTablets"
                  checked={checkedState.phonesTablets}
                  onChange={handleCheckboxChange}
                />
                <label>Phones & Tablets</label>
              </div>
              <div className="w-[331px] h-[65px] flex items-center gap-3 px-6">
                <input
                  className="accent-white custom-checkbox"
                  type="checkbox"
                  name="computers"
                  checked={checkedState.computers}
                  onChange={handleCheckboxChange}
                />
                <label>Computers</label>
              </div>
              <div className="w-[331px] h-[65px] flex items-center gap-3 px-6">
                <input
                  className="accent-white custom-checkbox"
                  type="checkbox"
                  name="fashion"
                  checked={checkedState.fashion}
                  onChange={handleCheckboxChange}
                />
                <label>Fashion</label>
              </div>
              <div className="w-[331px] h-[65px] flex items-center gap-3 px-6">
                <input
                  className="accent-white custom-checkbox"
                  type="checkbox"
                  name="homeAppliances"
                  checked={checkedState.homeAppliances}
                  onChange={handleCheckboxChange}
                />
                <label>Home Appliances</label>
              </div>
              <div className="w-[331px] h-[65px] flex items-center gap-3 px-6">
                <input
                  className="accent-white custom-checkbox"
                  type="checkbox"
                  name="officeAppliances"
                  checked={checkedState.officeAppliances}
                  onChange={handleCheckboxChange}
                />
                <label>Office Appliances</label>
              </div>
              <div className="w-[331px] h-[65px] flex items-center gap-3 px-6">
                <input
                  className="accent-white custom-checkbox"
                  type="checkbox"
                  name="electronics"
                  checked={checkedState.electronics}
                  onChange={handleCheckboxChange}
                />
                <label>Electronics</label>
              </div>
            </>
          )}
        </div>

        <div
          className="text-[18px] leading-[21.94px] font-medium"
          ref={brandRef}
        >
          <div className="flex items-center gap-[15px] px-6 w-[331px] h-[65px]">
            <h2 className="text-[#000000]">Brand</h2>
            {showDropDown && (
              <IoIosArrowDown
                onClick={ToggleShowBrandItems}
                className="cursor-pointer"
              />
            )}
          </div>
          {showBrandItems && (
            <>
              <div className="w-[270px] h-[48px] flex items-center px-6 relative">
                <input
                  className="w-full h-full border border-[#CCCCCC] rounded-lg pl-10"
                  type="text"
                  onChange={handleBrandSearchChange}
                />
                <img className="absolute left-10" src={Search} alt="" />
              </div>
              {filteredBrands.map((brand, i) => {
                const brandName = brand.toLowerCase();
                return (
                  <div
                    key={i}
                    className="w-[331px] h-[65px] flex items-center gap-3 px-6"
                  >
                    <input
                      className="accent-white custom-checkbox"
                      type="checkbox"
                      name={brandName}
                      checked={checkedState[brandName]}
                      onChange={handleCheckboxChange}
                    />
                    <label>{brand}</label>
                  </div>
                );
              })}
            </>
          )}
        </div>

        <div
          className="text-[18px] leading-[21.94px] font-medium"
          ref={sizeRef}
        >
          <div className="flex items-center gap-[15px] px-6 w-[331px] h-[65px]">
            <h2 className="text-[#000000]">Size</h2>
            {showDropDown && (
              <IoIosArrowDown
                onClick={ToggleShowSizeItems}
                className="cursor-pointer"
              />
            )}
          </div>
          {showSizeItems && (
            <>
              <div className="w-[270px] h-[48px] flex items-center px-6 relative">
                <input
                  className="w-full h-full border border-[#CCCCCC] rounded-lg pl-10"
                  type="text"
                  onChange={handleSizeSearchChange}
                />
                <img className="absolute left-10" src={Search} alt="" />
              </div>
              {filteredSizes.map((size, i) => {
                const sizeName = size.replace(/\s+/g, "").toLowerCase();
                return (
                  <div
                    key={i}
                    className="w-[331px] h-[65px] flex items-center gap-3 px-6"
                  >
                    <input
                      className="accent-white custom-checkbox"
                      type="checkbox"
                      name={sizeName}
                      checked={checkedState[sizeName]}
                      onChange={handleCheckboxChange}
                    />
                    <label>{size}</label>
                  </div>
                );
              })}
              {/* <div className="w-[331px] h-[65px] flex items-center gap-3 px-6">
                <input
                className="accent-white custom-checkbox"
                  type="checkbox"
                  name="proMax"
                  checked={checkedState.proMax}
                  onChange={handleCheckboxChange}
                />
                <label>Pro Max</label>
              </div>
              <div className="w-[331px] h-[65px] flex items-center gap-3 px-6">
                <input
                className="accent-white custom-checkbox"
                  type="checkbox"
                  name="ultra"
                  checked={checkedState.ultra}
                  onChange={handleCheckboxChange}
                />
                <label>Ultra</label>
              </div> */}
            </>
          )}
        </div>
      </form>
    </div>
  );
}

export default Filter;
