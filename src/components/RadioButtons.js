import React from "react";
import "../scss/components.scss"
import radioselected from "../assets/pngs/radioselected.png";
import radiounselected from "../assets/pngs/radiounselected.png";


export default function RadioButtons({ radioDatas,handleradio,checkd }) {
    
  return (
    <div className="radiodiv">
        <p><b>Select you option</b></p>
      <ul className="radioul">
        {radioDatas.map((radioData, index) => {
          return (
            <li className="radiolist"
              onClick={() => {
                handleradio(radioData.value, index)
              }}
              key={index}
            >
              {index === checkd ? (
                <img src={radioselected} alt="radioselected" />
              ) : (
                <img src={radiounselected} alt="radiounselected" />
              )}
              <span>{radioData.label}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}