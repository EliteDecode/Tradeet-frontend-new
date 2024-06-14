import {
  FaApple,
  FaFacebookF,
  FaGoogle,
} from "react-icons/fa6";

const LoginActions = () => {
  return (
    <div className="flex justify-between border-t border-[#D9D9D9] items-center h-[100px] w-full gap-2 md:gap-2 pt-3">
      <button className="md:w-[164px] w-[115px] md:h-[54px] h-[38px] rounded-lg border border-[#12362A] text-[#12362A] flex justify-center items-center">
        <FaGoogle size={20} />
      </button>
      <button className="md:w-[164px] w-[115px] md:h-[54px] h-[38px] rounded-lg border border-[#12362A] text-[#12362A] flex justify-center items-center">
        <FaApple size={20} />
      </button>
      <button className="md:w-[164px] w-[115px] md:h-[54px] h-[38px] rounded-lg border border-[#12362A] text-[#12362A] flex justify-center items-center">
        <FaFacebookF size={20} />
      </button>
    </div>
  );
};

export default LoginActions;
