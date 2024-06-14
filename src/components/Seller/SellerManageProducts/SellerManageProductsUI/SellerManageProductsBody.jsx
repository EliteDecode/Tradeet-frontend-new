import PropTypes from "prop-types";
import SellerManageProductsBodyTable from "./SellerManageProductsBodyTable";
import shareLink from "../../../../assets/shareLink.svg";

function SellerManageProductsBody({
  handleOpenPromotion,
  handleClosePromotion,
  promotion,
}) {
  return (
    <div className="mb-[87px]">
      <div className="flex flex-col items-center font-montserrat mt-8 px-6 mb-[87px]">
        <div className="flex flex-col items-center justify-center gap-5 md:gap-14">
          <h1 className="sm:text-[32px] sm:leading-[39.01px] text-[24px] leading-[29.26px] font-semibold text-[#42684F] text-center">
            Tradeet Sellers Hub
          </h1>
          <div className="flex flex-row lg:flex lg:gap-[70px] px-7 sm:gap-[30px] gap-[10px] items-center justify-evenly">
            <div className="md:w-[220px] md:h-[166px] w-[105px] h-[79.23px] bg-[#12362A14] rounded-[10px] flex items-center justify-center text-black text-[14px] md:text-[24px] leading-[25px] text-center">
              Business Information
            </div>
            <div className="md:w-[220px] md:h-[166px] w-[105px] h-[79.23px] bg-[#12362A14] rounded-[10px] flex items-center justify-center text-black text-[14px] md:text-[24px] leading-[25px] text-center">
              Billing
            </div>
            <div className="md:w-[220px] md:h-[166px] w-[105px] h-[79.23px] bg-[#12362A] rounded-[10px] flex items-center justify-center text-white text-[14px] md:text-[24px] leading-[25px] text-center">
              Products
            </div>
          </div>
        </div>
        <button className="flex items-center justify-center rounded-lg bg-[#12362A] w-[221px] h-[56px] mt-[60px]">
          <div className="flex items-center gap-[10px]">
            <img src={shareLink} alt="" />
            <p className="text-[16px] leading-[23.2px] font-inter font-semibold text-[#FFFFFF]">
              Copy Shop Link
            </p>
          </div>
        </button>
      </div>
      <SellerManageProductsBodyTable
        handleOpenPromotion={handleOpenPromotion}
        handleClosePromotion={handleClosePromotion}
        promotion={promotion}
      />
    </div>
  );
}

SellerManageProductsBody.propTypes = {
  handleOpenPromotion: PropTypes.func.isRequired,
  handleClosePromotion: PropTypes.func.isRequired,
  promotion: PropTypes.bool.isRequired,
};

export default SellerManageProductsBody;
