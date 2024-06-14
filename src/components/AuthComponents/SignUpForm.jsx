import React, { useEffect, useState } from "react";

import { PiEyeLight, PiEyeSlashLight } from "react-icons/pi";
import useRegisterForm from "../../hooks/useRegisterForm";

const SignUpForm = () => {
  const {
    showPassword,
    showconfirmPassword,
    setShowConfirmPassword,
    setShowPassword,
    formik,
    isLoading,
  } = useRegisterForm();

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        {/* Full name */}
        <div className="mt-6">
          <label htmlFor="name" className="text-sm md:text-base font-medium">
            Full Name
          </label>
          <br />
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter full name here"
            className={`p-4 border w-full rounded-lg ${
              formik.touched.name && formik.errors.name
                ? "border-[#EB4335]"
                : ""
            } font-medium outline-none focus:border-[#12362A] focus:outline-none`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500 text-[10px] font-semibold">
              {formik.errors.name}
            </div>
          ) : null}
        </div>

        {/* Email */}
        <div className="mt-6">
          <label htmlFor="email" className="text-sm md:text-base font-medium">
            Email
          </label>{" "}
          <br />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your Email"
            className={`p-4 border w-full rounded-lg ${
              formik.touched.email && formik.errors.email
                ? "border-[#EB4335]"
                : ""
            } font-medium outline-none focus:border-[#12362A] focus:outline-none`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-[10px] font-semibold">
              {formik.errors.email}
            </div>
          ) : null}
        </div>

        {/* Password */}
        <div className="mt-6 relative">
          <label
            htmlFor="password"
            className="text-sm md:text-base font-medium">
            Password
          </label>{" "}
          <br />
          <input
            type={`${showPassword ? "text" : "password"}`}
            name="password"
            id="password"
            placeholder="Enter your Password"
            className={`p-4 border w-full rounded-lg ${
              formik.touched.password && formik.errors.password
                ? "border-[#EB4335]"
                : ""
            } font-medium outline-none focus:border-[#12362A] focus:outline-none`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500 text-[10px] font-semibold">
              {formik.errors.password}
            </div>
          ) : null}
          <button
            type="button"
            className="absolute top-10 right-5"
            onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <PiEyeSlashLight size={20} />
            ) : (
              <PiEyeLight size={20} />
            )}
          </button>
        </div>

        {/* Confirm password */}
        <div className="mt-6 relative">
          <label
            htmlFor="confirmPassword"
            className="text-sm md:text-base font-medium">
            Confirm Password
          </label>{" "}
          <br />
          <input
            type={`${showconfirmPassword ? "text" : "password"}`}
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Enter your Password"
            className={`p-4 border w-full rounded-lg ${
              formik.touched.confirmPassword && formik.errors.confirmPassword
                ? "border-[#EB4335]"
                : ""
            } font-medium outline-none focus:border-[#12362A] focus:outline-none`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div className="text-red-500 text-[10px] font-semibold">
              {formik.errors.confirmPassword}
            </div>
          ) : null}
          <button
            type="button"
            className="absolute top-10 right-5"
            onClick={() => setShowConfirmPassword(!showconfirmPassword)}>
            {showconfirmPassword ? (
              <PiEyeSlashLight size={20} />
            ) : (
              <PiEyeLight size={20} />
            )}
          </button>
        </div>

        {/* Sign up button */}
        <button
          type="submit"
          className={`bg-[#12362A] w-full h-[55px] rounded-[8px] my-8 ${
            isLoading ? "bg-[#ADBC9F]" : ""
          }`}
          disabled={isLoading}>
          <span className="font-Montserrat text-white text-[20px] font-semibold leading-[24px]">
            {isLoading ? "Please wait..." : "Sign up"}
          </span>
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
