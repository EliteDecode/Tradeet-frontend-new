import PropTypes from "prop-types"; // Import PropTypes
import searchIcon from "../../../../assets/search.png";

function SearchInput({ placeholder, buttonText }) {
  return (
    <div className="relative w-full">
      <input
        className="min-w-[430px] w-full h-14 bg-[#FBFADB] focus:outline px-12 rounded-lg"
        type="text"
        placeholder={placeholder}
      />
      <img className="absolute top-5 left-4" src={searchIcon} alt="" />
      <button className="bg-[#12362A] w-[103px] h-[55px] text-white rounded-lg absolute right-0 top-0">
        {buttonText}
      </button>
    </div>
  );
}

// Define prop types for the SearchInput component
SearchInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default SearchInput;
