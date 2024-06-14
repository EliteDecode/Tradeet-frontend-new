import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import trash from "../../../../assets/trash.svg";
import info from "../../../../assets/info.svg";

function generateRows(count) {
  const rows = [];
  for (let i = 0; i < count; i++) {
    rows.push({
      key: i,
      productName: "Cropped Top-Yellow",
      category: "Woman's Shirt",
      price: "N35,000",
      stock: 458,
      sold: 59,
      revenue: "N2,506,00",
    });
  }
  return rows;
}

function SellerManageProductsTable({ promotion, handleClosePromotion }) {
  const rows = generateRows(10);
  const navigate = useNavigate();
  const [selectedRows, setSelectedRows] = useState([]);

  const handleCheckboxChange = (key) => {
    if (selectedRows.includes(key)) {
      setSelectedRows(selectedRows.filter((rowKey) => rowKey !== key));
    } else if (selectedRows.length < 5) {
      setSelectedRows([...selectedRows, key]);
    }
  };

  const handleNavigate = () => {
    if (selectedRows.length > 0) {
      navigate("/SellerPromationPage");
    }
  };

  return (
    <>
      <div className="w-full overflow-x-auto px-[10px] sm:px-0 custom-scrollbar">
        <AnimatePresence>
          {promotion && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
            >
              <p
                onClick={handleClosePromotion}
                className="text-[20px] leading-[24.38px] font-semibold text-[#42684F] cursor-pointer my-[50px]"
              >
                Cancel
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <table className="w-full h-full text-left mt-[50px]">
          <thead className="bg-[#42684F] text-white w-full sm:h-[70px] h-[30px] rounded-tl-[10px] rounded-tr-[10px] xl:leading-[19.5px] xl:text-[16px] text-[10px] leading-[12.19px] font-semibold xl:text-nowrap text-nowrap">
            <tr className="space-x-[10px]">
              <th className="xl:pr-64 2xl:pr-[100px] pl-[10px]">
                Product Name
              </th>
              <th className="px-[10px]">Category</th>
              <th className="px-[10px]">Price</th>
              <th className="px-[10px]">Stock</th>
              <th className="px-[10px]">Sold</th>
              <th className="px-[10px]">Revenue</th>
              <th className="pr-[15px] px-[10px]">Take Action</th>
            </tr>
          </thead>

          <tbody className="xl:leading-[19.5px] xl:text-[14px] text-[10px] leading-[12.19px] xl:text-nowrap text-wrap">
            {rows.map((row) => (
              <tr
                key={row.key}
                className="cursor-default odd:bg-white even:bg-gray-50"
              >
                <td className="flex items-center gap-[13px] p-2 sm:p-4 pr-[10px] sm:pr-24 md:pr-32 lg:pr-48 xl:pr-64 2xl:pr-[200px] h-[70px] border-b xl:text-nowrap text-wrap">
                  {promotion && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.5 }}
                    >
                      <input
                        className="w-[18px] h-[18px]"
                        type="checkbox"
                        checked={selectedRows.includes(row.key)}
                        onChange={() => handleCheckboxChange(row.key)}
                      />
                    </motion.div>
                  )}
                  <label>{row.productName}</label>
                </td>
                <td className="p-2 sm:p-4">{row.category}</td>
                <td className="p-2 sm:p-4">{row.price}</td>
                <td className="p-2 sm:p-4">{row.stock}</td>
                <td className="p-2 sm:p-4">{row.sold}</td>
                <td className="p-2 sm:p-4">{row.revenue}</td>
                <td className="flex items-center justify-center p-2 mt-3 cursor-pointer sm:p-4">
                  <img src={trash} alt="trash icon" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <AnimatePresence>
        {promotion && (
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            onClick={handleNavigate}
            disabled={selectedRows.length === 0}
            className={`w-[221px] h-[55px] rounded-[8px] bg-[#12362A] text-[16px] leading-[23.2px] font-inter font-semibold text-[#FFFFFF] mt-[50px] ${
              selectedRows.length === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Promote Selected
          </motion.button>
        )}
      </AnimatePresence>
      {promotion && selectedRows.length >= 5 && (
        <div className="flex items-center gap-2 text-[#ED1111] mt-[18px]">
          <img src={info} alt="" />
          <p className="text-[16px] leading-[19.5px] font-medium">
            You can only select a maximum of five (5) products for promotion.
          </p>
        </div>
      )}
    </>
  );
}

SellerManageProductsTable.propTypes = {
  promotion: PropTypes.bool.isRequired,
  handleClosePromotion: PropTypes.func.isRequired,
};

export default SellerManageProductsTable;
