import "../scss/App.scss";
import React, { useState } from "react";
import Button from "../components/Button";
import InputBoxLowerBarder from "../components/InputBoxLowerBarder";
import LoginPageBanner from "../assets/pngs/LoginPageBanner.png";
import ToggleButton from "../components/ToggleButton";

export default function Referral() {
  //Login
  const [referralCode, setreferralCode] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [togglestatus, setToggleStatus] = useState(true);
  const handleInputChange = (event) => {
    const inputReferralCode = event.target.value;
    setreferralCode(inputReferralCode);

    inputReferralCode ? setIsButtonDisabled(false) : setIsButtonDisabled(true);
  };

  const btnHandleClick = () => {
    console.log("clicked by Referral page");
  };

  const handleToggle = (event) => {
    setToggleStatus(!togglestatus);
  };

  return (
    <div className="loginBlock container">
      <div className="row justify-content-center">
        <div className="col-4 align-self-center ">
          <div className="rightSideLoginContent">
            <h1 className="pgtitle">Have you reffered?</h1>
            <div className="inputwithlbl">
              <InputBoxLowerBarder
                title="Enter Referral Code"
                placeholder="Enter code if you are referred"
                type="text"
                id="referralCode"
                value={referralCode}
                handleInputChange={handleInputChange}
              />
            </div>
            <div>
              <ToggleButton
                title="I don't have a Referral Code"
                handleToggle={handleToggle}
                togglestatus={togglestatus}
              />
              <div className="blankArea blankAreaReferal"></div>
              <div>
                <p className="login-instruction">
                  By proceeding, you are agreeing to Floatr’s <br />
                  <span>Terms & Conditions </span> & <span>Privacy Policy</span>
                </p>
              </div>
              <Button
                btnLabel="Submit"
                rectangualar="false"
                btnClick={btnHandleClick}
                disable={!isButtonDisabled}
              />
            </div>
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
