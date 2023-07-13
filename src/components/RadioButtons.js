import React, { useState } from "react";

import radioselected from "../assets/pngs/radioselected.png";
import radiounselected from "../assets/pngs/radiounselected.png";

export default function RadioButtons({ radioDatas }) {
  const [checkd, setcheckd] = useState();
  return (
    <div>
      <ul >
        {radioDatas.map((radioData, index) => {
          return (
            <li
              onClick={() => {
                console.log("clicked", index);
                setcheckd(index);
              }}
              key={index.toString()}
            >
              {" "}
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