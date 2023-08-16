import React, { useState } from "react";
import Steps from "../../components/Steps";
import hrline from "../../assets/pngs/steps/hrline.png";
import KycBank from "../../assets/pngs/KycBank.png";
import InputBox from "../../components/InputBox";
import Button from "../../components/Button";
import Dropdownwithborder from "../../components/Dropdownwithborder";
import DateComponents from "../../components/DateComponents";

export default function Bank() {
  const [Nominee, setNominee] = useState("");
  const [dropstatus, setdropstatus] = useState(false);
  const [selectedOption, setselectedOption] = useState("");

  const handleDropdown = (e) => {
    setdropstatus(!dropstatus);
  };
  const demoValueChange = (value) => {
    setselectedOption(value);
    console.log(value);
  };
  const dropDownObj = [
    { name: "Husband", state_id: "Husband" },
    { name: "Wife", state_id: "Wife" },
    { name: "Father", state_id: "Father" },
    { name: "Mother", state_id: "Mother" },
    { name: "Son", state_id: "Son" },
    { name: "Daughter", state_id: "Daughter" },
    { name: "Sister", state_id: "Sister" },
    { name: "Brother", state_id: "Brother" },
  ];

  const handleNomineeChange = (event) => {
    const inputValue = event.target.value;
    setNominee(inputValue);
  };

  const continueBtnClick = () => {
    console.log("ContinueBtnClick");
  };

  const [selectedDate, setSelectedDate] = useState("");
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

//   return (
//     <div className="loginBlock container ">
//       <div className="stepcontiner">
//         <Steps />
//       </div>
//       <div className="hrline">
//         <img src={hrline} alt="hrline" />
//       </div>
//       <div className="d-flex .flex-col">
//         <div className="onboading-left-content">
//           <img src={KycBank} alt="KycBank" />
//         </div>

//         <div className="contactDetails-right-content position-relative">
          // <p className="stateTitle">Nominee is My</p>
          // <Dropdownwithborder
          //   handleDropdown={handleDropdown}
          //   dropstatus={dropstatus}
          //   dropDownObj={dropDownObj}
          //   selectedOption={selectedOption}
          //   demoValueChange={demoValueChange}
          //   title="Select Nominee"
          // />

          // <InputBox
          //   title="Nominee Name"
          //   placeholder="Aditi Sharma"
          //   type="text"
          //   id="Nominee"
          //   handleInputChange={handleNomineeChange}
          //   value={Nominee}
          // />

          // <DateComponents
          //   title="Select Date"
          //   handleDateChange={handleDateChange}
          //   selectedDate={selectedDate}
          // />
          // <div className="kycobtn">
          //   <Button
          //     btnLabel="Continue"
          //     rectangualar="true"
          //     btnClick={continueBtnClick}
          //     disable="true"
          //   />
          // </div>
//         </div>
//       </div>
//     </div>
//   );
// }

return (
  <div className="container" >
          <div className="stepcontiner">
        <Steps />
      </div>
      <div className="hrline">
        <img src={hrline} alt="hrline" />
      </div>

      <div className="row" >
        <div className="col-md-5 col-sm-12 align-self-center" >
        <img src={KycBank} alt="KycBank" style={{width:'100%', height:'auto'}}/>            
        </div>
        <div className="col-md-2 col-sm-hidden">&nbsp;</div>
        <div className="col-md-5 col-sm-12 justify-content-center align-self-center">
        <p className="stateTitle">Nominee is My</p>
          <Dropdownwithborder
            handleDropdown={handleDropdown}
            dropstatus={dropstatus}
            dropDownObj={dropDownObj}
            selectedOption={selectedOption}
            demoValueChange={demoValueChange}
            title="Select Nominee"
          />

          <InputBox
            title="Nominee Name"
            placeholder="Aditi Sharma"
            type="text"
            id="Nominee"
            handleInputChange={handleNomineeChange}
            value={Nominee}
          />

          <DateComponents
            title="Select Date"
            handleDateChange={handleDateChange}
            selectedDate={selectedDate}
          />
          <div className="kycobtn">
            <Button
              btnLabel="Continue"
              rectangualar="true"
              btnClick={continueBtnClick}
              disable="true"
            />
          </div>
      </div>
      </div>
    </div>
  );
}
