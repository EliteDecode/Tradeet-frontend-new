import { useNavigate } from "react-router-dom";

function SellerPaymentInformationBody() {
  const navigate = useNavigate();

  const handleNavigate = (e) => {
    e.preventDefault();
    navigate("/SellerAddProduct");
  };

  return (
    <div className="flex flex-col items-center justify-center font-montserrat mt-8 px-6 mb-[87px]">
      <div className="flex flex-col items-center justify-center gap-5 md:gap-14">
        <h1 className="sm:text-[32px] sm:leading-[39.01px] text-[24px] leading-[29.26px] font-semibold text-[#42684F] text-center">
          Tradeet Sellers Hub
        </h1>
        <div className="flex flex-row lg:flex lg:gap-[70px] px-7 sm:gap-[30px] gap-[10px] items-center justify-evenly">
          <div className="md:w-[220px] md:h-[166px] w-[105px] h-[79.23px] bg-[#12362A14] rounded-[10px] flex items-center justify-center text-black text-[14px] md:text-[24px] leading-[25px] text-center">
            Business Information
          </div>
          <div className="md:w-[220px] md:h-[166px] w-[105px] h-[79.23px] bg-[#12362A] rounded-[10px] flex items-center justify-center text-white text-[14px] md:text-[24px] leading-[25px] text-center">
            Billing
          </div>
          <div className="md:w-[220px] md:h-[166px] w-[105px] h-[79.23px] bg-[#12362A14] rounded-[10px] flex items-center justify-center text-black text-[14px] md:text-[24px] leading-[25px] text-center">
            Products
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1102px] mt-20">
        <h1 className="text-[24px] leading-[40px] font-semibold text-[#2D2D2D]">
          Billing
        </h1>
        <form className="shadow-custom border rounded-lg h-full pt-[38px] md:pr-[53px] md:pl-[31px] pr-[13px] pl-[13px] mt-3 pb-20">
          <div className="flex flex-col gap-8">
            <div>
              <label className="sm:leading-[20.3px] leading-[40px] text-[14px] sm:font-semibold font-medium">
                Beneficiary Name
              </label>
              <input
                className="w-full h-14 border border-[#D9D9D9] rounded-md px-3 placeholder:sm:text-[14px] placeholder:sm:leading-[17.07px] placeholder:text-[12px] placeholder:leading-[17.4px]"
                type="text"
                placeholder="BuildHubb"
              />
            </div>

            <div>
              <label className="sm:leading-[20.3px] leading-[40px] text-[14px] sm:font-semibold font-medium">
                Bank Name
              </label>
              <input
                className="w-full h-14 border border-[#D9D9D9] rounded-md px-3 placeholder:sm:text-[14px] placeholder:sm:leading-[17.07px] placeholder:text-[12px] placeholder:leading-[17.4px]"
                type="text"
                placeholder="BuildHubb"
              />
            </div>

            <div>
              <label className="sm:leading-[20.3px] leading-[40px] text-[14px] sm:font-semibold font-medium">
                Account Number
              </label>
              <input
                className="w-full h-14 border border-[#D9D9D9] rounded-md px-3 placeholder:sm:text-[14px] placeholder:sm:leading-[17.07px] placeholder:text-[12px] placeholder:leading-[17.4px]"
                type="text"
                placeholder="0077224566"
                maxLength={10}
              />
            </div>
          </div>
          <button
            onClick={handleNavigate}
            className="max-w-[372px] w-full h-[77px] bg-[#12362A] rounded-[15px] text-white leading-[34.8px] font-semibold sm:mt-[81px] mt-10"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default SellerPaymentInformationBody;
