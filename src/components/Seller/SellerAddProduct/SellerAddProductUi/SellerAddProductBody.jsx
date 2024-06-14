import cancel from "../../../../assets/cancel.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import FileUpload from "./FileUpload";

const initialColorStateTag = [
  { id: 1, isColorChanged: false },
  { id: 2, isColorChanged: false },
  { id: 3, isColorChanged: false },
  { id: 4, isColorChanged: false },
  { id: 5, isColorChanged: false },
  { id: 6, isColorChanged: false },
];

const initialColorStateSize = [
  { id: 1, isColorChanged: false },
  { id: 2, isColorChanged: false },
  { id: 3, isColorChanged: false },
  { id: 4, isColorChanged: false },
  { id: 5, isColorChanged: false },
  { id: 6, isColorChanged: false },
];

function SellerAddProductBody() {
  const navigate = useNavigate();

  const handleNavigate = (e) => {
    e.preventDefault();
    navigate("/SellerManageProducts");
  };

  const [colorStatesTag, setColorStatesTag] = useState(initialColorStateTag);
  const [colorStatesSize, setColorStatesSize] = useState(initialColorStateSize);

  const handleAddTag = (id) => {
    setColorStatesTag((prevStates) =>
      prevStates.map((state) =>
        state.id === id ? { ...state, isColorChanged: true } : state
      )
    );
  };

  const handleRemoveTag = (id) => {
    setColorStatesTag((prevStates) =>
      prevStates.map((state) =>
        state.id === id ? { ...state, isColorChanged: false } : state
      )
    );
  };

  const handleAddSize = (id) => {
    setColorStatesSize((prevStates) =>
      prevStates.map((state) =>
        state.id === id ? { ...state, isColorChanged: true } : state
      )
    );
  };

  const handleRemoveSize = (id) => {
    setColorStatesSize((prevStates) =>
      prevStates.map((state) =>
        state.id === id ? { ...state, isColorChanged: false } : state
      )
    );
  };

  const commonClassesTag =
    "shadow-custom w-[104px] h-[47px] flex items-center justify-between px-[13px] rounded-md border border-[#D9D9D9]";
  const changedColorClassesTag = "bg-[#12362A] text-[#FFFFFF]";
  const defaultColorClassesTag = "bg-[#FFFFFF] text-[#000000]";

  const changedColorClassesSize = "bg-[#12362A] text-[#FFFFFF]";
  const defaultColorClassesSize = "bg-[#FFFFFF] text-[#000000]";

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
          <div className="md:w-[220px] md:h-[166px] w-[105px] h-[79.23px] bg-[#12362A14] rounded-[10px] flex items-center justify-center text-black text-[14px] md:text-[24px] leading-[25px] text-center">
            Billing
          </div>
          <div className="md:w-[220px] md:h-[166px] w-[105px] h-[79.23px] bg-[#12362A] rounded-[10px] flex items-center justify-center text-white text-[14px] md:text-[24px] leading-[25px] text-center">
            Products
          </div>
        </div>
      </div>

      <div className="mt-20 w-full max-w-[1102px]">
        <h1 className="text-[24px] leading-[40px] font-semibold text-[#2D2D2D]">
          Add Product
        </h1>
        <form className="flex flex-col items-center justify-center w-full mt-[19px]">
          <div className="flex flex-col items-center w-full h-full gap-10 xl:flex-row xl:items-start xl:gap-5">
            <div className="shadow-custom custom-scrollbar border rounded-lg flex-grow w-full max-w-[552px] px-4 sm:px-[30px] pb-20 xl:h-[1120px] h-full overflow-y-scroll">
              <h1 className="mt-14 leading-[20.3px] text-[14px] font-semibold">
                Add Image
              </h1>
              <FileUpload />

              <p className="text-right mt-[21px] text-[#FB0614] text-[14px] leading-[17.07px] font-semibold cursor-pointer">
                Cancel
              </p>
            </div>
            <div className="shadow-custom border rounded-lg flex-grow w-full max-w-[552px] px-[30px] pb-20 h-full flex flex-col gap-[29px]">
              <div className="flex flex-col max-w-full mt-[30px]">
                <label className="text-[14px] leading-[20.3px] font-semibold mt-[6px]">
                  Product Name
                </label>
                <input
                  className="w-full h-14 border border-[#D9D9D9] px-4 rounded-md placeholder:leading-[17.07px] placeholder:text-[14px]"
                  type="text"
                  placeholder="Cropped Top- Yellow"
                />
              </div>

              <div className="flex flex-col max-w-full">
                <label className="text-[14px] leading-[20.3px] font-semibold mt-[6px]">
                  Category
                </label>
                <input
                  className="w-full h-14 border border-[#D9D9D9] px-4 rounded-md placeholder:leading-[17.07px] placeholder:text-[14px]"
                  type="text"
                  placeholder="Women"
                />
              </div>

              <div className="flex flex-col max-w-full">
                <label className="text-[14px] leading-[20.3px] font-semibold mt-[6px]">
                  Sub-Category
                </label>
                <input
                  className="w-full h-14 border border-[#D9D9D9] px-4 rounded-md placeholder:leading-[17.07px] placeholder:text-[14px]"
                  type="text"
                  placeholder="Crop top"
                />
              </div>

              <div className="flex flex-col max-w-full">
                <label className="text-[14px] leading-[20.3px] font-semibold mt-[6px]">
                  Price
                </label>
                <input
                  className="w-full h-14 border border-[#D9D9D9] px-4 rounded-md placeholder:leading-[17.07px] placeholder:text-[14px]"
                  type="text"
                  placeholder="N35,000"
                />
              </div>

              <div className="flex flex-col max-w-full">
                <label className="text-[14px] leading-[20.3px] font-semibold mt-[6px]">
                  Description
                </label>
                <textarea
                  className="w-full h-[146px] pr-[25px] py-2 border border-[#D9D9D9] px-4 rounded-md placeholder:leading-[25px] placeholder:text-[14px]"
                  type="text"
                  placeholder="100% cotton material that gives you comfortable feeling with high quality cool, trendy, unique, charming and fashionable appearance. It is designed to meet the need of every customers."
                ></textarea>
              </div>

              <div className="flex flex-col max-w-full cursor-default">
                <label className="text-[14px] leading-[20.3px] font-semibold mb-[6px]">
                  Size
                </label>
                <div className="shadow-custom w-full h-full leading-[17.07px] text-[14px] font-semibold">
                  <div className="flex flex-wrap sm:flex-nowrap items-center gap-[17px] w-full pt-[10px] pb-[10px] pr-[14px] pl-[22px]">
                    <div
                      className={`shadow-custom w-[188px] h-[47px] flex items-center justify-between px-[13px] rounded-md border border-[#D9D9D9] ${
                        colorStatesSize[0].isColorChanged
                          ? changedColorClassesSize
                          : defaultColorClassesSize
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddSize(1);
                      }}
                    >
                      <p className="text-[14px] leading-[17.07px] font-semibold">
                        S
                      </p>
                      <img
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemoveSize(1);
                        }}
                        className={`cursor-pointer ${
                          colorStatesSize[0].isColorChanged
                            ? "filter brightness-0 invert"
                            : ""
                        }`}
                        src={cancel}
                        alt=""
                      />
                    </div>

                    <div
                      className={`shadow-custom w-[104px] h-[47px]  flex items-center justify-between px-[13px] rounded-md border border-[#D9D9D9] ${
                        colorStatesSize[1].isColorChanged
                          ? changedColorClassesSize
                          : defaultColorClassesSize
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddSize(2);
                      }}
                    >
                      <p className="text-[14px] leading-[17.07px] font-semibold">
                        M
                      </p>
                      <img
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemoveSize(2);
                        }}
                        className={`cursor-pointer ${
                          colorStatesSize[1].isColorChanged
                            ? "filter brightness-0 invert"
                            : ""
                        }`}
                        src={cancel}
                        alt=""
                      />
                    </div>

                    <div
                      className={`shadow-custom w-[130px] h-[47px]  flex items-center justify-between px-[13px] rounded-md border border-[#D9D9D9] ${
                        colorStatesSize[2].isColorChanged
                          ? changedColorClassesSize
                          : defaultColorClassesSize
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddSize(3);
                      }}
                    >
                      <p className="text-[14px] leading-[17.07px] font-semibold">
                        L
                      </p>
                      <img
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemoveSize(3);
                        }}
                        className={`cursor-pointer ${
                          colorStatesSize[2].isColorChanged
                            ? "filter brightness-0 invert"
                            : ""
                        }`}
                        src={cancel}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap sm:flex-nowrap items-center gap-[17px] w-full pt-[10px] pb-[10px] pr-[14px] pl-[22px]">
                    <div
                      className={`shadow-custom w-[147px] h-[47px]  flex items-center justify-between px-[13px] rounded-md border border-[#D9D9D9] ${
                        colorStatesSize[3].isColorChanged
                          ? changedColorClassesSize
                          : defaultColorClassesSize
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddSize(4);
                      }}
                    >
                      <p className="text-[14px] leading-[17.07px] font-semibold">
                        XL
                      </p>
                      <img
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemoveSize(4);
                        }}
                        className={`cursor-pointer ${
                          colorStatesSize[3].isColorChanged
                            ? "filter brightness-0 invert"
                            : ""
                        }`}
                        src={cancel}
                        alt=""
                      />
                    </div>

                    <div
                      className={`shadow-custom w-[147px] h-[47px]  flex items-center justify-between px-[13px] rounded-md border border-[#D9D9D9] ${
                        colorStatesSize[4].isColorChanged
                          ? changedColorClassesSize
                          : defaultColorClassesSize
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddSize(5);
                      }}
                    >
                      <p className="text-[14px] leading-[17.07px] font-semibold">
                        XXL
                      </p>
                      <img
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemoveSize(5);
                        }}
                        className={`cursor-pointer ${
                          colorStatesSize[4].isColorChanged
                            ? "filter brightness-0 invert"
                            : ""
                        }`}
                        src={cancel}
                        alt=""
                      />
                    </div>

                    <div
                      className={`shadow-custom w-[104px] h-[47px]  flex items-center justify-between px-[13px] rounded-md border border-[#D9D9D9] ${
                        colorStatesSize[5].isColorChanged
                          ? changedColorClassesSize
                          : defaultColorClassesSize
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddSize(6);
                      }}
                    >
                      <p className="text-[14px] leading-[17.07px] font-semibold">
                        XL
                      </p>
                      <img
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemoveSize(6);
                        }}
                        className={`cursor-pointer ${
                          colorStatesSize[5].isColorChanged
                            ? "filter brightness-0 invert"
                            : ""
                        }`}
                        src={cancel}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col max-w-full cursor-default">
                <label className="text-[14px] leading-[20.3px] font-semibold mb-[6px]">
                  Tags
                </label>
                <div className="shadow-custom w-full h-full leading-[17.07px] text-[14px] font-semibold">
                  <div className="flex flex-wrap sm:flex-nowrap items-center gap-[17px] w-full pt-[10px] pb-[10px] pr-[14px] pl-[22px]">
                    <div
                      className={`shadow-custom w-[188px] h-[47px] flex items-center justify-between px-[13px] rounded-md border border-[#D9D9D9] ${
                        colorStatesTag[0].isColorChanged
                          ? changedColorClassesTag
                          : defaultColorClassesTag
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddTag(1);
                      }}
                    >
                      <p className="text-[14px] leading-[17.07px] font-semibold">
                        Women’s casual
                      </p>
                      <img
                        className={`cursor-pointer ${
                          colorStatesTag[0].isColorChanged
                            ? "filter brightness-0 invert"
                            : ""
                        }`}
                        src={cancel}
                        alt="cancel"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemoveTag(1);
                        }}
                      />
                    </div>

                    <div
                      className={`${commonClassesTag} ${
                        colorStatesTag[1].isColorChanged
                          ? changedColorClassesTag
                          : defaultColorClassesTag
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddTag(2);
                      }}
                    >
                      <p className="text-[14px] leading-[17.07px] font-semibold">
                        Shirt
                      </p>
                      <img
                        className={`cursor-pointer ${
                          colorStatesTag[1].isColorChanged
                            ? "filter brightness-0 invert"
                            : ""
                        }`}
                        src={cancel}
                        alt="cancel"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemoveTag(2);
                        }}
                      />
                    </div>

                    <div
                      className={`${commonClassesTag} ${
                        colorStatesTag[2].isColorChanged
                          ? changedColorClassesTag
                          : defaultColorClassesTag
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddTag(3);
                      }}
                    >
                      <p className="text-[14px] leading-[17.07px] font-semibold">
                        Stylish
                      </p>
                      <img
                        className={`cursor-pointer ${
                          colorStatesTag[2].isColorChanged
                            ? "filter brightness-0 invert"
                            : ""
                        }`}
                        src={cancel}
                        alt="cancel"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemoveTag(3);
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap sm:flex-nowrap items-center gap-[17px] w-full pt-[10px] pb-[10px] pr-[14px] pl-[22px]">
                    <div
                      className={`shadow-custom w-[147px] h-[47px] flex items-center justify-between px-[13px] rounded-md border border-[#D9D9D9] ${
                        colorStatesTag[3].isColorChanged
                          ? changedColorClassesTag
                          : defaultColorClassesTag
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddTag(4);
                      }}
                    >
                      <p className="text-[14px] leading-[17.07px] font-semibold">
                        Crop top
                      </p>
                      <img
                        className={`cursor-pointer ${
                          colorStatesTag[3].isColorChanged
                            ? "filter brightness-0 invert"
                            : ""
                        }`}
                        src={cancel}
                        alt="cancel"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemoveTag(4);
                        }}
                      />
                    </div>

                    <div
                      className={`shadow-custom w-[147px] h-[47px] flex items-center justify-between px-[13px] rounded-md border border-[#D9D9D9] ${
                        colorStatesTag[4].isColorChanged
                          ? changedColorClassesTag
                          : defaultColorClassesTag
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddTag(5);
                      }}
                    >
                      <p className="text-[14px] leading-[17.07px] font-semibold">
                        Ladies bag
                      </p>
                      <img
                        className={`cursor-pointer ${
                          colorStatesTag[4].isColorChanged
                            ? "filter brightness-0 invert"
                            : ""
                        }`}
                        src={cancel}
                        alt="cancel"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemoveTag(5);
                        }}
                      />
                    </div>

                    <div
                      className={`${commonClassesTag} ${
                        colorStatesTag[5].isColorChanged
                          ? changedColorClassesTag
                          : defaultColorClassesTag
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddTag(6);
                      }}
                    >
                      <p className="text-[14px] leading-[17.07px] font-semibold">
                        Green
                      </p>
                      <img
                        className={`cursor-pointer ${
                          colorStatesTag[5].isColorChanged
                            ? "filter brightness-0 invert"
                            : ""
                        }`}
                        src={cancel}
                        alt="cancel"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemoveTag(6);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={handleNavigate}
            className="flex items-center justify-center max-w-[372px] w-full h-[77px] bg-[#12362A] rounded-[15px] text-white leading-[34.8px] font-semibold sm:mt-[56px] mt-10"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default SellerAddProductBody;
