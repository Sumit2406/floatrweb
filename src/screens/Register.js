import "../scss/App.scss";
import React, { useState,useEffect } from "react";
import Button from "../components/Button";
import InputBoxLowerBarder from "../components/InputBoxLowerBarder";
import Dropdown from "../components/Dropdown";
import FileUploader from "../components/FileUploader";
import {updateState} from "../actions/UserAction";
// import { useSelector } from "react-redux";
import LoginPageBanner from "../assets/pngs/LoginPageBanner.png";

export default function Register() {
//   const dispatch = useDispatch();
  
  const [userName, setuserName] = useState("");
  const [dropDownObj, setDropDownObj] =useState([])
  const [error, setApiError] =useState(null)

  //FileUpload

  const uploadHandler = (data) => {
    // console.log(data);
  };

  //DropDown
  // const dropDownObj = [
  //   { value: "Andhra-Pradesh", label: "Andhra Pradesh" },
  //   { value: "Arunachal Pradesh", label: "Arunachal Pradesh" },
  //   { value: "Assam", label: "Assam" },
  // ];



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
    if (/^[a-zA-Z\s]*$/.test(inputValue) || inputValue === '') {
      setuserName(inputValue);
    }
    
    // setError("");
  };


 console.log(
  'dropDownObj',dropDownObj
 );


  useEffect( async() => {
    const statedata = await updateState({});
    if (statedata && statedata.error) {
      setApiError(statedata.data);
      // console.log(error);
    } else {
      // console.log("data Fetched");
      setDropDownObj(statedata?.data?.data)
      // setApiError("");
    }
  }, []);

  return (
    <div className="loginBlock container">
      <h1 className="pgtitle uploadpgtitle">Personalize Your Account</h1>
      <div className="row justify-content-center">
        <div className="col-4 align-self-center ">
          <div className="rightSideLoginContent">
            {/* <h1 className="pgtitle">Personalize Your Account</h1> */}
          <div className="uploadimg">
              <FileUploader uploadHandler={uploadHandler} />   
            </div>         
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
            <Button
              btnLabel="Next"
              rectangualar="false"
              btnClick={numBtnHandleClick}
              disable="false"
            />
          </div>
        </div>
        <div className="col-8 d-flex justify-content-center align-self-center">

        <div className="left-LoginPageBanner">
            <img src={LoginPageBanner} alt="LoginPageBanner" />
          </div>
        </div>
      </div>
    </div>
  );
}
