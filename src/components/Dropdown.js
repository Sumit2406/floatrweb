import React, { useState } from "react";
import downIcon from "../assets/pngs/drop-down.png";
import upIcon from "../assets/pngs/drop-up.png";
import "../scss/components.scss";

export default function Dropdown({
  selectedOption,
  handleDropdown,
  dropstatus,
  dropDownObj,
  demoValueChange,
}) 
{
  const [dropdownlabel, setdropdownlabel] = useState("Select Option");
  console.log(selectedOption);
  return (
    <div className="dropContainer">
      <div
        className="dropdown"
        onClick={handleDropdown}
        value={selectedOption}
      >
      <div className="dropdowncontent"> <p>{dropdownlabel} </p> {dropstatus ? (
          <img src={upIcon} alt="upIcon"/>
        ) : (
          <img src={downIcon} alt="downIcon"/>
        )}
</div> 

        {dropstatus ? (
          <ul className="ddlist">
            {dropDownObj.map((option, i) => (
              <li
                onClick={() => {
                  setdropdownlabel(option.label);
                  demoValueChange(option.value);
                }}
                key={i}
              >
                {option.label}
              </li>
            ))}
          </ul>
        ) : null}
        </div>
      
    </div>
  );
}

