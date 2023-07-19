import React, {useState} from 'react'
import Button from '../components/Button'
import InputBox from "../components/InputBox"
import imageWithLaptop from '../assets/pngs/imageWithLaptop.png';
import group1 from '../assets/pngs/group1.png';
import group2 from '../assets/pngs/group2.png';
import group3 from '../assets/pngs/group3.png';
import "../scss/components.scss"

export default function LoginPage() {
//button
    const btnHandleClick = () => {
        console.log('Mobile number submitted:', mobileNumber);
      };
//Login
      const [mobileNumber, setMobileNumber] = useState('');
      const [isButtonDisabled, setIsButtonDisabled] = useState(true);
      const handleInputChange = (event) => {
        if (isNaN(event.target.value)) {
          event.target.value= "";
        }
        const inputMobileNumber = event.target.value;
        
    setMobileNumber(inputMobileNumber);
    const mobilePattern = /^(\+?91|0)?[6789]\d{9}$/;
    setIsButtonDisabled(!mobilePattern.test(inputMobileNumber));
    
      };
// console.log(isButtonDisabled,"Sumit");

  return (
    <div className='container'>
    <div className='row' >
      <div className="col-4"> 
<h1 className='pgtitle'>Welcome !</h1>
<p className='pgsubtitle'>Login to continue</p>
<div className='inputwithlbl'>
<InputBox
 title="Mobile Number"
 placeholder="Enter Mobile Number"
type="text"
id="mobile"
value={mobileNumber}
handleInputChange={handleInputChange}
                />
 </div>
<Button btnLabel="Login" rectangualar="false" btnClick={btnHandleClick} disable={!isButtonDisabled}/>
      </div>
      <div className="col-8 position-relative"><div className="logobanner">
      <img src={imageWithLaptop} alt="imageWithLaptop" /></div>
      </div>
    </div>
          <div className='login-bottom-content'>
        <div className='bottom-icons'>
         <div className='bottomImageIcon'><img src={group1} alt="group1" /></div> 
         <span> Budget & Expense</span></div>
        <div className='bottom-icons'>
        <div className='bottomImageIcon'><img src={group2} alt="group2" /></div>
        <span>Financial Goals</span> </div>
        <div className='bottom-icons'>
        <div className='bottomImageIcon'><img src={group3} alt="group3" /></div>
        <span>Investments </span></div>
      </div></div>  
  )
}
