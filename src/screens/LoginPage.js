import "../scss/App.scss";
import React, { useState } from "react";
import Button from "../components/Button";
import InputBox from "../components/InputBox";
import LoginPageBanner from '../assets/pngs/LoginPageBanner.png';
// import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  
// const navigate =useNavigate()  

  const btnHandleClick = () => {
    const digitPattern = /^[6789]\d{9}$/;
    let error;
    if (!mobileNumber) {
      error = "Mobile number field cannot be blank";
    }
    else if (!digitPattern.test(mobileNumber)) {
      error= "Mobile number should contain only digits";
    } 
    else if (mobileNumber.length !== 10) {
      error= "Mobile number should be 10 digits long";
    } 
    else if (!["6", "7", "8", "9"].includes(mobileNumber.charAt(0))) {
      error= "Mobile number should start with 6, 7, 8, or 9";
    }  
    else {
      error= "Number Successfully Submitted";
    }
    console.log(error);
  };
  
  //Login
  const [mobileNumber, setMobileNumber] = useState("");

  
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setMobileNumber(inputValue);  
  };

  const isButtonDisabled = mobileNumber === "";

  return (
    <div className="loginBlock container">
    <div className="row justify-content-center">
      <div className="MainPageContent col-9 ">
      <div className="row ">
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


