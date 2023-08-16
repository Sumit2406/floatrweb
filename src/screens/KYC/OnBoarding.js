import React from "react";
import onboardingimg from "../../assets/pngs/onboardingimg.png";
import "../../scss/Kyc.scss";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
export default function OnBoarding() {
  const navigate = useNavigate();

  const onBoardBtnHandleClick = () => {
    navigate("/Contactdetails");
  };

  return (
    <div className="container" >
    <div className="row" >
      {/* <div className="col-md-5 col-sm-12 align-self-center " > */}
      <div className="col-md-5 col-sm-12 justify-content-center align-self-center">
      <h1 className="contactDetailslabel">Investor Onboarding</h1>
        <p>
          After onboarding is approved, you can invest in Mutual Funds and setup
          your NPS Account
        </p>
        <p>Onboarding Process:</p>
        <p>
          The onboarding is done through Aadhaar based KYC using your
          Digilocker. This is a paperless digital process and you do not need to
          upload any documents
        </p>
        <p>
          Aadhaar number and mobile linked to Aadhaar is needed for OTP
          verification & eSign
        </p>
        <div className="onboardingbtn">
          <Button
            btnLabel="Start Onboarding"
            rectangualar="false"
            btnClick={onBoardBtnHandleClick}
            disable="false"
          />
        </div>
      </div>
      <div className="col-md-2 col-sm-hidden">&nbsp;</div>
      <div className="col-md-5 col-sm-12 align-self-center " >
      <img src={onboardingimg} alt="onboardingimg-img" style={{width:'100%', height:'auto'}}/>
      </div>
    </div>
  </div>
);
}
