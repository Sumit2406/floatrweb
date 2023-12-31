import "../scss/App.scss";
import React, { useState } from "react";
import Button from "../components/Button";
import InputBox from "../components/InputBox";
import LoginPageBanner from '../assets/pngs/LoginPageBanner.png';

export default function UserInfo() {
  
    const uploadHandler = (data) => {
        console.log(data);
      };

  const btnHandleClick = () => {
console.log("cicked by UserInfo")
  };
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
    <div className="loginBlock container">
    <div className="row justify-content-center">
      <div className="MainPageContent col-9 ">
      <div className="row ">
      <div className="col-6 d-flex justify-content-center align-self-center">
      <div className="left-LoginPageBanner">
      <FileUploader uploadHandler={uploadHandler} />
        </div>
      </div>

      <div className="col-6 align-self-center ">
        <div className="rightSideLoginContent">
      <h1 className="pgtitle">Welcome !</h1>
          <p className="pgsubtitle">Login to continue</p>
          <div className="inputwithlbl col-9">
         <InputBox
              title="Mobile Number"
              placeholder="Enter Mobile Number"
              type="text"
              id="mobile"
              value={mobileNumber}
              handleInputChange={handleInputChange}
            /> 
          </div>
          <div className="col-9"> 
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
    </div>
    </div>
  );
}

