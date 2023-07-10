import React, {useState} from 'react'
// import "../scss/App.scss";
import Inputdemo from "../components/Inputdemo"
import image1 from "../assets/pngs/User1.png";
import image2 from "../assets/pngs/User2.png";
import ButtonDemo from '../components/ButtonDemo';
import CheckboxDemo from '../components/CheckboxDemo';
import TextArea from '../components/TextArea';
import SelectOptionDemo from '../components/SelectOptionDemo';
import FileUploader from '../components/FileUploader';
import DateComponents from '../components/DateComponents';
// import Tabs from '../components/Tabs';



export default function Home() {
    const [text, setText] = useState('');
  
    const handleChange = (e) => {
      setText(e.target.value);
    };
    const buttonStyle = {
      backgroundColor: 'blue',
      color: 'white',
      fontSize: '16px',
      borderRadius: '15px',
      width: '100px',
      height: '30px',
    };

    const handleClick = () => {
      console.log('Button clicked!');
    };

    // Form upload

    const [file, setFile] = useState();
    function uploadHandleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    // Date Component

    const handleDateChange = (date) => {    
      console.log("Selected date:", date);
    };


  return (
    <div>
      <h1>Home Page</h1>
      <div style={{width:'50%'}}>
      <Inputdemo
        title="UserName"
        placeholder="Enter username"
        prefix="₹"
        suffix="%"
        image1 ={image1}
        image2 ={image2}
        input-type="text"
      />
      <div>
<ButtonDemo txt="Submit" style={buttonStyle} onClick={handleClick}/>
</div>
<CheckboxDemo 
chk = {" Confirm you Employement Status"}/>
<SelectOptionDemo/>
<TextArea label="Write your feedabck here" value={text} onChange={handleChange} />

<FileUploader file1={file} uploadHandleChange={uploadHandleChange}/>
<DateComponents title="Select Date" onDateChange={handleDateChange}/>




    </div>
  </div>
  )
}
