import React from "react";

const SelectButton = () => {
  return (
    <div className=" flex items-center">
      <select
        name="HeadlineAct"
        id="HeadlineAct"
        className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm cursor-pointer"
      >
        <option value="">Please select language</option>

        <optgroup label="E">
          <option value="E">English</option>
        </optgroup>

        <optgroup label="G">
          <option value="G">Georgian</option>
        </optgroup>
      </select>
    </div>
  );
};

export default SelectButton;
