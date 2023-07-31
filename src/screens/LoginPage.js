import "../scss/App.scss";
import React, { useState } from "react";
import Button from "../components/Button";
import LoginPageBanner from '../assets/pngs/LoginPageBanner.png';
import OtpComp from "../components/OtpComp";
import { useNavigate } from "react-router-dom";
import InputBoxLowerBarder from "../components/InputBoxLowerBarder";

import { loginPersonal, otpSuccess } from "../actions/UserAction";
import { useDispatch, useSelector } from "react-redux";


export default function LoginPage() {
  const dispatch = useDispatch();
  const loginReducer = useSelector((state) => state.userReducer)
  const [mobileNumber, setMobileNumber] = useState("");
  const [error, setError] = useState("");
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [otpStatus, setOtpStatus] = useState(false);
  const [loginbtnstatus, setloginbtnstatus] =useState(true);
  const navigate =useNavigate()  

  const onLogin = async (userinfo) => {
    const { data, error } = await loginPersonal(userinfo);
    console.log(data);
    if (!error) {
      // sendAnalytics("act_enter_phone_number");
      // navigation.navigate("VerifyOTP", {
      //   contact: data?.contact,
      // });
      dispatch(otpSuccess(data));
      console.log( 'loginReducer.... iiiii',loginReducer)
    } else {
      // showToastMessage(data?.message, "fail");
    }
  };

    //button
    const numBtnHandleClick = () => {
      setOtpStatus(true);
      if (mobileNumber.length !== 10) {
        setError("Mobile number should be 10 digits long");
      } 
      else if (!/^[6789]\d{9}$/.test(mobileNumber)) {
        setError("Mobile number should start with 6, 7, 8, or 9");
      } 
      else {
        onLogin({contact : mobileNumber});
    };

    setloginbtnstatus(false);
  }
    //Login
  
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    if (isNaN(inputValue)) 
        return false;
    setMobileNumber(inputValue); 
  };

  const isButtonDisabled = mobileNumber === "";


    let isOtpButtonDisabled=true;
    
    if(otp.every((digit) => digit !== ""))
    {

      isOtpButtonDisabled=false
    }else{
      isOtpButtonDisabled=true;
    }
    
    const otpBtnHandleClick = () => {
      console.log("Button Clicked by OTP");
    };
 

    const handleChange = (element, index) => {
        if (isNaN(element.value)) 
        return false;
        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };
    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !otp[index]) {
          if (index > 0) {
            const previousInput = e.target.previousSibling;
            if (e.target.previousSibling) {
              previousInput.focus();
            }
          }
        }
      };

return (
<div className="loginBlock container">
    <div className="row justify-content-center">
      <div className="col-4 align-self-center ">
        <div className="rightSideLoginContent">
      <h1 className="pgtitle">Welcome !</h1>
          <p className="pgsubtitle">Login to continue</p>
          <div className="inputwithlbl">
         <InputBoxLowerBarder
                title="Mobile Number"
              placeholder="Enter Mobile Number"
              type="text"
              id="mobile"
              value={mobileNumber}
              handleInputChange={handleInputChange}
              len={10}
              error={error}
            /> 
          </div>
{otpStatus? <>
 <div className="inputwithlbl">
         <OtpComp 
         title="Enter OTP"
         otp={otp}
         handleChange={handleChange}
         handleKeyDown={handleKeyDown}
         />    
          </div>
          <div >
          <div className="login-Warning"><p>OTP is valid for 5 minutes only</p>
          <div className="OTPWarning">
            <span 
            onClick={()=>{navigate("/")}}
            >Change Number</span> <span >Resend OTP</span></div>
          </div>
          </div>
          </> : null}
<div>       
            <p className="login-instruction">By proceeding, you are agreeing to Floatr’s <br/>
          <span>Terms & Conditions </span> & <span>Privacy Policy</span></p>
</div>


{loginbtnstatus ? 
          <Button
            btnLabel="Get OTP"
            rectangualar="false"
            btnClick={numBtnHandleClick}
            disable={!isButtonDisabled}
          /> :
          <Button
            btnLabel="Login"
            rectangualar="false"
            btnClick={otpBtnHandleClick}
            disable={!isOtpButtonDisabled}
          />
          }
      </div>
      </div>
      <div className="col-8 d-flex justify-content-center align-self-center">
      <div className="left-LoginPageBanner">
        <img src={LoginPageBanner} alt="LoginPageBanner" />
        </div>
      </div>
    </div>
    </div>
  )
}