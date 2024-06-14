import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import LoginForm from "../../../components/AuthComponents/LoginForm";
import LoginActions from "../../../components/AuthComponents/LoginActions";
import { useSelector } from "react-redux";
import Loading from "../../../components/Spinner";

const Login = () => {
  const { isLoading } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate()

  if (isLoading) {
    return <Loading />;
  }
  return (
    <section>
      <div className="w-full px-5 md:px-0 mx-auto">
        {/* body */}
        <div className="w-full md:flex flex-col justify-center items-center ">
          <div className="md:w-[640px] mb-14 mt-8 md:mt-20">
            <button
              onClick={() => navigate(-1)}
              className=" text-lg font-medium flex items-center justify-start gap-2 mb-3"
            >
              <FaArrowLeftLong />
              <span>Back to website</span>
            </button>
            <div className="md:border border-[#ADBC9F] md:p-8 rounded-lg">
              <div className="md:border-none border-y min-h-[55px] md:block  gap-1 ">
                <span>Want to login to your Charity Profile? </span>
                <span>
                  <Link
                    to="/auth/donation-login"
                    className="text-[#12362A] font-semibold  items-center inline-block"
                  >
                    Login <MdArrowOutward className="inline" />{" "}
                  </Link>
                </span>
              </div>
              <div className="min-h-[100px] w-full flex flex-col justify-center border-b md:border-y border-[#D9D9D9]">
                <p className="md:text-[32px] text-[26px] font-semibold">
                  Log in to your Account
                </p>
                <p className="md:text-base text-sm">
                  Welcome back!, Log in to your account with
                </p>
              </div>
              <div className="relative flex justify-center items-center">
                <LoginActions />
              </div>
              <div className=" flex items-center w-full">
                <div className="border-b w-full border-[#D9D9D9] flex-1"></div>
                <div className="font-medium md:text-[20px] px-3 text-[14px] leading-[36px] ">
                  or sign up with Email
                </div>
                <div className="border-b w-full border-[#D9D9D9] flex-1"></div>
              </div>
              <div className="my-10">
                <LoginForm />
                <div className="text-center md:text-base text-sm flex justify-center gap-2 mt-8">
                  <span>Don't have an account?</span>
                  <Link to="/auth" className="text-[#12362A] font-semibold">
                    <span>Sign up!</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
