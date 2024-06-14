import PropTypes from "prop-types";
import SellerManageProductsTable from "./SellerManageProductsTable";
import CustomSelect from "./CustomSelect";
import plusWithCircle from "../../../../assets/plusWithCircle.svg";
import flash from "../../../../assets/flash.svg";
import Pagination from "./Pagination";

const categoryOptions = [
  { value: "Category", label: "Category" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const statusOptions = [
  { value: "Status", label: "Status" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const pricingOptions = [
  { value: "Pricing", label: "Pricing" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const dateOptions = [
  { value: "CateDategory", label: "Date" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

function SellerManageProductsBodyTable({
  handleOpenPromotion,
  handleClosePromotion,
  promotion,
}) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center justify-center lg:px-[120px] px-[22px] font-montserrat w-full max-w-[1200px]">
        <div className="flex items-center justify-between w-full mb-10">
          <h1 className="text-[#2D2D2D] sm:text-[24px] text-[16px] sm:leading-[40px] leading-[25px] font-semibold">
            Product Management
          </h1>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
            <button className="hidden lg:flex items-center justify-center gap-2 sm:gap-4 rounded-lg border border-[#42684F] w-full sm:w-[221px] h-[48px] sm:h-[56px] px-2">
              <div
                onClick={handleOpenPromotion}
                className="flex items-center gap-2 sm:gap-4"
              >
                <img src={flash} alt="Flash Icon" />
                <p className="text-[11px] sm:text-[16px] leading-[15.95px] sm:leading-[23.2px] font-inter font-semibold text-[#42684F]">
                  Promote Product
                </p>
              </div>
            </button>

            <button className="flex items-center justify-center gap-2 sm:gap-4 rounded-lg bg-[#12362A] w-full sm:w-[221px] h-[48px] sm:h-[56px] px-2">
              <div className="flex items-center gap-2 sm:gap-4">
                <img src={plusWithCircle} alt="Plus Icon" />
                <p className="text-[11px] sm:text-[16px] leading-[15.95px] sm:leading-[23.2px] font-inter font-semibold text-[#FFFFFF]">
                  Add Product
                </p>
              </div>
            </button>
          </div>
        </div>
        <div className="shadow-table flex flex-col w-full h-full border-t border-[#2D2D2D] rounded-lg justify-start items-start">
          <div className="flex md:gap-[30px] gap-[10px] max-w-[810px] w-full md:mt-[30px] mt-[10px]">
            <CustomSelect name="Category" options={categoryOptions} />
            <CustomSelect name="Status" options={statusOptions} />
            <CustomSelect name="Pricing" options={pricingOptions} />
            <CustomSelect name="Date" options={dateOptions} />
          </div>

          <SellerManageProductsTable
            promotion={promotion}
            handleClosePromotion={handleClosePromotion}
          />
          <Pagination />
        </div>
      </div>
    </div>
  );
}

SellerManageProductsBodyTable.propTypes = {
  handleOpenPromotion: PropTypes.func.isRequired,
  handleClosePromotion: PropTypes.func.isRequired,
  promotion: PropTypes.bool.isRequired,
};

export default SellerManageProductsBodyTable;
