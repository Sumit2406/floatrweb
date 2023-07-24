import "../scss/App.scss";
import React, { useState } from "react";
import Button from "../components/Button";
import InputBox from "../components/InputBox";
import LoginPageBanner from '../assets/pngs/LoginPageBanner.png';

export default function LoginPage() {
  //button
  const btnHandleClick = () => {
    console.log("Mobile number submitted:", mobileNumber);
  };
  //Login
  const [mobileNumber, setMobileNumber] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const handleInputChange = (event) => {
    if (isNaN(event.target.value)) {
      event.target.value = "";
    }
    const inputMobileNumber = event.target.value;

    setMobileNumber(inputMobileNumber);
    const mobilePattern = /^(\+?91|0)?[6789]\d{9}$/;
    setIsButtonDisabled(!mobilePattern.test(inputMobileNumber));
  };

  return (
    <div className="container">
      <div className="MainPageContent ">
      <div className="row ">
      <div className="col-6 ">
      <div className="left-LoginPageBanner">
        <img src={LoginPageBanner} alt="LoginPageBanner" />
        </div>
      </div>

      <div className="col-6" >
        <div className="rightSideLoginContent">
      <h1 className="pgtitle">Welcome !</h1>
          <p className="pgsubtitle">Login to continue</p>
          <div className="inputwithlbl">
            <InputBox
              title="Mobile Number"
              placeholder="Enter Mobile Number"
              type="text"
              id="mobile"
              value={mobileNumber}
              handleInputChange={handleInputChange}
            />
          </div>
          <p className="login-instruction">By proceeding, you are agreeing to Floatr’s <br/>
<span>Terms & Conditions </span> & <span>Privacy Policy</span></p>
          <Button
            btnLabel="Get OTP"
            rectangualar="false"
            btnClick={btnHandleClick}
            disable={!isButtonDisabled}
          />
      </div>
      </div>
      </div>
      </div>
    </div>
  );
}
