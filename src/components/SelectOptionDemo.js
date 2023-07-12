import React, { useState } from 'react';
import SelectOption from './SelectOption';

export default function SelectOptionDemo() {

  const [selectedOption, setSelectedOption] = useState('');
  
  const options = [
    { value: 'option1-Value', label: 'Option 1' },
    { value: 'option2-Value', label: 'Option 2' },
    { value: 'option3-Value', label: 'Option 3' },
  ];

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
    console.log(e.target.value)
  };

  return (
    <div>
      <h2>Select Option Demo</h2>
      <SelectOption options={options} value={selectedOption} handleChange={handleChange} />
      <p>Selected Option: {selectedOption}</p>
    </div>
  );
}
