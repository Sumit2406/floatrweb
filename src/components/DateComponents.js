import React, { useState } from "react";

export default function DateComponents(props) {

    const [selectedDate, setSelectedDate] = useState("");
  
    const handleDateChange = (event) => {
      setSelectedDate(event.target.value);
      if (props.onDateChange) {
        props.onDateChange(event.target.value);
      }
    };
    
  return (
    <div >
      <h2>{props.title}</h2>
      <input
        type="date"
        placeholder="Select"
        value={selectedDate}
        onChange={handleDateChange}
      />
      <p>Selected Date: {selectedDate}</p>
    </div>

  )
}