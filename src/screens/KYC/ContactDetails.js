import React, { useState } from "react";
import ContactDetailsImage from "../../assets/pngs/ContactDetailsImage.png";
import "../../scss/Kyc.scss";
import Button from "../../components/Button";
import InputBox from "../../components/InputBox";

export default function ContactDetails() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailId, setEmailID] = useState("");

  const numBtnHandleClick = () => {
    let hasError = false;

    if (mobileNumber.length !== 10) {
      setError("Mobile number should be 10 digits long");
      hasError = true;
    } else if (!/^[6789]\d{9}$/.test(mobileNumber)) {
      setError("Mobile number should start with 6, 7, 8, or 9");
      hasError = true;
    } else {
      setError("");
    }

    // if (!/^[A-Z0-9._%+-]+@[A-Z]+\.(?:[A-Z]{2,}|co\.in|in)$/i.test(emailId)) {
    //   setEmailError("Enter a valid email address");
    //   hasError = true;
    // } else if (!/^[A-Z]/i.test(emailId)) {
    //   setEmailError("Email should not start with a number");
    //   hasError = true;
    // } else {
    //   setEmailError("");
    // }

    if (!/^[A-Z0-9._%+-]+@[A-Z]+\.(?:[A-Z]{2,}|co\.in|in)$/i.test(emailId)) {
      setEmailError("Enter a valid email address");
      hasError = true;
    } else if (!/^[A-Z]/i.test(emailId)) {
      setEmailError("Email should not start with a number");
      hasError = true;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(emailId)) {
      setEmailError("Invalid email format");
      hasError = true;
    } else if (/^[A-Z0-9._%+-]+@mail\.(?:c|com)$/i.test(emailId)) {
      setEmailError("Invalid email domain");
      hasError = true;
    } else if (/^[A-Z0-9._%+-]+@mail#.com$/i.test(emailId)) {
      setEmailError("Invalid email domain");
      hasError = true;
    } else if (/^[A-Z0-9._%+-]+@mail\.\.$/i.test(emailId)) {
      setEmailError("Invalid email domain");
      hasError = true;
    } else {
      setEmailError("");
    }
    if (!hasError) {
      // Perform other actions here after validation
      console.log("Mobile number and Email Id is correct");
    }
  };

  const handleEmailInputChange = (event) => {
    const emailValue = event.target.value;
    setEmailID(emailValue);
    setEmailError("");
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    if (!isNaN(inputValue)) {
      setMobileNumber(inputValue);
      setError("");
    }
  };

  return (
    <div className="loginBlock container d-flex .flex-col">
      <div className="onboading-left-content">
        <img src={ContactDetailsImage} alt="ContactDetailsImage-img" />
      </div>

      <div className="contactDetails-right-content">
        <InputBox
          title="Mobile Number"
          placeholder="Enter Mobile Number"
          type="text"
          id="mobile"
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
          error={emailError}
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
