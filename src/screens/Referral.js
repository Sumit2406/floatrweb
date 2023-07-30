import "../scss/App.scss";
import React, {useState} from "react";
import Button from "../components/Button";
import InputBoxLowerBarder from "../components/InputBoxLowerBarder";
import LoginPageBanner from '../assets/pngs/LoginPageBanner.png';
import ToggleButton from "../components/ToggleButton";


export default function Referral() {
  
  //Login
  const [referralCode, setreferralCode] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [togglestatus, setToggleStatus] =useState(true);
  const handleInputChange = (event) => {
    const inputReferralCode = event.target.value;
    setreferralCode(inputReferralCode);
    
    inputReferralCode ? setIsButtonDisabled(false): setIsButtonDisabled(true);
  };

  const btnHandleClick = () => {
    console.log("clicked by Referral page")
  };

  const handleToggle=(event)=>{
    setToggleStatus(!togglestatus);
  }

  return (
    <div className="loginBlock container">
    <div className="row justify-content-center">
      <div className="MainPageContent col-9 ">
      <div className="row ">

      <div className="col-6 align-self-center ">
        <div className="rightSideLoginContent">
      <h1 className="pgtitle">Have you been reffered?</h1>
          <div className="inputwithlbl col-9">
         <InputBoxLowerBarder
              title="Enter Referral Code"
              placeholder="Enter code if you are referred"
              type="text"
              id="referralCode"
              value={referralCode}
              handleInputChange={handleInputChange}
            /> 
          </div>
          <div className="col-9">
            
<ToggleButton 
title="I don't have a Referral Code"
handleToggle={handleToggle}
togglestatus={togglestatus}
 />
         <Button
            btnLabel="Submit"
            rectangualar="false"
            btnClick={btnHandleClick}
            disable={!isButtonDisabled}
          />
          </div>
      </div>
      </div>
      <div className="col-6 d-flex justify-content-center align-self-center">
      <div className="left-LoginPageBanner">
        <img src={LoginPageBanner} alt="LoginPageBanner" />
        </div>
      </div>

      </div>
      </div>
    </div>
    </div>
  );
}

