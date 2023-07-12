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

export default function Home() {
  //text Input
const[textInput, setTextInput] =useState();
const handleInputChange=(e)=>{
  setTextInput(e.target.value);
  console.log(e.target.value);
  
}
  // Text Area
    const [text, setText] = useState('');
    const handleChange = (e) => {
      setText(e.target.value);
      console.log(e.target.value);
    };

    //Button click
    const buttonStyle = {
      backgroundColor: 'blue',
      color: 'white',
      fontSize: '16px',
      borderRadius: '15px',
      width: '100px',
      height: '30px',
      value: {textInput}
    };
    const handleClick = () => {
      console.log('Button clicked!');
    };

    // Form upload
    const fileHandler=(data)=>{
      console.log(data);
    }  
    // Date Component
    const [selectedDate, setSelectedDate] = useState("");
    const handleDateChange = (event) => {    
      setSelectedDate(event.target.value);
    };
    console.log("Selected date:", selectedDate);

    //Check box component

    const[isChecked, setIsChecked] =useState(false)
    const handleOnDivChange = () => {
      setIsChecked(!isChecked);
    };
console.log(isChecked);    

// Select Option
const [selectedOption, setSelectedOption] = useState('');
const options = [
  { value: 'option1-Value', label: 'Option 1' },
  { value: 'option2-Value', label: 'Option 2' },
  { value: 'option3-Value', label: 'Option 3' },
];
const selecthandleChange = (e) => {
  setSelectedOption(e.target.value);
  console.log(e.target.value)
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
        handleInputChange={handleInputChange}
        value={textInput}
      />
      <div>
<ButtonDemo txt="Submit" style={buttonStyle} onClick={handleClick}/>
</div>


<TextArea label="Write your feedabck here" value={text} onChange={handleChange} />


<DateComponents title="Select Date" handleDateChange={handleDateChange} selectedDate={selectedDate}/>


<CheckboxDemo handleOnDivChange={handleOnDivChange} isChecked={isChecked}/>

<FileUploader onPass={fileHandler}/>

<SelectOptionDemo selectedOption={selectedOption} options={options} selecthandleChange={selecthandleChange}/>
    </div>
  </div>
  )
}
