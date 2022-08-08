import React from "react";

const Dropdown = ({ of, label, items, allowNull }) => {
  return (
    <>
      <label htmlFor={of} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1">
        <select
          id={of}
          name={of}
          autoComplete={of}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
        >
          {items && items.map((i) => <option>United States</option>)}
        </select>
      </div>
    </>
  );
};

export { Dropdown };
