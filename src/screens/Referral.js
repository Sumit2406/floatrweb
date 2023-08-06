import "../scss/App.scss";
import React, { useState } from "react";
import Button from "../components/Button";
import InputBoxLowerBarder from "../components/InputBoxLowerBarder";
import LoginPageBanner from "../assets/pngs/LoginPageBanner.png";
import ToggleButton from "../components/ToggleButton";
import { refferedcode } from "../actions/UserAction";
import { useNavigate } from "react-router-dom";
export default function Referral() {
  //Login
  const [referralCode, setreferralCode] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [togglestatus, setToggleStatus] = useState(false);
  const [readOnlyInput, setreadOnlyInput] =useState(false);
  const [error, setApiError]=useState("");
  const navigate = useNavigate()
  const handleInputChange = (event) => {
    const inputReferralCode = event.target.value;
    setreferralCode(inputReferralCode);
    inputReferralCode ? setIsButtonDisabled(false) : setIsButtonDisabled(true);
    setApiError("");
  };
///////////////////////////////


const btnHandleClick = async () =>{
  // console.log("called resend",referralCode);
  try{
    const data = {
      refcode: referralCode,
      isreferral: true
    };
    const refferedapi = await refferedcode(data);
    if (refferedapi && refferedapi.error) {
console.log(refferedapi.data);
      setApiError(refferedapi.data);

    } else {
      // console.log(refferedapi,"Success");
      // setApiError(refferedapi.message);
navigate('/dashboard');

    }
  }
  catch(error){
console.log(error);
console.log("//////sumit")
  }

}



  const handleToggle = () => {
    setToggleStatus(!togglestatus);
    console.log(togglestatus);
    togglestatus ? setIsButtonDisabled(true) : setIsButtonDisabled(false)
    setreferralCode("");
    setreadOnlyInput(!readOnlyInput)
    setApiError("");
  };

  return (
    <div className="loginBlock container">
      <div className="row justify-content-center">
        <div className="col-4 align-self-center ">
          <div className="rightSideLoginContent">
            <h1 className="pgtitle">Have you been Referred?</h1>
            <div className="inputwithlbl inputwithlblReferal">
              <InputBoxLowerBarder
                // title="Enter Referral Code"
                placeholder="Enter Referral Code"
                type="text"
                id="referralCode"
                value={referralCode}
                handleInputChange={handleInputChange}
                readOnly={readOnlyInput}
                error={error}
              />
            </div>
            <div >
              <ToggleButton
                title="I don't have a Referral Code"
                handleToggle={handleToggle}
                togglestatus={togglestatus}
              />

              <Button
                btnLabel="Submit"
                rectangualar="false"
                btnClick={btnHandleClick}
                disable={!isButtonDisabled}
              />
            </div>
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
