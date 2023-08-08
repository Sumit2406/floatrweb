import React from "react";
import onboardingimg from "../../assets/pngs/onboardingimg.png";
import "../../scss/Kyc.scss";
import Button from "../../components/Button";


export default function OnBoarding() {

  const onBoardBtnHandleClick = () => {
    console.log("Clicked by onBoardBtnHandleClick")
  };


  return (
    <div className="loginBlock container d-flex .flex-col">
  
        <div className = "onboading-left-content">
          <h1>Investor Onboarding</h1>
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
          <Button
                btnLabel="Start Onboarding"
                rectangualar="false"
                btnClick={onBoardBtnHandleClick}
                disable = "false"
         />
        </div>

        <div className="onboading-right-content">
          <img src={onboardingimg} alt="onboardingimg-img" />
        </div>

    </div>
  );
}
