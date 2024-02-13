// RegistrationForm.js
import React from "react";
import Form from "./form";
// import { useFormik } from "formik";
// import * as Yup from "yup";

const RegistrationForm = () => {
  
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <Form ttl="Username" id="username" name="username" type="text">
            {formik.touched.username && formik.errors.username && (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.username}
              </div>
            )}
          </Form>
          <Form ttl="Password" id="password" name="password" type="password" />
          <Form ttl="Email" id="email" name="email" type="email" />

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
