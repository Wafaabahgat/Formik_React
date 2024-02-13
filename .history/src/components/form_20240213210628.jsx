import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Form = ({ ttl, id, name, password }) => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      email: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(8, "Username must be at least 8 characters")
        .max(20, "Username must be at most 20 characters")
        .required("Username is required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .max(20, "Password must be at most 20 characters")
        .matches(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).*$/,
          "Password must meet the criteria"
        )
        .required("Password is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <div className="flex items-center justify-between">
        <label
          htmlFor="password"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {ttl}
        </label>
      </div>
      <div className="">
        <input
          id={id}
          name={name}
          type={password}
          autoComplete="current-password"
          required
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        {formik.touched.username && formik.errors.username && (
          <div className="text-red-500 text-xs mt-1">
            {formik.errors.username}
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
