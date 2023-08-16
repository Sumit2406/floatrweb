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
  <div className="container" >
      <div className="row" >
        <div className="col-md-6 col-sm-12 align-self-center " >
            <img src={Kycdone} alt="Kycdone-img" style={{width:'100%', height:'auto'}}/>
        </div>
        <div className="col-md-6 col-sm-12 ">
        <div className="contactDetails-right-content d-flex flex-col justify-content-center align-items-center">
        <div className="congratsicon">
          <img src={CongratsIcon} alt="CongratsIcon" />
        </div>
        <p style={{ color: '#33B469' }}>Congratulations!</p>

        <p>On Completing Your Onboarding</p>
        <p>You are now ready to invest in</p>
        
        <div className="d-flex">
          <div className="investIconcontainer d-flex flex-column align-items-center">
            <div className="investIcon">
              <img src={MutualFunds} alt="MutualFunds-img" />
            </div>
            <span>Mutual </span>
            <span>Funds</span>
          </div>
          <div className="investIconcontainer d-flex flex-column align-items-center">
            <div className="investIcon">
              <img src={DigitalGold} alt="DigitalGold-img" />
            </div>
            <span>Digital Gold</span>
            <span>& Silver</span>
          </div>
          <div className="investIconcontainer d-flex flex-column align-items-center">
            <div className="investIcon">
              <img src={FixedDeposit} alt="FixedDeposit-img" />
            </div>
            <span>Fixed </span>
            <span>Deposits</span>
          </div>
          <div className="investIconcontainer d-flex flex-column align-items-center">
            <div className="investIcon">
              <img src={Insurance} alt="Insurance-img" />
            </div>
            <span>Insurance</span>
          </div>
        </div>
        <p>You are just one step away from </p>
        <p>getting your NPS Account</p>
        </div>
        </div>
      </div>
    </div>
  );
}
