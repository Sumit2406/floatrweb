import React from "react";
// import "../scss/App.scss";
import "../scss/components.scss";

export default function OtpComplowerborder({
  otp,
  handleChange,
  handleKeyDown,
  title,
  error,
  otpResend,
  otpxxnum
}) {
  return (
    <div className="row">
      <p className="OtpTitle">{title}</p>
      {otpxxnum && <p className="otpmsg">OTP received on {otpxxnum}</p>}
      <div className="col-12">
        <div className="OTPDesign">
          {otp.map((data, index) => {
            return (
              <input
                className="otp-field-lowerborder"
                type="text"
                name="otp"
                maxLength="1"
                key={index}
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select()}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            );
          })}
        </div>
        <div className="login-Warning">
          <div className="OTPWarning">
            {error ? (
              <p className="otpverifyerror">{error} </p>
            ) : (
              <p>OTP is valid for 5 minutes only</p>
            )}
            <div onClick={otpResend}>
              <span>Resend OTP</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
