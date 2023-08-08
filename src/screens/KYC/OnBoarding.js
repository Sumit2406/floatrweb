import React from "react";
import onboardingimg from "../assets/pngs/onboardingimg.png"


export default function OnBoarding() {
  return (
    <div className="loginBlock container">
      <div className="row justify-content-center">
        <div className="col-6 align-self-center ">
          <h1 className="pgtitle">Investor Onboarding</h1>
          <p>
            After onboarding is approved, you can invest in Mutual Funds and
            setup your NPS Account
          </p>
          <p>Onboarding Process:</p>
          <p>
            The onboarding is done through Aadhaar based KYC using your
            Digilocker. This is a paperless digital process and you do not need
            to upload any documents
          </p>
          <p>
            Aadhaar number and mobile linked to Aadhaar is needed for OTP
            verification & eSign
          </p>
        </div>
        <div className="col-6 d-flex justify-content-center align-self-center">
          <div className="left-LoginPageBanner">
            <img src={onboardingimg} alt="onboardingimg-img" />
          </div>
        </div>
      </div>
    </div>
  );
}
