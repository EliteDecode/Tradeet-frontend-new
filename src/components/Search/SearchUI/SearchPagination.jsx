import { useState } from "react";
import rightArrow from "../../../assets/rightArrow.svg";
import leftArrow from "../../../assets/leftArrow.svg";

function SearchPagination() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = 3;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center justify-center gap-[30px] md:mt-[128px] mt-[62px]">
      <div
        className={`flex items-center justify-center w-[44.91px] h-[44.91px] border border-[#000000] cursor-pointer`}
        onClick={goToPrevPage}
      >
        <img src={leftArrow} alt="" />
      </div>
      {[...Array(totalPages).keys()].map((page) => (
        <div
          key={page}
          className={`flex items-center justify-center w-[29px] h-[43px] border ${
            currentPage === page + 1
              ? "border-[#000000] text-[#000000] cursor-default"
              : "border-[#CCCCCC] text-[#CCCCCC] cursor-pointer"
          }`}
          onClick={() => handlePageChange(page + 1)}
        >
          {page + 1}
        </div>
      ))}
      <div
        className="flex items-center justify-center w-[44.91px] h-[44.91px] border border-[#000000] cursor-pointer"
        onClick={goToNextPage}
      >
        <img src={rightArrow} alt="" />
      </div>
    </div>
  );
}

export default SearchPagination;
