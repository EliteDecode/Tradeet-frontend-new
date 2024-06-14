import PropTypes from "prop-types";
import dropDownIcon from "../../../../assets/dropDownIcon.svg";

const CustomSelect = ({ name, options }) => {
  return (
    <div className="relative inline-block md:max-w-[180px] max-w-[75px] w-full md:text-[20px] text-[10px]  md:leading-[24.38px] leading-[12.19px] font-semibold text-[#2D2D2D]">
      <select
        name={name}
        className="block w-full md:h-[61px] h-[30px] px-0 pr-4 leading-tight bg-white border border-gray-300 rounded shadow appearance-none md:px-4 hover:border-gray-400 focus:outline-none focus:shadow-outline"
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 flex px-2 text-gray-700 pointer-events-none right-1 md:right-4 md:top-7 top-3">
        <img
          className="w-[10px] h-[6.18px] sm:h-[7.42px] sm:w-[12px] fill-current"
          src={dropDownIcon}
          alt=""
        />
      </div>
    </div>
  );
};

CustomSelect.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CustomSelect;
