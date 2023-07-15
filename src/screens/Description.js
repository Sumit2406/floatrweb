import React, { useState } from "react";
import InputComponent from "../components/InputComponent";
import image1 from "../assets/pngs/User1.png";
import image2 from "../assets/pngs/User2.png";
import Checkbox from "../components/Checkbox";
import RadioButtons from "../components/RadioButtons";
import Button from "../components/Button";
import FileUploader from "../components/FileUploader";
import DateComponents from "../components/DateComponents";
import TextArea from "../components/TextArea";
import Tabs from "../components/Tabs";
import "../scss/components.scss";
import Dropdown from "../components/Dropdown";

export default function Description() {
  //Tabs Component
  const tabDataObj = [
    { label: "Male", value: "M", content: <p>Content for Tab 1</p> },
    { label: "Female", value: "F", content: <p>Content for Tab 2</p> },
    { label: "Transgender", value: "T", content: <p>Content for Tab 3</p> },
  ];

  const handleTabSelect = (selectedValue) => {
    console.log("Selected value:", selectedValue);
  };

  //InputComponent Component
  const [textInput, setTextInput] = useState();
  const handleInputChange = (e) => {
    setTextInput(e.target.value);
    // console.log(e.target.value);
  };

  // Checkbox Component
  const [isChecked, setIsChecked] = useState(false);
  const chkHableClick = () => {
    setIsChecked(!isChecked);
  };
  // console.log(isChecked);

  //RadioButtons Component
  const [radioStatus, setradioStatus] = useState(2);
  const handleRadio = (value, setchk) => {
    setradioStatus(setchk);
    console.log("clicked by ", value);
  };
  const radioObj = [
    { value: "option1-Value", label: "option 1" },
    { value: "option2-Value", label: "option 2" },
    { value: "option3-Value", label: "option 3" },
  ];

  //Button Componet
  const buttonStyle = {
    backgroundColor: "blue",
    color: "white",
    fontSize: "16px",
    borderRadius: "15px",
    width: "100px",
    height: "30px",
    value: { textInput },
  };
  const btnHandleClick = () => {
    // console.log('Button clicked!');
  };

  //FileUploader Componet
  const uploadHandler = (data) => {
    // console.log(data);
  };

  //DateComponents Component
  const [selectedDate, setSelectedDate] = useState("");
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };
  // console.log("Selected date:", selectedDate);

  //TextArea Component
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
    // console.log(e.target.value);
  };

  //Dropdown Component
  const dropDownObj = [
    { value: "option1-Value", label: "Option 1" },
    { value: "option2-Value", label: "Option 2" },
    { value: "option3-Value", label: "Option 3" },
  ];

  const [dropstatus, setdropstatus] = useState(false);
  const [selectedOption, setselectedOption] = useState("");
  const handleDropdown = (e) => {
    setdropstatus(!dropstatus);
  };
  const demoValueChange = (value) => {
    // console.log(value ,"sumit")
    setselectedOption(value);
    console.log(value);
  };

  return (
    <div>
      <div className="pagetitle">
        <div className="contentblock">
          <h1> Component Description </h1>
        </div>
      </div>
      <div className="contentblock">
        <div className="compoblock">
          <h2>Input Component</h2>
          <div className="masterblock">
            <div className="leftblock">
              <ul>
                <li>This compone having icon on left and right</li>
                <li>This component having prefix and suffix like (₹, %)</li>
                <li>This component having Title and placeholder</li>
                <li>
                  we have to pass useState variable textInput and fucntion
                  handleInputChange() as props
                </li>
              </ul>
              <p className="subtitle">Props</p>
              <code>
                <ul>
                  <li>title-required</li>
                  <li>placeholder-required</li>
                  <li>prefix/suffix-Optional</li>
                  <li>left-icon/right-icon-optional</li>
                  <li>value(userState variable)-required</li>
                  <li>handleInputChange(fucntion)-required</li>
                  <li>textInput-required</li>
                </ul>
              </code>
              <p className="subtitle">Imports</p>
              <code>
                <p>import InputComponent from "../components/InputComponent"</p>
              </code>
            </div>
            <div className="rightblock">
              <p className="subtitle">Sample Output</p>
              <div>
                <InputComponent
                  title="UserName"
                  placeholder="Enter username"
                  prefix="₹"
                  suffix="%"
                  image1={image1}
                  image2={image2}
                  input-type="text"
                  handleInputChange={handleInputChange}
                  value={textInput || ''}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="compoblock">
       <h2>Checkbox Component</h2>
          <div className="masterblock">
            <div className="leftblock">
              <ul>
                                  <li>Created Custom Check box with the lelp of icons</li>
                <li>we need to import Checkbox icons for toggling</li>
                <li>
                  We have used useState variable isChecked for checkbox status
                </li>
                <li>
                  We have used fucntion handleOnDivChange() for image toggling
                  functionality
                </li>
  </ul>
              <p className="subtitle">Props</p>
              <code>
                <ul>
                         <li>handleOnDivChange - required</li>
                  <li>isChecked - required</li>

     </ul>
              </code>
              <p className="subtitle">Imports</p>
              <code>
                <p>import Checkbox from '../components/Checkbox'</p>
              </code>
            </div>
            <div className="rightblock">
              <p className="subtitle">Sample Output</p>
              <div>
              <Checkbox chkHableClick={chkHableClick} isChecked={isChecked} />
       </div>
            </div>
          </div>
        </div>

        <div className="compoblock">
        <h2>RadioButtons Component</h2>
          <div className="masterblock">
            <div className="leftblock">
              <ul>
                                 <li>
                  We have used Custom Radion button with the help of icons
                </li>
                <li>We have imported two radion icon for toggling</li>
                <li>
                  We need to pass useState variable radioStatus as proos for
                  radio status
                </li>
                <li>
                  We need to pass fucntion handleRadio() as props for image
                  toggling functionality
                </li>
                <li>
                  we need to pass arry of object "radioObj" as props to for
                  updating option values{" "}
                </li>
  </ul>
              <p className="subtitle">Props</p>
              <code>
                <ul>
       <li>radioObj - required</li>
                  <li>handleRadio - required</li>
                  <li>radioStatus - required</li>
     </ul>
              </code>
              <p className="subtitle">Imports</p>
              <code>
                <p>import RadioButtons from '../components/RadioButtons'</p>
              </code>
            </div>
            <div className="rightblock">
              <p className="subtitle">Sample Output</p>
              <div>
              <RadioButtons
                radioObj={radioObj}
                handleRadio={handleRadio}
                radioStatus={radioStatus}
              />
       </div>
            </div>
          </div>
        </div>

        <div className="compoblock">
          <h2>Button Component</h2>
          <div className="masterblock">
            <div className="leftblock">
              <ul>
                <li>
                  In button componet we have used props "txt" as button title,
                  "buttonStyle" as style and handleClick as as function and
                  passed all these as props{" "}
                </li>
              </ul>
              <p className="subtitle">Props</p>
              <code>
                <ul>
                  <li>btnLabel- required</li>
                  <li>buttonStyle - required</li>
                  <li>btnClick - required</li>
                </ul>
              </code>
              <p className="subtitle">Imports</p>
              <code>
                <p>import Button from '../components/Button'</p>
              </code>
            </div>
            <div className="rightblock">
              <p className="subtitle">Sample Output</p>
              <div>
                <Button
                  btnLabel="Submit"
                  btnStyle={buttonStyle}
                  btnClick={btnHandleClick}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="compoblock">
          <h2>FileUploader Component</h2>
          <div className="masterblock">
            <div className="leftblock">
              <ul>
                <li>
                  We have created custom file upload button with the help of
                  Icon, and uploadHandler funtion{" "}
                </li>
                <li>we need to pass uploadHandler() fucntion as props </li>
                <li>
                  In this component we have used use state to check the status
                  of uploaded image also used use ref to perform
                </li>
                <li>
                  In this componet we have used useref to update Dom directly{" "}
                </li>{" "}
              </ul>
              <p className="subtitle">Props</p>
              <code>
                <ul>
                  <li>uploadHandler - required</li>
                </ul>
              </code>
              <p className="subtitle">Imports</p>
              <code>
                <p>import FileUploader from '../components/FileUploader'</p>
              </code>
            </div>
            <div className="rightblock">
              <p className="subtitle">Sample Output</p>
              <div>
                {" "}
                <FileUploader uploadHandler={uploadHandler} />
              </div>
            </div>
          </div>
        </div>

        <div className="compoblock">
    <h2>DateComponents Components</h2>
          <div className="masterblock">
            <div className="leftblock">
              <ul>
<li>We have created Date component to select the date from user</li>
          <li>
            In this component we have used used useState variable selectedDate,
            handleDateChange() function for event handling
          </li>
          <li>
            In this componed we are passing title, selectedDate and function
            handleDateChange as props
          </li>
  </ul>
              <p className="subtitle">Props</p>
              <code>
                <ul>
       <li>title -required</li>
          <li>selectedDate - required</li>
          <li>handleDateChange - required </li>
                          </ul>
              </code>
              <p className="subtitle">Imports</p>
              <code>
                <p>import DateComponents from
            '../components/DateComponents'</p>
              </code>
            </div>
            <div className="rightblock">
              <p className="subtitle">Sample Output</p>
              <div>
          <DateComponents
            title="Select Date"
            handleDateChange={handleDateChange}
            selectedDate={selectedDate}
          />              </div>
            </div>
          </div>
        </div>

        <div className="compoblock">
    <h2>TextArea Component</h2>
          <div className="masterblock">
            <div className="leftblock">
              <ul>
<li>We need to pass label, value and onChange function as props</li>
          <li>
            This component is generally used to collect some short description
            from user
          </li>
          <li>
            In this component we are used useState variable as text and
            handleChange() for event handling{" "}
          </li>
  </ul>
              <p className="subtitle">Props</p>
              <code>
                <ul>
                 <li>Props Used- </li>
          <li>text - required</li>
          <li>handleChange() - required</li>
          <li>label - required</li>
                          </ul>
              </code>
              <p className="subtitle">Imports</p>
              <code>
                <p>import TextArea from '../components/TextArea'</p>
              </code>
            </div>
            <div className="rightblock">
              <p className="subtitle">Sample Output</p>
              <div>
          <TextArea
            label="Write your feedabck here"
            value={text}
            onChange={handleChange}
          />
         </div>
            </div>
          </div>
        </div>

        <div className="compoblock">
              <h2>Tabs Component</h2>
          <div className="masterblock">
            <div className="leftblock">
              <ul>
<li>
            we have created variable with tabsData which contain information as
            an array of object{" "}
          </li>
          <li>
            we need to pass tabsData, defaultSelected and handleTabSelect()
            function as props
          </li>
  </ul>
              <p className="subtitle">Props</p>
              <code>
                <ul>
<li>tabsData - required</li>
          <li>defaultSelected - required</li>
          <li>handleTabSelect - required</li>                          </ul>
              </code>
              <p className="subtitle">Imports</p>
              <code>
                <p>import Tabs from '../components/Tabs'</p>
              </code>
            </div>
            <div className="rightblock">
              <p className="subtitle">Sample Output</p>
              <div>
         <Tabs
            tabDataObj={tabDataObj}
            defaultSelected="2"
            handleTabSelect={handleTabSelect}
          />
         </div>
            </div>
          </div>
        </div>

        <div className="compoblock">
    <h2>Dropdown Component</h2>
          <div className="masterblock">
            <div className="leftblock">
              <ul>
 <li>
            In this componet we have created one div inside the div we have
            added paragraph along with image
          </li>
          <li>
            In this component we have used useState dropstatus to update the
            status initialy set to false
          </li>
          <li>we have created variable dropDownObj to store the data</li>
  </ul>
              <p className="subtitle">Props</p>
              <code>
                <ul>
<li>handleDropdown - required</li>
          <li>dropstatus - required</li>
          <li>dropDownObj - required</li>
          <li>selectedOption - required</li>
          <li>demoValueChange - required</li>      </ul>
              </code>
              <p className="subtitle">Imports</p>
              <code>
                <p>import Dropdown from "../components/Dropdown"</p>
              </code>
            </div>
            <div className="rightblock">
              <p className="subtitle">Sample Output</p>
              <div>
         <Dropdown
            handleDropdown={handleDropdown}
            dropstatus={dropstatus}
            dropDownObj={dropDownObj}
            selectedOption={selectedOption}
            demoValueChange={demoValueChange}
          />
         </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
