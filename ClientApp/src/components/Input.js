import React from "react";

const Input = ({ of, label, type }) => {
  return (
    <>
      <label htmlFor={of} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1 flex rounded-md shadow-sm">
        <input
          type={type}
          name={of}
          id={of}
          autoComplete={of}
          className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-md sm:text-sm border-gray-300"
        />
      </div>
    </>
  );
};

export { Input };
