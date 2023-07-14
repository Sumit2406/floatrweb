import React, {useState} from 'react'
import "../scss/App.scss";
import InputComponent from '../components/InputComponent';
import image1 from "../assets/pngs/User1.png";
import image2 from "../assets/pngs/User2.png";
import Button from '../components/Button';
import CheckboxDemo from '../components/CheckboxDemo';
import TextArea from '../components/TextArea';
import SelectOptionDemo from '../components/SelectOptionDemo';
import FileUploader from '../components/FileUploader';
import DateComponents from '../components/DateComponents';
import Dropdown from '../components/Dropdown';
import RadioButtons from '../components/RadioButtons';

export default function Home() {

  //Radio Buttons
const [checkd, setcheckd] = useState(2);
const handleradio =((value, setchk)=> {
  setcheckd(setchk);
  console.log("clicked by ", value);
})
const radioDatas = [{ value: 'option1-Value', label: 'option 1' }, { value: 'option2-Value', label: 'option 2' }, { value: 'option3-Value', label: 'option 3' }]

  //Dromp Down
const DDoptions = [
  { value: 'option1-Value', label: 'Option 1' },
  { value: 'option2-Value', label: 'Option 2' },
  { value: 'option3-Value', label: 'Option 3' },
];

const [dropstatus, setdropstatus] =useState(false);
const [selectedDemo, setselectedDemo] = useState('');
const handleDropdown =(e)=>{
    setdropstatus(!dropstatus);
  }

const demoValueChange = (value) => {
  // console.log(value ,"sumit")
  setselectedDemo(value);
  console.log(value)
}; 


  //text Input
const[textInput, setTextInput] =useState();
const handleInputChange=(e)=>{
  setTextInput(e.target.value);
  // console.log(e.target.value);
  
}
  // Text Area
    const [text, setText] = useState('');
    const handleChange = (e) => {
      setText(e.target.value);
      // console.log(e.target.value);
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
    const btnHandleClick = () => {
      // console.log('Button clicked!');
    };

    // Form upload
    const fileHandler=(data)=>{
      // console.log(data);
    }  
    // Date Component
    const [selectedDate, setSelectedDate] = useState("");
    const handleDateChange = (event) => {    
      setSelectedDate(event.target.value);
    };
    // console.log("Selected date:", selectedDate);

    //Check box component

    const[isChecked, setIsChecked] =useState(false)
    const handleOnDivChange = () => {
      setIsChecked(!isChecked);
    };
// console.log(isChecked);    

// Select Option
const [selectedOption, setSelectedOption] = useState('');
const options = [
  { value: 'option1-Value', label: 'Option 1' },
  { value: 'option2-Value', label: 'Option 2' },
  { value: 'option3-Value', label: 'Option 3' },
];
const selecthandleChange = (e) => {
  setSelectedOption(e.target.value);
};

// console.log(selectedOption);

  return (
    <div>
      <h1>Home Page</h1>
      <div style={{width:'50%'}}>
      <InputComponent
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
          </div>
      <div>
      <Dropdown handleDropdown={handleDropdown} dropstatus={dropstatus} DDoptions={DDoptions} 
selectedDemo={selectedDemo}
demoValueChange={demoValueChange} />

<Button btnLabel="Submit" btnStyle={buttonStyle} btnClick={btnHandleClick}/>
</div>

<TextArea label="Write your feedabck here" value={text} onChange={handleChange} />


<DateComponents title="Select Date" handleDateChange={handleDateChange} selectedDate={selectedDate}/>


<CheckboxDemo handleOnDivChange={handleOnDivChange} isChecked={isChecked}/>

<FileUploader onPass={fileHandler}/>

<SelectOptionDemo selectedOption={selectedOption} options={options} selecthandleChange={selecthandleChange}/>
<RadioButtons radioDatas={radioDatas} handleradio={handleradio} checkd={checkd}/>
{/* radioStatus={radioStatus} RadioHandle={RadioHandle}  */}

  </div>
  )
}

