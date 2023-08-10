import React, { useState } from "react";
import DigilockerBanner from "../../assets/pngs/DigilockerBanner.png";
import Digilockerlogo from "../../assets/pngs/Digilockerlogo.png";
import "../../scss/Kyc.scss";
import Button from "../../components/Button";
export default function DigilockerPage() {
  const numBtnHandleClick = () => {
    console.log("clicked by kyc Otp");
  };

  return (
    <div className="loginBlock container d-flex .flex-col">
      <div className="onboading-left-content">
        <img src={DigilockerBanner} alt="DigilockerBanner-img" />
      </div>

      <div className="contactDetails-right-content">
        <h1 className="contactDetailslabel">Verification</h1>
        <p>
          Your Aadhaar card must be linked to a mobile number to receive and
          confirm the OTP
        </p>
        <div className="Digilockerlogo">
        <img src={Digilockerlogo} alt="Digilockerlogo-img" />
        </div>
        <h2>How Digilocker works</h2>
        <ul>
          <li>
            Your KYC related documents are auto-verified using the digilocker
          </li>
          <li>
            To access digilocker you enter your Aadhaar number and confirm the
            OTP received on the mobile linked to the Aadhaar card
          </li>
          <li>
            You will be redirected to the digilocker page where in you need to
            provide consent for sharing documents / information with CRA
          </li>
        </ul>
        <Button
          btnLabel="Start Onboarding"
          rectangualar="true"
          btnClick={numBtnHandleClick}
          disable="false"
        />
      </div>
    </div>
  );
}
