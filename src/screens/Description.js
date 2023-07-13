import React from 'react'

export default function Description() {
  return (
    <div>
      <h1> Component Discription </h1>
      <div>
      <h3>Input Box</h3>
      <p>This compone having icon on left and right</p>
      <p>This component having prefix and suffix like (₹, %)</p>
      <p>This component having Title and placeholder</p>
      <p>we have to pass useState variable textInput and fucntion handleInputChange() as props</p>
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
  <h3>Checkbox</h3>
  <p>Created Custom Check box with the lelp of icons</p>
  <p>we need to import Checkbox icons for toggling</p>
  <p>We have used useState variable isChecked for checkbox status</p>
  <p>We have used fucntion handleOnDivChange() for image toggling functionality</p>
  <p>Link to import:- import CheckboxDemo from '../components/CheckboxDemo' </p> 
</div>

<div>
<h3>Radio Button</h3>
  <p>We have used Custom Radion button with the help of icons</p>
  <p>We have imported two radion icon for toggling</p>
  <p>We need to pass useState variable checkd as proos for radio status</p>
  <p>We need to pass fucntion handleradio() as props for image toggling functionality</p>
  <p>we need to pass arry of object "radioDatas" as props to for updating option values </p>  
  <p>Link to import:- import RadioButtons from '../components/RadioButtons'</p>
</div>
<div>
  <h3>Button</h3>
  <p> In button componet we have used props "txt" as button title, "buttonStyle" as style and handleClick as as function and passed all these as props </p>
  <p>txt- required</p>
  <p>buttonStyle - required</p>
  <p>handleClick - handleClick</p>
  <p>Link to import - import ButtonDemo from '../components/ButtonDemo' </p>
</div>

    </div>
  )
}
