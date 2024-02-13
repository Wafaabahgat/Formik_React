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
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
