import React, {useState} from 'react'
import Button from '../components/Button'
import InputBox from "../components/InputBox"
import imageWithLaptop from '../assets/pngs/imageWithLaptop.png';

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
      <img src={imageWithLaptop} alt="Logo Dark 2" />
      </div>
    </div>
  )
}
