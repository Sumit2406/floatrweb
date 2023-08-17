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
  <div className="container" >
          <div className="stepcontiner">
        <Steps />
      </div>
      <div className="hrline">
        <img src={hrline} alt="hrline" />
      </div>
      <div>
      <h1 className="contactDetailslabel">Upload Your Photo & Signature</h1>
 <p className="Tabtitle">File size should be 2KB to 2MB only</p>
      <div className="row ">        
        <div className="col-md-5 col-sm-12 " s>
          <p>Selfe Photo</p>
 <FileUploaderwithArrowIcon uploadHandler={uploadHandler} />
        </div>
        <div className="col-md-2 col-sm-hidden" >&nbsp;</div>
        <div className="col-md-5 col-sm-12  ">
        <p>Signature</p>
        <FileUploaderwithArrowIcon uploadHandler={uploadHandler} />
        <p>A Sample Image of signature</p>
      </div>
      </div>
      <div className="d-flex justify-content-end">
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
