import React from "react";
import Steps from "../../components/Steps";
import hrline from "../../assets/pngs/steps/hrline.png";
import Button from "../../components/Button";
import Tabs from "../../components/Tabs";

export default function Occupation() {

  const citizenHandleClick = () => {
    console.log("Button clicked!");
  };
  const taxpayerHandleClick = () => {
    console.log("Button clicked!");
  };

  const Politicalobj = [
    { label: "Yes", value: "Yes" },
    { label: "No", value: "No"},
  ];
  const handlePoliticalSelect = (selectedValue) => {
    console.log("Selected value:", selectedValue);
  };

  const Politicalrelatedobj = [
    { label: "Yes", value: "Yes" },
    { label: "No", value: "No"},
  ];
  const handlePoliticalrelated= (selectedValue) => {
    console.log("Selected value:", selectedValue);
  };


  const Occupatiotypeobj = [
    { label: "Private Sector", value: "Private Sector" },
    { label: "Public Sector", value: "Public Sector"},
    { label: "Govt Employee", value: "Govt Employee"},
    { label: "Business", value: "Business"},
    { label: "Professional", value: "Professional"},
    { label: "Retired", value: "Retired"},
    { label: "Housewife", value: "Housewife"},
    { label: "Student", value: "Student"},
    { label: "Not Working", value: "Not Working"},
  ];
  const Occupatiotypeobjhandle = (selectedValue) => {
    console.log("Selected value:", selectedValue);
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
          <div className="d-flex">
            <p>I am a citizen of India</p>{" "}
            <Button
              btnLabel="Yes"
              rectangualar="true"
              btnClick={citizenHandleClick}
            />
          </div>
          <div className="d-flex">
            <p>I am tax payer only in India</p>{" "}
            <Button
              btnLabel="Yes"
              rectangualar="true"
              btnClick={taxpayerHandleClick}
            />
          </div>

          <div className="d-flex">
            <p>I am politically exposed person</p>{" "}
            <Tabs
              tabDataObj={Politicalobj}
              defaultSelected="1"
              handleTabSelect={handlePoliticalSelect}
            />        
          </div>
          <div className="d-flex">
            <p>I am politically exposed person</p>{" "}
            <Tabs
              tabDataObj={Politicalrelatedobj}
              defaultSelected="1"
              handleTabSelect={handlePoliticalrelated}
            />                    
          </div>
          <div >
          <h1 className="Tabtitle">Occupation Type</h1>
          <div >
            <Tabs
              tabDataObj={Occupatiotypeobj}
              defaultSelected="1"
              handleTabSelect={Occupatiotypeobjhandle}
            />
            </div>
          </div>
        </div>

        <div className="contactDetails-right-content">


        </div>

      </div>
    </div>
  );
}
