import React, { useState } from "react";
import KycOtpImg from "../../assets/pngs/KycOtpImg.png";
import OtpLine from "../../assets/pngs/OtpLine.png";
import "../../scss/Kyc.scss";
import Button from "../../components/Button";
import OtpComp from "../../components/OtpComp";
import { useLocation } from 'react-router-dom';


export default function KycOtp() {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [Emailotp, setEmailotp] = useState(new Array(4).fill(""));
  const [apiError, setApiError] = useState("");

  const location = useLocation();
  const { mobileNumber, emailId } = location?.state ? location.state : {};
console.log(mobileNumber);
console.log(emailId);
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
console.log("OTP",otp);
console.log("Email OTP", Emailotp);

  return (
  <div className="container" >
      <div className="row" >
        <div className="col-md-5 col-sm-12 align-self-center " >
            <img src={KycOtpImg} alt="KycOtpImg-img" style={{width:'100%', height:'auto'}}/>
        </div>
        <div className="col-md-2 col-sm-hidden">&nbsp;</div>
        <div className="col-md-5 col-sm-12 justify-content-center align-self-center">
          <div className="" >
            <h1 className="contactDetailslabel">Verification</h1>
            <OtpComp
              title="Mobile Number Verification"
              otp={otp}
              handleChange={handleChange}
              handleKeyDown={handleKeyDown}
              error={apiError}
              otpResend={otpResend}
              otpxxnum={"******".concat(mobileNumber?.slice(7,10))}
              KycOTPDesign="KycOTPDesign"
              Kycotp_field="Kycotp_field"
              Kyclogin_Warning="Kyclogin_Warning"
            />
            <div className="OtpLine">
              <img src={OtpLine} alt="OtpLine" />
            </div>
    
            <OtpComp
              title="Mobile Number Verification"
              otp={Emailotp}
              handleChange={handleChangeforEmail}
              handleKeyDown={handleKeyDownformail}
              error={apiError}
              otpResend={otpResend}
              otpxxnum={"******".concat(emailId?.slice(7))}
              KycOTPDesign="KycOTPDesign"
              Kycotp_field="Kycotp_field"
              Kyclogin_Warning="Kyclogin_Warning"
            />
            <div style={{width:'100%',display:'flex', justifyContent:'flex-end'}}>
            
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end">
        <div className="kycobtn ">
              <Button
                btnLabel="Start Onboarding"
                rectangualar="true"
                btnClick={numBtnHandleClick}
                disable={Emailotp.length===4 && otp.length===4}
              />
            </div>
</div>
      </div>
    </div>
  );
}
