import React, { useState } from "react";
import ContactDetailsImage from "../../assets/pngs/ContactDetailsImage.png";
import "../../scss/Kyc.scss";
import Button from "../../components/Button";
import InputBox from "../../components/InputBox";

export default function ContactDetails() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [error, setError] = useState("");
  const [emailId, setEmailID] = useState("");

  const numBtnHandleClick = () => {
    if (mobileNumber.length !== 10) {
      setError("Mobile number should be 10 digits long");
    } else if (!/^[6789]\d{9}$/.test(mobileNumber)) {
      setError("Mobile number should start with 6, 7, 8, or 9");
    } 
    // else {
    //   onLogin({ contact: mobileNumber });
    // }
  };

const handleEmailInputChange =(e) => {
    setEmailID(e.target.value);
}

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    if (isNaN(inputValue)) return false;
    setMobileNumber(inputValue);
    setError("");
  };



  return (
    <div className="loginBlock container d-flex .flex-col">
      <div className="onboading-left-content">
        <img src={ContactDetailsImage} alt="ContactDetailsImage-img" />
      </div>

      <div className="onboading-right-content">
        <InputBox
          title="Mobile Number"
          placeholder="9588095880"
          type="text"
          id="mobile"
          prefix="+91"
          handleInputChange={handleInputChange}
          value={mobileNumber}
          len={10}
          error={error}
        />

        <InputBox
          title="Email ID"
          holder="abcd123@gmail.com"
          type="text"
          handleInputChange={handleEmailInputChange}
          value={emailId}
        />

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
