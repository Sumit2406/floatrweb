import React, { useState } from "react";
import Steps from "../../components/Steps";
import Tabs from "../../components/Tabs";
import InputBox from "../../components/InputBox";
import Button from "../../components/Button";
import hrline from "../../assets/pngs/steps/hrline.png"

export default function Aboutme() {
  const [fatherName, setFatherName] = useState("");
  const [motherName, setmotherName] = useState("");
  const [spouceName, setspouceName] = useState("");
  const [AadharNum, setAadharNum] = useState("");
  const [PanNum, setPanNum] = useState("");

  const handleAadharChange = (e) => {
    setAadharNum(e.target.value);
    // console.log(e.target.value);
  };

  const handlePanChange = (e) => {
    setPanNum(e.target.value);
    // console.log(e.target.value);
  };

  const handleFatherInputChange = (e) => {
    setFatherName(e.target.value);
    // console.log(e.target.value);
  };
  const handleMotherInputChange = (e) => {
    setmotherName(e.target.value);
    // console.log(e.target.value);
  };
  const handleSpouceInputChange = (e) => {
    setspouceName(e.target.value);
    // console.log(e.target.value);
  };

  const btnHandleClick = () => {
    console.log("Button clicked!");
  };

  const Title = [
    { label: "Shri", value: "Shri" },
    { label: "Smt", value: "Smt"},
    { label: "Kumari", value: "Kumari" },
  ];

  const handleTitleSelect = (selectedValue) => {
    console.log("Selected value:", selectedValue);
  };

  const MaritalStatus = [
    { label: "Single", value: "Single"},
    { label: "Married", value: "Married"},
    { label: "widow", value: "widow"},
    { label: "Divorce", value: "Divorce"},
  ];

  const handleMaritalSelect = (selectedValue) => {
    console.log("Selected value:", selectedValue);
  };

  return (
    <div className="loginBlock container ">
      <div className="stepcontiner"><Steps /></div>
      <div className="hrline">
        <img src={hrline} alt="hrline" />
        </div>
      <div className="d-flex .flex-col">
        <div className="onboading-left-content">
          <InputBox
            title="PAN"
            placeholder="AERTS3403H"
            type="text"
            id="PanId"
            handleInputChange={handlePanChange}
            value={PanNum}
          />

          <InputBox
            title="Aadhar "
            holder="xxxx xxxx 2431"
            type="text"
            id="AadharId"
            handleInputChange={handleAadharChange}
            value={AadharNum}
          />
        </div>
        <div className="contactDetails-right-content">
          <div>
          <h1 className="Tabtitle">Title</h1>
            <Tabs
              tabDataObj={Title}
              defaultSelected="1"
              handleTabSelect={handleTitleSelect}
            />
          </div>
          <InputBox
            title="Father's Name"
            placeholder="Enter full name"
            type="text"
            id="fatherId"
            handleInputChange={handleFatherInputChange}
            value={fatherName}
            len={10}
          />
          <div>
            <InputBox
              title="Mother’s Name"
              holder="Enter full name"
              type="text"
              id="motherId"
              handleInputChange={handleMotherInputChange}
              value={motherName}
            />
          </div>
          <div>
            <h1 className="Tabtitle">Marital Status</h1>
            <Tabs
              tabDataObj={MaritalStatus}
              defaultSelected="1"
              handleTabSelect={handleMaritalSelect}
            />
          </div>
          <InputBox
            title="Spouce Name"
            holder="Enter full Name"
            type="text"
            handleInputChange={handleSpouceInputChange}
            value={spouceName}
          />
          <div>
            <Button
              btnLabel="Cotinue"
              rectangualar="true"
              btnClick={btnHandleClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
