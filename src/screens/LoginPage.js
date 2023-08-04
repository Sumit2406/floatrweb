import "../scss/App.scss";
import React, { useState } from "react";
import Button from "../components/Button";
import LoginPageBanner from "../assets/pngs/LoginPageBanner.png";
import OtpComp from "../components/OtpComp";
import InputBoxLowerBarder from "../components/InputBoxLowerBarder";
import {useNavigate} from "react-router-dom"

import {
  loginPersonal,
  otpSuccess,
  resendOtp,
  verifyOtp,
} from "../actions/UserAction";
import { useDispatch, useSelector } from "react-redux";

export default function LoginPage() {
  const dispatch = useDispatch();
  const loginReducer = useSelector((state) => state.userReducer);
  const [mobileNumber, setMobileNumber] = useState("");
  const [error, setError] = useState("");
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [otpStatus, setOtpStatus] = useState(false);
  const [loginbtnstatus, setloginbtnstatus] = useState(true);
  const [apiError, setApiError] = useState("");
  const [aixosOtp, setaxiosOtp] = useState(null);

const navigate =useNavigate();

  const onLogin = async (userinfo) => {
    const { data, error } = await loginPersonal(userinfo);
    setaxiosOtp(data.otp);
    if (!error) {
    dispatch(otpSuccess(data));
      setOtpStatus(true);
      setloginbtnstatus(false);
      setError("");
    } else {
      setError(data);
    }
    
  };
  
  
  //button
  const numBtnHandleClick = () => {
    if (mobileNumber.length !== 10) {
      setError("Mobile number should be 10 digits long");
    } else if (!/^[6789]\d{9}$/.test(mobileNumber)) {
      setError("Mobile number should start with 6, 7, 8, or 9");
    } else {
      onLogin({ contact: mobileNumber });
    }
  };
  //Login

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    if (isNaN(inputValue)) return false;
    setMobileNumber(inputValue);
    setError("");
  };

  let isOtpButtonDisabled = true;

  if (otp.every((digit) => digit !== "")) {
    isOtpButtonDisabled = false;
  } else {
    isOtpButtonDisabled = true;
  }

  const otpBtnHandleClick = async () => {
    const data = {
      contact: mobileNumber,
      otp: otp.join(""),
      otp_expire_at: loginReducer?.otpData?.expire_at,
    };

    const verifyapi = await verifyOtp(data, loginReducer?.otpData?.token);
    console.log(verifyapi);

    if (verifyapi && verifyapi.error) {
      // setApiErrorStatu(true);
      setApiError(verifyapi?.data);

      // alert(verifyapi?.data);
    } else {
      setApiError("");
      // alert("otp is verified successfully");
    }
    verifyapi.data.steps==="Registered" ? navigate('Dashboard') : navigate('/Register')
  };

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
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

  const otpResend = async () => {
    console.log("called resend");
    const data = {
      contact: mobileNumber,
    };
    const resendapi = await resendOtp(data);
    if (resendapi && resendapi.error) {
      setApiError(resendapi.data);
    } else {
      console.log("iam in sucesss");
      setApiError("");
    }
  };

  return (
    <div className="loginBlock container">
      <div className="row justify-content-center">
        <div className="col-4 align-self-center ">
          <div className="rightSideLoginContent">
            <h1 className="pgtitle">Welcome !</h1>
            <p className="pgsubtitle">Login to continue  <b>OTP -{aixosOtp}</b></p>
            <div className="inputwithlbl">
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
            {otpStatus ? (
              <>
                <div className="inputwithlbl">
                  <OtpComp
                    title="Enter OTP"
                    otp={otp}
                    handleChange={handleChange}
                    handleKeyDown={handleKeyDown}
                  />
                </div>
                <div>
                  <div className="login-Warning">
                    <div className="OTPWarning">
                      {apiError ? (
                        <p className="otpverifyerror">{apiError} </p>
                      ) : (
                        <p>OTP is valid for 5 minutes only</p>
                      )}
                      <div onClick={otpResend}>
                        <span>Resend OTP</span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="blankArea"></div>
            )}
           {!otpStatus? <div>
              <p className="login-instruction">
                By proceeding, you are agreeing to Floatr’s <br />
                <span>Terms & Conditions </span> & <span>Privacy Policy</span>
              </p>
            </div> : <div className="login-instruction"></div>}
            

            {loginbtnstatus ? (
              <Button
                btnLabel="Get OTP"
                rectangualar="false"
                btnClick={numBtnHandleClick}
                disable={
                  mobileNumber && mobileNumber.length >= 1 ? true : false
                }
              />
            ) : (
              <Button
                btnLabel="Login"
                rectangualar="false"
                btnClick={otpBtnHandleClick}
                disable={!isOtpButtonDisabled}
              />
            )}
          </div>
        </div>
        <div className="col-8 d-flex justify-content-center align-self-center">
          <div className="left-LoginPageBanner">
            <img src={LoginPageBanner} alt="LoginPageBanner" />
          </div>
        </div>
      </div>
    </div>
  );
}
