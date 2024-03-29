// RegistrationForm.js
import React from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";

const RegistrationForm = () => {
  // const formik = useFormik({
  // initialValues: {
  // username: "",
  // password: "",
  // email: "",
  // },
  // validationSchema: Yup.object({
  // username: Yup.string()
  // .min(8, "Username must be at least 8 characters")
  // .max(20, "Username must be at most 20 characters")
  // .required("Username is required"),
  // password: Yup.string()
  // .min(8, "Password must be at least 8 characters")
  // .max(20, "Password must be at most 20 characters")
  // .matches(
  // /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).*$/,
  // "Password must meet the criteria"
  // )
  // .required("Password is required"),
  // email: Yup.string()
  // .email("Invalid email address")
  // .required("Email is required"),
  // }),
  // onSubmit: (values) => {
  // Handle form submission
  // console.log(values);
  // },
  // });

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
         

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <a
            href="#"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegistrationForm;
