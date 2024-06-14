import rightArrow from "../../assets/rightArrow.svg";
import leftArrow from "../../assets/leftArrow.svg";
import star from "../../assets/star.svg";
import iphoneX from "../../assets/iphoneX.png";
import MatchNotFound from "../../assets/MatchNotFound.png";
import SearchPagination from "./SearchUI/SearchPagination";
import Filter from "./SearchUI/Filter";

function SearchPageEmpty() {
  const items = [
    {
      image: iphoneX,
      name: "iphone X",
      price: 500000,
      discount: 400000,
      discountPer: 20,
    },
    {
      image: iphoneX,
      name: "iphone X",
      price: 500000,
      discount: 400000,
      discountPer: 20,
    },
  ];

  return (
    <div className="px-6 sm:px-10 lg:px-[120px] mt-6 font-montserrat">
      {/* Header */}
      <div className="flex flex-col md:items-center items-start justify-between md:gap-16 gap-[23px] md:flex-row">
        <div className="flex flex-row items-center gap-3 md:-mt-6 text-nowrap text-[18px] leading-[21.94px] font-semibold">
          <div className="flex items-center gap-3 cursor-pointer">
            <img className="block md:hidden" src={leftArrow} alt="" />
            <p>Go bank</p>
          </div>
          <div className="flex-row items-center hidden gap-3 cursor-pointer md:flex">
            <p>All Product</p>
            <img src={rightArrow} alt="" />
            <p>Phone</p>
          </div>
        </div>

        <div className="flex items-center max-w-full w-full border-[#CCCCCCCC] border-t border-b h-[82px] px-3 font-inter text-[18px] leading-[21.94px] font-semibold">
          <h1>No result found</h1>
        </div>
        <div></div>
      </div>

      {/* body */}
      <div className="flex flex-col gap-10 md:items-start md:flex-row">
        <Filter />
        <div className="mb-[270px]">
          <div className="flex flex-col items-center justify-center sm:mt-[110px]  sm:mb-[148px] mb-[52px] cursor-default">
            <img src={MatchNotFound} alt="Match not found" />
            <div className="flex flex-col items-center gap-[19px] mt-[46px] mb-[42.62px] text-center letter-spacing-2-percent text-[18px] leading-[21.94px]">
              <h3 className="font-semibold">Product not found</h3>
              <p className="font-normal">Subheader text</p>
            </div>
          </div>
          <p className="mb-6 font-inter leading-[21.78px] text-[18px] font-medium xl:text-start text-center">
            Suggested Product
          </p>
          <div className="flex flex-wrap xl:flex-nowrap items-center justify-center gap-[50px]">
            {items.map((item, i) => (
              <div
                key={i}
                className="flex items-start flex-col w-[344px] px-[22px] py-3"
              >
                <img src={iphoneX} alt="" />
                <div className="flex flex-col gap-2 text-[18px] leading-[21.94px] font-medium mt-7">
                  <p>{item.name}</p>
                  <p>N{item.discount}</p>
                  <div>
                    <p>N{item.price}</p>
                    <div className="flex items-center justify-center bg-[#F2AAAA] w-[65px] h-[34px]">
                      -{item.discountPer}%
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                  </div>
                </div>

                <button className="w-full h-[55px] bg-[#12362A] mt-7 rounded-[10px] font-inter text-[16px] leading-[23.2px] text-[#FFFFFF]">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
          <SearchPagination />
        </div>
      </div>
    </div>
  );
}

export default SearchPageEmpty;
