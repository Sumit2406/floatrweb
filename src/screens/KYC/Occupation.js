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
    { label: "No", value: "No" },
  ];
  const handlePoliticalSelect = (selectedValue) => {
    console.log("Selected value:", selectedValue);
  };

  const Politicalrelatedobj = [
    { label: "Yes", value: "Yes" },
    { label: "No", value: "No" },
  ];
  const handlePoliticalrelated = (selectedValue) => {
    console.log("Selected value:", selectedValue);
  };

  const Occupatiotypeobj = [
    { label: "Private Sector", value: "Private Sector" },
    { label: "Public Sector", value: "Public Sector" },
    { label: "Govt Employee", value: "Govt Employee" },
    { label: "Business", value: "Business" },
    { label: "Professional", value: "Professional" },
    { label: "Retired", value: "Retired" },
    { label: "Housewife", value: "Housewife" },
    { label: "Student", value: "Student" },
    { label: "Not Working", value: "Not Working" },
  ];
  const Occupatiotypeobjhandle = (selectedValue) => {
    console.log("Selected value:", selectedValue);
  };

  const SourcOfIncomeObj = [
    { label: "Salary", value: "Salary" },
    { label: "Business", value: "Business" },
    { label: "Rental", value: "Rental" },
    { label: "Royalty", value: "Royalty" },
    { label: "Ancestral", value: "Ancestral" },
    { label: "Others", value: "Others" },
  ];
  const SourcOfIncomehandle = (selectedValue) => {
    console.log("Selected value:", selectedValue);
  };

  const AnnualIncometypeobj = [
    { label: "Below 1 Lakh", value: "Below 1 Lakh" },
    { label: "1-5 Lakhs", value: "1-5 Lakhs" },
    { label: "5-10 Lakhs", value: "5-10 Lakhs" },
    { label: "10-20 Lakhs", value: "10-20 Lakhs" },
    { label: "25L to 1Cr", value: "25L to 1Cr" },
    { label: "Above 1Cr", value: "Above 1Cr" },
  ];
  const AnnualIncomehandle = (selectedValue) => {
    console.log("Selected value:", selectedValue);
  };

  const ContiueBtnClick = () => {
    console.log("Button clicked!");
  };


return (
  <div className="container" >
          <div className="stepcontiner">
        <Steps />
      </div>
      <div className="hrline">
        <img src={hrline} alt="hrline" />
      </div>

      <div className="row mt-4" >
        <div className="col-md-6 col-sm-12  " >
        <div className="d-flex justify-content-center align-items-center mb-2 ">
            <p className="Occupationinfo ">I am a citizen of India</p>{" "}
            <Button
              btnLabel="Yes"
              rectangualar="false"
              btnClick={citizenHandleClick}
              disable="false"
            />
          </div>
          <div className="d-flex align-items-center ">
            <p className="Occupationinfo">I am tax payer only in India</p>{" "}
            <Button
              btnLabel="Yes"
              rectangualar="false"
              btnClick={taxpayerHandleClick}
              disable="false"
            />
          </div>

          <div className="d-flex align-items-center">
            <p className="Occupationinfo">I am politically exposed person</p>{" "}
            <Tabs
              tabDataObj={Politicalobj}
              defaultSelected={Politicalobj[1].value}
              handleTabSelect={handlePoliticalSelect}
            />
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <p className="Occupationinfo ">I am related to a politically
exposed person</p>{" "}
            <Tabs
              tabDataObj={Politicalrelatedobj}
              defaultSelected={Politicalrelatedobj[1].value}
              handleTabSelect={handlePoliticalrelated}
            />
          </div>
          <div>
            <h1 className="Tabtitle">Occupation Type</h1>
            <div >
              <Tabs
                tabDataObj={Occupatiotypeobj}
                defaultSelected={Occupatiotypeobj[4].value}
                handleTabSelect={Occupatiotypeobjhandle}
              />
            </div>
          </div>
            

        </div>
        {/* <div className="col-md-2 col-sm-hidden">&nbsp;</div> */}
        <div className="col-md-6 col-sm-12 ">

        <div>
            <h1 className="Tabtitle">Main Source of Income</h1>
            <div>
              <Tabs
                tabDataObj={SourcOfIncomeObj}
                defaultSelected={SourcOfIncomeObj[0].value}
                handleTabSelect={SourcOfIncomehandle}
              />
            </div>
          </div>

          <div>
            <h1 className="Tabtitle">Annual Income</h1>
            <div>
              <Tabs
                tabDataObj={AnnualIncometypeobj}
                defaultSelected={AnnualIncometypeobj[1].value}
                handleTabSelect={AnnualIncomehandle}
              />
            </div>
          </div>
          <div className="kycobtn">
            <Button
              btnLabel="Continue"
              rectangualar="true"
              btnClick={ContiueBtnClick}
              disable="false"
            />
          </div>
      </div>
      </div>
    </div>
  );
}