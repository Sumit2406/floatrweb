import React, { useState } from "react";
import Steps from "../../components/Steps";
import Tabs from "../../components/Tabs";
import InputBox from "../../components/InputBox";
import Button from "../../components/Button";

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
    { label: "Shri", value: "Shri", content: <p>Content for Tab 1</p> },
    { label: "Smt", value: "Smt", content: <p>Content for Tab 2</p> },
    { label: "Kumari", value: "Kumari", content: <p>Content for Tab 3</p> },
  ];

  const handleTitleSelect = (selectedValue) => {
    console.log("Selected value:", selectedValue);
  };

  const MaritalStatus = [
    { label: "Single", value: "Shri", content: <p>Content for Tab 1</p> },
    { label: "Married", value: "Smt", content: <p>Content for Tab 2</p> },
    { label: "Window", value: "Kumari", content: <p>Content for Tab 3</p> },
    { label: "Divorce", value: "Divorce", content: <p>Content for Tab 3</p> },
  ];

  const handleMaritalSelect = (selectedValue) => {
    console.log("Selected value:", selectedValue);
  };

  return (
    <div className="loginBlock container ">
      <div className="stepcontiner"><Steps /></div>
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
            <h1>Marital Status</h1>
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
