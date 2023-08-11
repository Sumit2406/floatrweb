import React, { useState } from 'react'
import Steps from "../../components/Steps";
import hrline from "../../assets/pngs/steps/hrline.png"
import KycBank from "../../assets/pngs/KycBank.png"
import InputBox from "../../components/InputBox";
import Button from '../../components/Button';

export default function Bank() {
  const[BankName, setBankName]=useState("");
  const[IfscCode, setIfscCode]=useState("");
  const[AccountNum, setAccountNum]=useState("");

  const handleAccountNumChange = (event) => {
    const inputValue = event.target.value;
    setAccountNum(inputValue);
  };

  const handleIfscCodeChange = (event) => {
    const inputValue = event.target.value;
         setIfscCode(inputValue);
    }

    const handleBankTxtboxChange = (event) => {
      const inputValue = event.target.value;
        setBankName(inputValue);
      }

      const continueBtnClick = () => {
        console.log("ContinueBtnClick");
          };

  return (
    <div className="loginBlock container ">
    <div className="stepcontiner">
      <Steps />
    </div>
    <div className="hrline">
      <img src={hrline} alt="hrline" />
      </div>
    <div className="d-flex .flex-col">
      <div className="onboading-left-content">
<img src={KycBank} alt="KycBank" />
</div>

<div className="contactDetails-right-content">
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

          <Button
                btnLabel="Continue"
                rectangualar="true"
                btnClick={continueBtnClick}
                disable = "true"
         />

</div>
</div>

    </div>
  )
}
