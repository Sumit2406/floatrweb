import "../scss/App.scss";
import React, { useState } from "react";
import Button from "../components/Button";

import LoginPageBanner from '../assets/pngs/LoginPageBanner.png';
import Otp from "../components/Otp";

export default function OtpScreen() {


const [otpInput, setOtpInput] =useState(false);
  
    //button
    const btnHandleClick = () => {
      // console.log("Mobile number submitted:", mobileNumber);
      setOtpInput(true);
    };
    //Login
    const [mobileNumber, setMobileNumber] = useState("");
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const handleInputChange = (event) => {
  console.log(event);
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
      <h1 className="pgtitle">Welcome !</h1>
          <p className="pgsubtitle">Login to continue</p>
          <div className="inputwithlbl col-9">
         <Otp/>    
          </div>
          <div className="col-9">
          <div className="login-Warning"><p>OTP is valid for 5 minutes only</p>
          <div className="OTPWarning"><span >Change Number</span> <span >Resend OTP</span></div>
          </div>
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
  )
}
