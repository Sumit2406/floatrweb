import React, {useState} from 'react'
import InputComponent from '../components/InputComponent'
import image1 from "../assets/pngs/User1.png";
import image2 from "../assets/pngs/User2.png";
import Checkbox from '../components/Checkbox'
import RadioButtons from '../components/RadioButtons'
import Button from '../components/Button'
import FileUploader from '../components/FileUploader'
import DateComponents from '../components/DateComponents';
import TextArea from '../components/TextArea'
import Tabs from '../components/Tabs'
import "../scss/components.scss"
import Dropdown from '../components/Dropdown';


export default function Description() {

  //Tabs Component
    const tabsData = [
    { label: "Male", value: "M", content: <p>Content for Tab 1</p> },
    { label: "Female", value: "F", content: <p>Content for Tab 2</p> },
    { label: "Transgender", value: "T", content: <p>Content for Tab 3</p> },
  ];

  const handleTabSelect = (selectedValue) => {
    console.log("Selected value:", selectedValue);
  };

//InputComponent Component
const[textInput, setTextInput] =useState();
const handleInputChange=(e)=>{
  setTextInput(e.target.value);
  // console.log(e.target.value);  
}

// Checkbox Component
const[isChecked, setIsChecked] =useState(false)
const chkHableClick = () => {
  setIsChecked(!isChecked);
};
// console.log(isChecked);    

//RadioButtons Component
const [radioStatus, setradioStatus] = useState(2);
const handleradio =((value, setchk)=> {
  setradioStatus(setchk);
  console.log("clicked by ", value);
})
const radioObj = [{ value: 'option1-Value', label: 'option 1' }, { value: 'option2-Value', label: 'option 2' }, { value: 'option3-Value', label: 'option 3' }]

//Button Componet
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


//FileUploader Componet
const uploadHandler=(data)=>{
  // console.log(data);
}  

//DateComponents Component
const [selectedDate, setSelectedDate] = useState("");
const handleDateChange = (event) => {    
  setSelectedDate(event.target.value);
};
// console.log("Selected date:", selectedDate);

//TextArea Component
const [text, setText] = useState('');
const handleChange = (e) => {
  setText(e.target.value);
  // console.log(e.target.value);
};

//Dropdown Component
const dropDownObj = [
  { value: 'option1-Value', label: 'Option 1' },
  { value: 'option2-Value', label: 'Option 2' },
  { value: 'option3-Value', label: 'Option 3' },
];

const [dropstatus, setdropstatus] =useState(false);
const [selectedOption, setselectedOption] = useState('');
const handleDropdown =(e)=>{
    setdropstatus(!dropstatus);
  }
const demoValueChange = (value) => {
  // console.log(value ,"sumit")
  setselectedOption(value);
  console.log(value)
}; 



  return (
    <div>
      <h1> Component Description </h1>
      <div>
      <h3>InputComponent Component</h3>
      <p>This compone having icon on left and right</p>
      <p>This component having prefix and suffix like (₹, %)</p>
      <p>This component having Title and placeholder</p>
      <p>we have to pass useState variable textInput and fucntion handleInputChange() as props</p>
      <p>Props:- </p>
      <p>title-required</p>
      <p>placeholder-required</p>
      <p>prefix/suffix-Optional</p>
      <p>left-icon/right-icon-optional</p>
      <p>value(userState variable)-required</p>
      <p>handleInputChange(fucntion)-required</p>
      <p>textInput-required</p>
     <p>Link to import:- import InputComponent from "../components/InputComponent"</p> 
     <h4>Demo:-</h4>
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
      </div>

      
<div>
  <h3>Checkbox Component</h3>
  <p>Created Custom Check box with the lelp of icons</p>
  <p>we need to import Checkbox icons for toggling</p>
  <p>We have used useState variable isChecked for checkbox status</p>
  <p>We have used fucntion handleOnDivChange() for image toggling functionality</p>
  <p>Props Used:-</p>
  <p>handleOnDivChange - required</p>
  <p>isChecked - required</p>
  <p>Link to import:- import Checkbox from '../components/Checkbox' </p> 
  <p>Demo:-</p>
  <Checkbox chkHableClick={chkHableClick} isChecked={isChecked}/>
</div>

<div>
<h3>RadioButtons Component</h3>
  <p>We have used Custom Radion button with the help of icons</p>
  <p>We have imported two radion icon for toggling</p>
  <p>We need to pass useState variable radioStatus as proos for radio status</p>
  <p>We need to pass fucntion handleradio() as props for image toggling functionality</p>
  <p>we need to pass arry of object "radioObj" as props to for updating option values </p>
  <p>Props Used:-</p>
  <p>radioObj - required</p>  
  <p>handleradio - required</p>
  <p>radioStatus - required</p>
  <p>Link to import:- import RadioButtons from '../components/RadioButtons'</p>
  <p>Demo:-</p>
  <RadioButtons radioObj={radioObj} handleradio={handleradio} radioStatus={radioStatus}/>
</div>
<div>

  <h3>Button Component</h3>
  <p> In button componet we have used props "txt" as button title, "buttonStyle" as style and handleClick as as function and passed all these as props </p>
  <p>Props Used:- </p>
  <p>btnLabel- required</p>
  <p>buttonStyle - required</p>
  <p>btnClick - required</p>
  <p>Link to import - import Button from '../components/Button' </p>
  <p>Demo:-</p>
  <Button btnLabel="Submit" btnStyle={buttonStyle} btnClick={btnHandleClick}/>
</div>

<div>
<h3>FileUploader Component</h3>
<p>We have created custom file upload button with the help of Icon, and uploadHandler funtion </p>
<p>we need to pass uploadHandler() fucntion as props </p>
<p>In this component we have used use state to check the status of uploaded image also used use ref to perform</p>
<p>In this componet we have used useref to update Dom directly </p>
<p>Link to import - import FileUploader from '../components/FileUploader'</p>
<p>Props Used :-</p>
<p>uploadHandler - required </p>
<p>Link to import :- import FileUploader from '../components/FileUploader' </p>
<p>Demo:-</p>
<FileUploader uploadHandler={uploadHandler}/>
</div>

<div>
  <h3>DateComponents Components</h3> 
  <p>We have created Date component to select the date from user</p>
  <p>In this component we have used used useState variable selectedDate, handleDateChange() function for event handling</p>
  <p>In this componed we are passing title, selectedDate and function handleDateChange as props</p>
  <p>Props Used- </p>
  <p>title -required</p>
  <p>selectedDate - required</p>
  <p>handleDateChange - required </p>
  <p>Link to import :- import DateComponents from '../components/DateComponents'</p>
  <p>Demo:-</p>
  <DateComponents title="Select Date" handleDateChange={handleDateChange} selectedDate={selectedDate}/>

</div>

<div>
  <h3>TextArea Component</h3>
  <p>We need to pass label, value and onChange function as props</p>
  <p>This component is generally used to collect some short description from user</p>
  <p>In this component we are used useState variable as text and handleChange() for event handling </p>
  <p>Props Used- </p>
  <p>text - required</p>
  <p>handleChange() - required</p>
  <p>label - required</p>
  <p>Link to import :- import TextArea from '../components/TextArea' </p>
  <p>Demo:-</p>
  <TextArea label="Write your feedabck here" value={text} onChange={handleChange} />
</div>

<div>
<h3>Tabs Component</h3>
<p>we have created variable with tabsData which contain information as an array of object </p>
<p>we need to pass tabsData, defaultSelected and onTabSelect() function as props</p>
<p>Props Used</p>
<p>tabsData - required</p>
<p>defaultSelected - required</p>
<p>onTabSelect - required</p>
<p>Link need to import :- import Tabs from '../components/Tabs' </p>
<h4>Demo:-</h4>
<Tabs
        data={tabsData}
        defaultSelected="2"
        onTabSelect={handleTabSelect}
      />
</div>
<div>
  <h3>Dropdown Component</h3>
  <p>In this componet we have created one div inside the div we have added paragraph along with image</p>
  <p>In this component we have used useState dropstatus to update the status initialy set to false</p>
  <p>we have created variable dropDownObj to store the data</p>
  <p>dropDownObj </p>
  <p>Props Used :-</p>
  <p>handleDropdown - required</p>
  <p>dropstatus - required</p>
  <p>dropDownObj - required</p>
  <p>selectedOption - required</p>
  <p>demoValueChange - required</p>
<h4>Demo:- </h4>
<Dropdown handleDropdown={handleDropdown} dropstatus={dropstatus} dropDownObj={dropDownObj} 
selectedOption={selectedOption}
demoValueChange={demoValueChange} />

</div>

    </div>
  )
}