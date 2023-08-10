import React from "react";
import step1active from "../assets/pngs/steps/step1active.png";
import step2 from "../assets/pngs/steps/step2.png";
import step3 from "../assets/pngs/steps/step3.png";
import step4 from "../assets/pngs/steps/step4.png";
import step5 from "../assets/pngs/steps/step5.png";
import line from "../assets/pngs/steps/line.png"

// import activeline from "../assets/pngs/steps/activeline.png"

export default function Steps() {
  return (
    <div >
      <ul className="steptitlecontainer">
        <li className="liitem">
          <div className="steptitle">
            <img src={step1active} alt="step1active" /> <span> AboutMe </span>
          </div>
        <div className="lining"><img src={line} alt="line" /></div>
        </li>
        <li className="liitem">
          <div className="steptitle">
            <img src={step2} alt="step2" /> <span>Occupation </span>
          </div>
          <div className="lining"><img src={line} alt="line" /></div>
        </li>
        <li className="liitem">
          <div className="steptitle">
            {" "}
            <img src={step3} alt="step3" /> <span>Bank </span>
          </div>
          <div className="lining"><img src={line} alt="line" /></div>
        </li>
        <li className="liitem">
          <div className="steptitle">
            {" "}
            <img src={step4} alt="step4" /> <span>Nomination </span>
          </div>
          <div className="lining"><img src={line} alt="line" /></div>
        </li>
        <li className="liitem">
          <div className="steptitle">
            {" "}
            <img src={step5} alt="step5" /> <span>Photo </span>
          </div>
        </li>
      </ul>
    </div>
  );
}
