import React from "react";

const TemplateForm = () => {
  return (
    <div>
      <form className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="name"
              type="text"
              placeholder="Enter unique template name here"
            />
            <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TemplateForm;
