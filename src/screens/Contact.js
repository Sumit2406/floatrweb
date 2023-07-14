import React from 'react'
import InputComponent from "../components/InputComponent"
import image1 from "../assets/pngs/User1.png";
import image2 from "../assets/pngs/User2.png";

export default function Contact() {
  return (
    <div style={{width:'50%'}}>
      <h1>Contact Page </h1>
      <InputComponent
        title="UserName"
        placeholder="Enter Contact number"
        prefix="₹"
        suffix="%"
        image1 ={image1}
        image2 ={image2}
        inputType= "number"
      />
    </div>
  )
}
