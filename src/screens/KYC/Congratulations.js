import React from "react";
import Kycdone from "../../assets/pngs/Kycdone.png";
import Insurance from "../../assets/pngs/Insurance.png";
import FixedDeposit from "../../assets/pngs/FixedDeposit.png";
import DigitalGold from "../../assets/pngs/DigitalGold.png";
import MutualFunds from "../../assets/pngs/MutualFunds.png";

import CongratsIcon from "../../assets/pngs/CongratsIcon.png";
import "../../scss/Kyc.scss";
export default function Congratulations() {
  return (
    <div className="loginBlock container d-flex .flex-col">
      <div className="onboading-left-content">
        <img src={Kycdone} alt="Kycdone-img" />
      </div>

      <div className="contactDetails-right-content d-flex .flex-col justify-content-center align-items-center">
        <div className="congratsicon">
          <img src={CongratsIcon} alt="CongratsIcon" />
        </div>
        <p>On Completing Your Onboarding</p>
        <p>You are now ready to invest in</p>
        
        <div className="d-flex justify-content-center align-items-center">
          <div >
            <div className="investIcon">
              <img src={MutualFunds} alt="MutualFunds-img" />
            </div>
            <span>Mutual Funds</span>
          </div>
          <div>
            <div className="investIcon">
              <img src={DigitalGold} alt="DigitalGold-img" />
            </div>
            <span>Digital Gold & Silver</span>
          </div>
          <div>
            <div className="investIcon">
              <img src={FixedDeposit} alt="FixedDeposit-img" />
            </div>
            <span>Fixed Deposits</span>
          </div>
          <div>
            <div className="investIcon">
              <img src={Insurance} alt="Insurance-img" />
            </div>
            <span>Insurance</span>
          </div>
        </div>
        <p>You are just one step away from </p>
        <o>getting your NPS Account</o>
      </div>
    </div>
  );
}
