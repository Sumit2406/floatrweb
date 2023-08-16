import React, { useState } from "react";
import KycOtpImg from "../../assets/pngs/KycOtpImg.png";
import OtpLine from "../../assets/pngs/OtpLine.png";
import "../../scss/Kyc.scss";
import Button from "../../components/Button";
import OtpComp from "../../components/OtpComp";

export default function KycOtp() {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [Emailotp, setEmailotp] = useState(new Array(4).fill(""));
  const [apiError, setApiError] = useState("");

  // const [error, setError] = useState("");

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

  const handleChangeforEmail = (element, index) => {
    if (isNaN(element.value)) return false;
    setEmailotp([...Emailotp.map((d, idx) => (idx === index ? element.value : d))]);
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleKeyDownformail = (e, index) => {
    if (e.key === "Backspace" && !otp[index]) {
      if (index > 0) {
        const previousInput = e.target.previousSibling;
        if (e.target.previousSibling) {
          previousInput.focus();
        }
      }
    }
  };

  const otpResend = () => {
    console.log("OTP resend button click from kycOTP");
  };

  const numBtnHandleClick = () => {
    console.log("clicked by kyc Otp");
  };

  return (
    <div className="loginBlock container d-flex .flex-col">
      <div className="onboading-left-content">
        <img src={KycOtpImg} alt="KycOtpImg-img" />
      </div>

      <div className="contactDetails-right-content position-relative">
        <h1 className="contactDetailslabel">Verification</h1>
        <OtpComp
          KycOTPDesign="KycOTPDesign"
          Kycotp_field="Kycotp_field"
          Kyclogin_Warning="Kyclogin_Warning"
          title="Mobile Number Verification"
          otp={otp}
          handleChange={handleChange}
          handleKeyDown={handleKeyDown}
          error={apiError}
          otpResend={otpResend}
        />
        <div className="OtpLine">
          <img src={OtpLine} alt="OtpLine" />
        </div>

        <OtpComp
          KycOTPDesign="KycOTPDesign"
          Kycotp_field="Kycotp_field"
          Kyclogin_Warning="Kyclogin_Warning"
          title="Mobile Number Verification"
          otp={Emailotp}
          handleChange={handleChangeforEmail}
          handleKeyDown={handleKeyDownformail}
          error={apiError}
          otpResend={otpResend}
        />
        <div className="kycobtn">
          <Button
            btnLabel="Start Onboarding"
            rectangualar="true"
            btnClick={numBtnHandleClick}
            disable="false"
          />
        </div>
      </div>
    </div>
  );
}
