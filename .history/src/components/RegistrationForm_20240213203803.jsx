// RegistrationForm.js
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const RegistrationForm = () => {
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
      // Handle form submission
      console.log(values);
    },
  });

  return (
    //<div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            className={`w-full px-3 py-2 border ${
              formik.errors.username ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:border-blue-500`}
          />
          {formik.touched.username && formik.errors.username && (
            <div className="text-red-500 text-xs mt-1">
              {formik.errors.username}
            </div>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className={`w-full px-3 py-2 border ${
              formik.errors.password ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:border-blue-500`}
          />
          {formik.touched.password && formik.errors.password && (
            <div className="text-red-500 text-xs mt-1">
              {formik.errors.password}
            </div>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className={`w-full px-3 py-2 border ${
              formik.errors.email ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:border-blue-500`}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 text-xs mt-1">
              {formik.errors.email}
            </div>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"    >
      //    Submit
      //  </button>
   //   </form>
 //   </div>
  );
};

export default RegistrationForm;
