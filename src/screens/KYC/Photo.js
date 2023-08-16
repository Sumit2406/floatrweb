import React from "react";
import Steps from "../../components/Steps";
import hrline from "../../assets/pngs/steps/hrline.png";
import Button from "../../components/Button";
import FileUploaderwithArrowIcon from "../../components/FileUploaderwithArrowIcon";

export default function Photo() {
  const continueBtnClick = () => {
    console.log("ContinueBtnClick");
  };
  const uploadHandler = (data) => {
    // console.log(data);
  };

  return (
    <div className="loginBlock container ">
      <div className="stepcontiner">
        <Steps />
      </div>
      <div className="hrline">
        <img src={hrline} alt="hrline" />
      </div>
      <h1 className="contactDetailslabel">Upload Your Photo & Signature</h1>
      <p className="Tabtitle">File size should be 2KB to 2MB only</p>
      <div className="d-flex .flex-col">
        <div className="onboading-left-content">
          <div >
            <FileUploaderwithArrowIcon unloadHandler={uploadHandler} />
          </div>
        </div>

        <div className="contactDetails-right-content position-relative">
          <div >
            <FileUploaderwithArrowIcon unloadHandler={uploadHandler} />
          </div>
          <p>A Sample Image of signature</p>
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