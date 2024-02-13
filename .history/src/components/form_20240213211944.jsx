import React from "react";
const Form = ({ ttl, id, name, type, children, value, onChange ,onBlur}) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <label className="block text-sm font-medium leading-6 text-gray-900">
          {ttl}
        </label>
      </div>
      <div>
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          required
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        {children}
      </div>
    </div>
  );
};

export default Form;
