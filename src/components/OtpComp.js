import React from "react";
// import "../scss/App.scss";
import "../scss/components.scss";

export default function OtpComp({otp, handleChange, handleKeyDown}) 
{
    
    return (
            <div className="row">
                <p className="OtpTitle">Enter OTP</p>
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
                </div>
                
            </div>

    );
};

