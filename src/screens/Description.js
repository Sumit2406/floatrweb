import React from 'react'
// import TextArea from '../components/TextArea'
// import FileUploader from '../components/FileUploader'
// import ButtonDemo from '../components/ButtonDemo'
// import RadioButtons from '../components/RadioButtons'
// import CheckboxDemo from '../components/CheckboxDemo'
// import Inputdemo from '../components/Inputdemo'
// import DateComponents from '../components/DateComponents'

export default function Description() {
  return (
    <div>
      <h1> Component Discription </h1>
      <div>
      <h3>Inputdemo Component</h3>
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
     <p>Link to import:- import Inputdemo from "../components/Inputdemo"</p> 
     <p>Demo:-</p>
      </div>
<div>
  <h3>CheckboxDemo Component</h3>
  <p>Created Custom Check box with the lelp of icons</p>
  <p>we need to import Checkbox icons for toggling</p>
  <p>We have used useState variable isChecked for checkbox status</p>
  <p>We have used fucntion handleOnDivChange() for image toggling functionality</p>
  <p>Props Used:-</p>
  <p>handleOnDivChange - required</p>
  <p>isChecked - required</p>
  <p>Link to import:- import CheckboxDemo from '../components/CheckboxDemo' </p> 
</div>

<div>
<h3>RadioButtons Component</h3>
  <p>We have used Custom Radion button with the help of icons</p>
  <p>We have imported two radion icon for toggling</p>
  <p>We need to pass useState variable checkd as proos for radio status</p>
  <p>We need to pass fucntion handleradio() as props for image toggling functionality</p>
  <p>we need to pass arry of object "radioDatas" as props to for updating option values </p>
  <p>Props Used:-</p>
  <p>radioDatas - required</p>  
  <p>handleradio - required</p>
  <p>checkd - required</p>
  <p>Link to import:- import RadioButtons from '../components/RadioButtons'</p>
</div>
<div>

  <h3>ButtonDemo Component</h3>
  <p> In button componet we have used props "txt" as button title, "buttonStyle" as style and handleClick as as function and passed all these as props </p>
  <p>Props Used:- </p>
  <p>txt- required</p>
  <p>buttonStyle - required</p>
  <p>handleClick - handleClick</p>
  <p>Link to import - import ButtonDemo from '../components/ButtonDemo' </p>
</div>

<div>
<h3>FileUploader Component</h3>
<p>We have created custom file upload button with the help of Icon, and fileHandler funtion </p>
<p>we need to pass fileHandler() fucntion as props </p>
<p>In this component we have used use state to check the status of uploaded image also used use ref to perform</p>
<p>In this componet we have used useref to update Dom directly </p>
<p>Link to import - import FileUploader from '../components/FileUploader'</p>
<p>Props Used :-</p>
<p>fileHandler - required </p>
<p>Link to import :- import FileUploader from '../components/FileUploader' </p>
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
</div>

<div>
  <h3>TextArea Component</h3>
  <p>We need to pass label, value and onChange function as props</p>
  <p>This component is generally used to collect some short description from user</p>
  <p>In this component we are used useState variable as text and handleChange() for event handling </p>
  <p>Props Used- </p>
  <p></p>
  <p></p>
  <p></p>
</div>


    </div>
  )
}
