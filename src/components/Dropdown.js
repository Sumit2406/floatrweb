import React, { useState } from "react";
import dowonIcon from "../assets/pngs/drop-down.png";
import upIcon from "../assets/pngs/drop-up.png";
import "../scss/components.scss";

export default function Dropdown({
  selectedOption,
  handleDropdown,
  dropstatus,
  DDoptions,
  demoValueChange,
}) {
  const [dropdownlabel, setdropdownlabel] = useState("Select Option");
  return (
    <>
      <div
        className="dropdown"
        onClick={handleDropdown}
        value={selectedOption}
      >
        <p>{dropdownlabel} {dropstatus ? (
          <img src={dowonIcon} alt="dowonIcon"/>
        ) : (
          <img src={upIcon} alt="upIcon" />
        )}
</p>
        {dropstatus ? (
          <ul className="ddlist">
            {DDoptions.map((option, i) => (
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
    </>
  );
}
