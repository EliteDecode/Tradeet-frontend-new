import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { siguUpSchema } from "../utils/schemas";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { reset, register } from "../services/features/auth/authSlice";

const useRegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showconfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isSuccess) {
      alert("Congratulations you are successfully registered"); // navigate("/auth/confirm");
    }

    if (isSuccess || isError) {
      dispatch(reset());
    }

    dispatch(reset());
  }, [isSuccess, user, navigate, dispatch]);

  const formik = useFormik({
    initialValues: {
      name: "Gospel" || "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: siguUpSchema,
    onSubmit: ({ name, email, password } = values) => {
      const userData = { name, email, password };
      const data = {
        Firstname: "Gospel",
        Lastname: "Jo",
        Email: "eseelite11@gmail.com",
        Password: "12@Jkmdaj",
        ConfirmPassword: "12@Jkmdaj",
      };

      dispatch(register(data));
    },
  });

  return {
    showPassword,
    showconfirmPassword,
    setShowConfirmPassword,
    setShowPassword,
    formik,
    isLoading,
  };
};

export default useRegisterForm;
