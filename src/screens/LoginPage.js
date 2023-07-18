import React, {useState} from 'react'
import Button from '../components/Button'
import InputBox from "../components/InputBox"
import imageWithLaptop from '../assets/pngs/imageWithLaptop.png';
import group1 from '../assets/pngs/group1.png';
import group2 from '../assets/pngs/group2.png';
import group3 from '../assets/pngs/group3.png';





export default function LoginPage() {
//button
    const btnHandleClick = () => {
        console.log('Button clicked!');
      };
//Login
      const [textInput, setTextInput] = useState();
      const handleInputChange = (e) => {
        setTextInput(e.target.value);
        // console.log(e.target.value);
      };

  return (
    <div className='login-main-container'>
    <div className='login-wrapper contentblock' >
      <div className="login-left-content"> 
<h1>Welcome !</h1>
<p>Login to continue</p>
<InputBox
 title="Mobile Number"
 placeholder="Enter Mobile Number"
 prefix="+91"
 input-type="text"
 handleInputChange={handleInputChange}
 value={textInput || ''}
                />
<Button btnLabel="Login" rectangualar="false" btnClick={btnHandleClick}/>
      </div>
      <div className="login-right-content">
      <img src={imageWithLaptop} alt="imageWithLaptop" />
      </div>
    </div>
          <div className='login-bottom-content'>
        <div className='bottom-icons'><img src={group1} alt="group1" /><span> Budget & Expense</span></div>
        <div className='bottom-icons'><img src={group2} alt="group2" /><span>Financial Goals</span> </div>
        <div className='bottom-icons'><img src={group3} alt="group3" /><span>Investments </span></div>
          </div>
          </div>
  )
}
