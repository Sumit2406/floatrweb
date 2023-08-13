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
      <h1>Upload Your Photo & Signature</h1>
      <p>File size should be 2KB to 2MB only</p>
      <div className="d-flex .flex-col">
        <div className="onboading-left-content">
        <div className="uploadimg">
              <FileUploaderwithArrowIcon unloadHandler={uploadHandler} />
            </div>         
        </div>

        <div className="contactDetails-right-content">
        <div className="uploadimg">
        <FileUploaderwithArrowIcon unloadHandler={uploadHandler} />
              <span>A Sample Image of signature</span>
            </div>         
          
        </div>
      </div>
      <div>
      <Button
            btnLabel="Continue"
            rectangualar="true"
            btnClick={continueBtnClick}
            disable="true"
          />

      </div>
    </div>
  );
}
