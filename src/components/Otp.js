import React, { useState } from "react";
import "../scss/App.scss";

export default function Otp() 
{
    const [otp, setOtp] = useState(new Array(4).fill(""));

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
            <div className="row">
                <p className="OtpTitle">Mobile Number Verification</p>
                <div className="col-12">
                    <div className="OTPDesign">
                    {otp.map((data, index) => {
                        return (
                            <input
                                className="otp-field"
                                type="text"
                                name="otp"
                                maxLength="1"
                                key={index}
                                value={data}
                                onChange={e => handleChange(e.target, index)}
                                onFocus={e => e.target.select()}
                                onKeyDown={(e) => handleKeyDown(e, index)}

                            />
                        );
                    })}
</div>
{/* <p className="login-instruction OTPWarning">OTP is valid for 5 minutes<span>Resend OTP</span></p> */}
                </div>
                
            </div>

    );
};

