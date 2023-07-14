import React from 'react'
import InputComponent from "../components/InputComponent"
import leftIcon from "../assets/pngs/User1.png";
import rightIcon from "../assets/pngs/User2.png";

export default function Contact() {
  return (
    <div style={{width:'50%'}}>
      <h1>Contact Page </h1>
      <InputComponent
        title="UserName"
        placeholder="Enter Contact number"
        prefix="₹"
        suffix="%"
        leftIcon ={leftIcon}
        rightIcon ={rightIcon}
        inputType= "number"
      />
    </div>
  )
}
