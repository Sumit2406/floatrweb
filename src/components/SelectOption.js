import React from 'react';

const SelectOption = (props) => {
  const { options, value, handleChange } = props;

  return (
    <select value={value} onChange={handleChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectOption;
