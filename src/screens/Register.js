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
    { value: "Andhra-Pradesh", label: "Andhra Pradesh" },
    { value: "Arunachal Pradesh", label: "Arunachal Pradesh" },
    { value: "Assam", label: "Assam" },
    { value: "Bihar", label: "Bihar" },
    { value: "Chhatisgarh", label: "Chhatisgarh" },
    { value: "Goa", label: "Goa" },
    { value: "Gujarat", label: "Gujarat" },
    { value: "Haryana", label: "Haryana" },
    { value: "Himachal-Pradesh", label: "Himachal Pradesh" },
    { value: "Jharkhand", label: "Jharkhand" },
    { value: "Karnataka", label: "Karnataka" },
    { value: "Kerala", label: "Kerala" },
    { value: "Madhra-Pradesh", label: "Madhra Pradesh" },
    { value: "Maharashtra", label: "Maharashtra" },
    { value: "Manipur", label: "Manipur" },
    { value: "Meghalaya", label: "Meghalaya" },
    { value: "Mizoram", label: "Mizoram" },
    { value: "Nagaland", label: "Nagaland" },
    { value: "Odisha", label: "Odisha" },
    { value: "Punjab", label: "Punjab" },
    { value: "Rajsthan", label: "Rajsthan" },
    { value: "Sikkim", label: "Sikkim" },
    { value: "Tamilnadu", label: "Tamilnadu" },
    { value: "Telangana", label: "Telangana" },
    { value: "Tripura", label: "Tripura" },
    { value: "Uttar-Pradesh", label: "Uttar Pradesh" },
    { value: "Uttrakhand", label: "Uttrakhand" },
    { value: "West-Bengal", label: "West Bengal" },
    { value: "Andaman-Nicobar", label: "Andaman and Nicobar Islands" },
    { value: "Chandigarh", label: "Chandigarh" },
    { value: "Dadra-Nagar-Haveli", label: "Dadra and Nagar Haveli" },
    { value: "Delhi", label: "Delhi" },
    { value: "Jammu-Kashmir", label: "Jammu and Kashmir" },
    { value: "Ladakh", label: "Ladakh" },
    { value: "Lakshadweep", label: "Lakshadweep" },
    { value: "Punducherry", label: "Punducherry" },
    { value: "Daman-Diu", label: "Daman and Diu" },
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
              <p className="stateTitle">Select State</p>
              <Dropdown
                handleDropdown={handleDropdown}
                dropstatus={dropstatus}
                dropDownObj={dropDownObj}
                selectedOption={selectedOption}
                demoValueChange={demoValueChange}
                title="Select State"
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
