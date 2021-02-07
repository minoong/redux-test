import React, { useState } from "react";

const NumberSelect = ({ value, options, postfix, onChange }) => {
  const handleChange = (e) => {
    onChange(e.currectTarget.value);
  };
  return (
    <div>
      <select onChange={handleChange} value={value}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
        {postfix}
      </select>
    </div>
  );
};

export default NumberSelect;
