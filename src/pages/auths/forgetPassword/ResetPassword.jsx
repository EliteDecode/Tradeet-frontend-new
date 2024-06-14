import React, { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState();
  const [repeatPassword, setRepeatPassword] = useState();
  const [passwordError, setPasswordError] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="md:mt-[100px] mb-10 w-full flex justify-center items-center">
      <div className="w-[640px]">
        <div className="px-8 md:px-0 mt-10 md:mt-0">
          <button
            onClick={() => navigate(-1)}
            className="flex gap-2 items-center font-medium"
          >
            <FaArrowLeftLong />
            <span className="hidden md:block ">Go back</span>
          </button>
        </div>

        <div className="md:w-[640px] w-full px-8 md:border border-[#ADBC9F] rounded-lg mt-8">
          <h2 className="font-semibold md:text-3xl text-2xl mt-4">
            Reset Password
          </h2>
          <p className="border-b border-[#ADBC9F] pb-4 text-sm md:text-base">
            Here you go, you can reset your password now!
          </p>
          <form className="mt-8" onSubmit={(e) => handleSubmit(e)}>
            <div>
              <label
                htmlFor="newPassword"
                className="font-medium text-sm md:text-base"
              >
                New Password
              </label>
              <br />
              <input
                type="password"
                name="newPassword"
                id="newPassword"
                placeholder="Must be at least 8 characters"
                className={`p-4 border w-full rounded-lg ${
                  passwordError ? "border-[#EB4335]" : "border-[#12362A]"
                } font-medium outline-[#12362A]`}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                onClick={() => setPasswordError(false)}
              />
            </div>
            <div className="mt-8">
              <label
                htmlFor="repeatPassword"
                className="font-medium text-sm md:text-base"
              >
                Repeat Password
              </label>
              <br />
              <input
                type="password"
                name="repeatPassword"
                id="repeatPassword"
                placeholder="Must be at least 8 characters"
                className={`p-4 border w-full rounded-lg ${
                  passwordError ? "border-[#EB4335]" : "border-[#12362A]"
                } font-medium outline-[#12362A]`}
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
                onClick={() => setPasswordError(false)}
              />
            </div>
            {passwordError && (
              <div className="mt-4 text-[#EB4335]">
                Your password do not match
              </div>
            )}
            <div className="w-full mt-12">
              <Link to="/auth/reset-successful">
                <button
                  className={`w-full px-6 py-4 mb-10 ${
                    passwordError ? "bg-[#ADBC9F]" : "bg-[#12362A]"
                  } font-semibold md:text-xl text-sm text-white rounded-lg`}
                >
                  Reset Password
                </button>
              </Link>
            </div>
          </form>
        </div>

        <p className="md:mt-5 ml-8 text-sm md:text-base">
          <span>Remember your password? </span>
          <Link to="/auth/login" className="font-semibold text-[#12362A]">
            Log in!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ResetPassword;
