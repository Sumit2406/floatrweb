import React from "react";
import DigilockerBanner from "../../assets/pngs/DigilockerBanner.png";
import Digilockerlogo from "../../assets/pngs/Digilockerlogo.png";
import "../../scss/Kyc.scss";
import Button from "../../components/Button";
export default function DigilockerPage() {
  const numBtnHandleClick = () => {
    console.log("clicked by kyc Otp");
  };

  return (
    <div className="container" >
    <div className="row" >
      <div className="col-md-5 col-sm-12 align-self-center " >
          <img img src={DigilockerBanner} alt="DigilockerBanner-img"  style={{width:'100%', height:'auto'}}/>
      </div>
      <div className="col-md-2 col-sm-hidden">&nbsp;</div>
      <div className="col-md-5 col-sm-12 justify-content-center align-self-center">
      <h1 className="contactDetailslabel">Verify Through DigiLocker</h1>
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
  </div>
    
  );
}
