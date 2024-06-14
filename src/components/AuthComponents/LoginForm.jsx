import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { PiEyeLight, PiEyeSlashLight } from "react-icons/pi";
import { loginSchema } from "../../utils/schemas";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, reset } from "../../services/features/auth/authSlice";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isSuccess || user) {
      navigate("/");
    }
    dispatch(reset());
  }, [isSuccess, user, navigate, dispatch]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      try {
        dispatch(login(values));
        resetForm();
      } catch (err) {
        console.log("API error:", err.message || message);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="email" className="text-sm">
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
            to="/auth/forgot-password"
            className="font-medium text-sm text-[#12362A]"
          >
            <span>Forgot password?</span>
          </Link>
        </div>
      </div>

      <div className="w-full mt-12">
        <button
          type="submit"
          className="w-full px-6 py-4 bg-[#12362A] font-semibold md:text-xl text-sm text-white rounded-lg "
        >
          Log In
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
