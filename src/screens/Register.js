import "../scss/App.scss";
import React, { useState } from "react";
import Button from "../components/Button";
import InputBoxLowerBarder from "../components/InputBoxLowerBarder";
import Dropdown from "../components/Dropdown";
import FileUploader from "../components/FileUploader";


export default function Register() {
//   const dispatch = useDispatch();
  
  const [userName, setuserName] = useState("");

  //FileUpload

  const uploadHandler = (data) => {
    // console.log(data);
  };

  //DropDown
  const dropDownObj = [
    { value: "option1-Value", label: "Option 1" },
    { value: "option2-Value", label: "Option 2" },
    { value: "option3-Value", label: "Option 3" },
  ];

  const [dropstatus, setdropstatus] = useState(false);
  const [selectedOption, setselectedOption] = useState("");
  const handleDropdown = (e) => {
    setdropstatus(!dropstatus);
  };
  const demoValueChange = (value) => {
    setselectedOption(value);
    console.log(value);
  };
  //

  const numBtnHandleClick = () => {
   
};

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    if (isNaN(inputValue)) return false;
    setuserName(inputValue);
    // setError("");
  };

  return (
    <div className="loginBlock container">
      <div className="row justify-content-center">
        <div className="col-4 align-self-center ">
          <div className="rightSideLoginContent">
            <h1 className="pgtitle">Welcome !</h1>
            <p className="pgsubtitle">Personalize Your App</p>
            <div className="inputwithlbl">
              <InputBoxLowerBarder
                title="Name"
                placeholder="Enter Mobile Name"
                type="text"
                id="name"
                value={userName}
                handleInputChange={handleInputChange}
                // error={error}
              />
            </div>
            <div className="inputwithlbl">
              <Dropdown
                handleDropdown={handleDropdown}
                dropstatus={dropstatus}
                dropDownObj={dropDownObj}
                selectedOption={selectedOption}
                demoValueChange={demoValueChange}
              />
            </div>
            <div>
              <p className="login-instruction">
                By proceeding, you are agreeing to Floatr’s <br />
                <span>Terms & Conditions </span> & <span>Privacy Policy</span>
              </p>
            </div>
            <Button
              btnLabel="Get OTP"
              rectangualar="false"
              btnClick={numBtnHandleClick}
              disable="false"
            />
          </div>
        </div>
        <div className="col-8 d-flex justify-content-center align-self-center">
          <div className="left-LoginPageBanner">
          <FileUploader uploadHandler={uploadHandler} />
          </div>
        </div>
      </div>
    </div>
  );
}
