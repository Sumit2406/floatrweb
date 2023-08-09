import "../scss/App.scss";
import React, { useState } from "react";
import Button from "../components/Button";
import LoginPageBanner from '../assets/pngs/LoginPageBanner.png';
import OtpComplowerborder from "../components/OtpComplowerborder";
import { useNavigate } from "react-router-dom";
import InputBoxLowerBarder from "../components/InputBoxLowerBarder";


export default function OtpScreen() {
  const navigate =useNavigate()  
    //button
    const btnHandleClick = () => {
      console.log("Button Clicked in OTP")
    };
    
    //Login
  
    const [mobileNumber, setMobileNumber] = useState("");  
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    if (isNaN(inputValue)) 
        return false;
    setMobileNumber(inputValue); 
  };

    let isButtonDisabled=true;
    const [otp, setOtp] = useState(new Array(4).fill(""));
    if(otp.every((digit) => digit !== ""))
    {

      isButtonDisabled=false
    }else{
      isButtonDisabled=true;
    }
    
    const handleChange = (element, index) => {
        if (isNaN(element.value)) 
        return false;
        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };
    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !otp[index]) {
          if (index > 0) {
            const previousInput = e.target.previousSibling;
            if (e.target.previousSibling) {
              previousInput.focus();
            }
          }
        }
      };

return (
<div className="loginBlock container">
    <div className="row justify-content-center">
      {/* <div className="MainPageContent col-9 ">
      <div className="row "> */}
      <div className="col-4 align-self-center ">
        <div className="rightSideLoginContent">
      <h1 className="pgtitle">Welcome !</h1>
          <p className="pgsubtitle">Login to continue</p>
          <div className="inputwithlbl col-9">
         <InputBoxLowerBarder
                title="Mobile Number"
              placeholder="Enter Mobile Number"
              type="text"
              id="mobile"
              value={mobileNumber}
              handleInputChange={handleInputChange}
              len={10}
            /> 
          </div>

          <div className="inputwithlbl">
         <OtpComplowerborder 
         title="Enter OTP"
         otp={otp}
         handleChange={handleChange}
         handleKeyDown={handleKeyDown}
         />    
          </div>
          <div >
          <div className="login-Warning"><p>OTP is valid for 5 minutes only</p>
          <div className="OTPWarning">
            <span 
            onClick={()=>{navigate("/")}}
            >Change Number</span> <span >Resend OTP</span></div>
          </div>
          <Button
            btnLabel="Login"
            rectangualar="false"
            btnClick={btnHandleClick}
            disable={!isButtonDisabled}
          />

          </div>
      </div>
      </div>
      <div className="col-8 d-flex justify-content-center align-self-center">
      <div className="left-LoginPageBanner">
        <img src={LoginPageBanner} alt="LoginPageBanner" />
        </div>
      </div>
      {/* </div>
      </div> */}
    </div>
    </div>
  )
}
