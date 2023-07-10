import React, { useState } from 'react';

export default function CheckboxDemo({chk}) {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <div>
        <input
          type="checkbox"
          id="employment"
          name="employment"
          value="Employed"
          checked={isChecked}
          onChange={handleOnChange}
        />
        {chk && <label htmlFor="employment">{chk}</label>}
      </div>
      <div className="result">
        Above checkbox is {isChecked ? 'employed' : 'unemployed'}.
      </div>
    </div>
  );
}
