import React, { useState } from "react";
import Steps from "../../components/Steps";
import hrline from "../../assets/pngs/steps/hrline.png";
import KycBank from "../../assets/pngs/KycBank.png";
import InputBox from "../../components/InputBox";
import Button from "../../components/Button";

export default function Bank() {
  const [BankName, setBankName] = useState("");
  const [IfscCode, setIfscCode] = useState("");
  const [AccountNum, setAccountNum] = useState("");

  const handleAccountNumChange = (event) => {
    const inputValue = event.target.value;
    setAccountNum(inputValue);
  };

  const handleIfscCodeChange = (event) => {
    const inputValue = event.target.value;
    setIfscCode(inputValue);
  };

  const handleBankTxtboxChange = (event) => {
    const inputValue = event.target.value;
    setBankName(inputValue);
  };

  const continueBtnClick = () => {
    console.log("ContinueBtnClick");
  };

return (
  <div className="container" >
          <div className="stepcontiner">
        <Steps />
      </div>
      <div className="hrline">
        <img src={hrline} alt="hrline" />
      </div>

      <div className="row" >
        <div className="col-md-5 col-sm-12 align-self-center" >
        <img src={KycBank} alt="KycBank" style={{width:'100%', height:'auto'}}/>            
        </div>
        <div className="col-md-2 col-sm-hidden">&nbsp;</div>
        <div className="col-md-5 col-sm-12 justify-content-center align-self-center">
        <InputBox
            title="Account Number (Must be Saving Account)"
            placeholder="Enter account number"
            type="text"
            id="AccountNum"
            handleInputChange={handleAccountNumChange}
            value={AccountNum}
          />

          <InputBox
            title="IFSC Code"
            placeholder="Enter IFSC Code"
            type="text"
            handleInputChange={handleIfscCodeChange}
            value={IfscCode}
            id={IfscCode}
          />

          <InputBox
            title="Bank Name"
            placeholder="Enter bank name"
            type="text"
            handleInputChange={handleBankTxtboxChange}
            value={BankName}
            id={BankName}
          />

          <div className="kycobtn">
            <Button
              btnLabel="Continue"
              rectangualar="true"
              btnClick={continueBtnClick}
              disable="true"
            />
          </div>

      </div>
      </div>
    </div>
  );
}
