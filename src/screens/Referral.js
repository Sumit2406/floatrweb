import "../scss/App.scss";
import React, { useState } from "react";
import Button from "../components/Button";
import InputBox from "../components/InputBox";
import LoginPageBanner from '../assets/pngs/LoginPageBanner.png';

export default function Referral() {
  

  //Login
  const [referralCode, setreferralCode] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [togglestatus, setToggleStatus] =useState(true);
  const handleInputChange = (e) => {
console.log(e);
  };

  const btnHandleClick = () => {
    console.log("clicked by Referral page")
  };

  return (
    <div className="loginBlock container">
    <div className="row justify-content-center">
      <div className="MainPageContent col-9 ">
      <div className="row ">
      <div className="col-6 d-flex justify-content-center align-self-center">
      <div className="left-LoginPageBanner">
        <img src={LoginPageBanner} alt="LoginPageBanner" />
        </div>
      </div>

      <div className="col-6 align-self-center ">
        <div className="rightSideLoginContent">
      <h1 className="pgtitle">Have you been reffered?</h1>
          {/* <p className="pgsubtitle">Enter Referral Code</p> */}
          <div className="inputwithlbl col-9">
         <InputBox
              title="Enter Referral Code"
              placeholder="Enter code if you are referred"
              type="text"
              id="referrel"
              value={referralCode}
              handleInputChange={handleInputChange}
            /> 
          </div>
          <div className="col-9">
            <div className="togglecontainer">
          <p className="login-instruction">I don't have a Referral Code</p>
          
          <div className={togglestatus? 'toggle' : 'toggle-disable'} onClick={()=> setToggleStatus(!togglestatus)}>
            <div className={togglestatus? 'toggle-circle' : 'toggle-circle-disable'} onClick={()=> setToggleStatus(!togglestatus)}></div>
          </div>
          </div> 
         <Button
            btnLabel="Submit"
            rectangualar="false"
            btnClick={btnHandleClick}
            disable={!isButtonDisabled}
          />
          </div>
      </div>
      </div>
      </div>
      </div>
    </div>
    </div>
  );
}

