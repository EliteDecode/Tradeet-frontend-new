import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import { IoMdClose } from "react-icons/io";

function OverlayModal({ show, onClose }) {
  return (
    <CSSTransition in={show} timeout={300} classNames="modal" unmountOnExit>
      <div className="fixed inset-0 flex items-center justify-center bg-[#2D2D2D4D] font-montserrat text-[#2D2D2D]">
        <div className="bg-white p-8 rounded-lg w-[90%] max-w-[366px] h-[212px]">
          <div className="flex items-center justify-between">
            <h2 className="text-[20px] leading-[24.38px] font-semibold">
              Promotion
            </h2>
            <IoMdClose size={20} className="cursor-pointer" onClick={onClose}/>
          </div>
          <p className="mt-6 text-center text-[16px] leading-[19.5px]">
            Put your product at the forefront of the market, let’s get you
            started?
          </p>
          <div className="flex items-center justify-center gap-[10px] mt-6 mb-8">
            <button className="bg-[#12362A] text-[14px] leading-[20.3px] font-semibold text-white w-[95px] h-[36px] rounded-lg">
              Promote
            </button>
            <button
              className="text-[14px] leading-[20.3px] font-semibold w-[95px] h-[36px] rounded-lg"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
}

OverlayModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default OverlayModal;
