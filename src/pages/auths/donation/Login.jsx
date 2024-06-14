import React from "react";
import logo from "../../../assets/newLogo.png";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { PiEyeSlashLight } from "react-icons/pi";
import { PiEyeLight } from "react-icons/pi";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full px-5 md:px-0 mx-auto">
      {/* body */}
      <div className="w-full md:flex flex-col justify-center items-center ">
        <div className="md:w-[640px] mb-14 ">
          <button
            onClick={() => navigate(-1)}
            className="h-[100px] text-lg font-medium flex items-center justify-start gap-2"
          >
            <FaArrowLeftLong />
            <span>Back to website</span>
          </button>
          <div className="md:border border-[#ADBC9F] md:p-8 rounded-lg">
            {/* <div className="md:border-none border-y h-[55px] md:block flex items-center gap-1 ">
              <span>Want to login to your Charity Profile? </span>
              <span>
                <Link to="/" className="text-[#12362A] font-semibold">
                  Login <MdArrowOutward className="inline" />{" "}
                </Link>
              </span>
            </div> */}
            <div className=" w-full flex flex-col justify-center border-b  border-[#D9D9D9]">
              <p className="md:text-[32px] text-[26px] font-semibold">
                Log in to your Charity Account
              </p>
              <p className="md:text-base text-sm mb-3">
                Welcome back!, Log in to your account.
              </p>
            </div>
            {/* <div className="relative flex justify-center items-center">
              <div className="flex justify-between border-b border-[#D9D9D9] items-center h-[100px] w-full gap-2 md:gap-2">
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
              <div className="absolute bottom-[-10px] bg-white px-3 font-medium md:text-base text-sm">
                <span>or log in with Email</span>
              </div>
            </div> */}
            <div className="my-10">
              <form onSubmit={handleLogin}>
                <div>
                  <label htmlFor="email" className="text-sm">
                    Email
                  </label>{" "}
                  <br />
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Enter your Email"
                    className="p-4 border w-full rounded-lg outline-none"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div className="mt-6 relative">
                  <label htmlFor="password" className="text-sm">
                    Password
                  </label>{" "}
                  <br />
                  <input
                    type={`${showPassword ? "text" : "password"}`}
                    name="password"
                    id="password"
                    placeholder="Enter your Password"
                    className="p-4 border w-full rounded-lg outline-none"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                  <button
                    type="button"
                    className="absolute top-10 right-5"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <PiEyeSlashLight size={20} />
                    ) : (
                      <PiEyeLight size={20} />
                    )}
                  </button>
                </div>
                <div className="flex justify-between">
                  <div className="relative rememberMe w-full">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      id="rememberMe"
                      className="rounded-full bg-[#12362A]"
                      onChange={(e) => setRememberMe(e.target.checked)}
                      value={rememberMe}
                    />
                    <label
                      htmlFor="rememberMe"
                      className="bg-white border border-[#12362A] cursor-pointer rounded-full h-[20px] w-[20px] top-5 left-0 absolute"
                    ></label>
                    <label
                      htmlFor="rememberMe"
                      className=" text-sm absolute top-5 left-6"
                    >
                      Remember Me
                    </label>
                  </div>
                  <div className="w-full flex justify-end mt-5">
                    <Link
                      to="forgotPassword"
                      className="font-medium text-sm text-[#12362A]"
                    >
                      <span>Forgot password?</span>
                    </Link>
                  </div>
                </div>
                <div className="w-full mt-12">
                  <Link to='/donation'>
                    <button className="w-full px-6 py-4 bg-[#12362A] font-semibold md:text-xl text-sm text-white rounded-lg ">
                      Log In
                    </button>
                  </Link>
                </div>
              </form>
              <div className="text-center md:text-base text-sm flex justify-center gap-2 mt-8">
                <span>Don't have an account?</span>
                <Link
                  to="/donation-signup"
                  className="text-[#12362A] font-semibold"
                >
                  <span>Register</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
