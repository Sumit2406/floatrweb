import "../scss/App.scss";
import React, { useState } from "react";
import Button from "../components/Button";
import InputBoxLowerBarder from "../components/InputBoxLowerBarder";
import LoginPageBanner from '../assets/pngs/LoginPageBanner.png';
import { loginPersonal } from "../actions/UserAction";
// import axiosInstance from "../helpers/axiosInstance";

// import { Navigate } from "react-router-dom";

export default function LoginPage() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [error, setError] = useState("");

  const onLogin = async (userinfo) => {
    const { data, error } = await loginPersonal(userinfo);
    console.log(data);
    if (!error) {
      // sendAnalytics("act_enter_phone_number");
      // navigation.navigate("VerifyOTP", {
      //   contact: data?.contact,
      // });
      // dispatch(otpSuccess(data));
    } else {
      // showToastMessage(data?.message, "fail");
    }
  };

  const btnHandleClick = () => {
    if (mobileNumber.length !== 10) {
      setError("Mobile number should be 10 digits long");
    } 
    else if (!/^[6789]\d{9}$/.test(mobileNumber)) {
      setError("Mobile number should start with 6, 7, 8, or 9");
    } 
    else {
      setError("Number Successfully Submitted");
      onLogin({contact : mobileNumber});
    } 
    // if(mobileNumber.length===10)
    // {
    //   navigate('/OtpScreen')
    // }
   };
  
  //Login

  
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    if (isNaN(inputValue)) 
        return false;
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
         <InputBoxLowerBarder
              title="Mobile Number"
              placeholder="Enter Mobile Number"
              type="text"
              id="mobile"
              value={mobileNumber}
              handleInputChange={handleInputChange}
              len={10}
              error={error}
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


