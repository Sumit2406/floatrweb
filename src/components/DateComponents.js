import React from "react";

export default function DateComponents({selectedDate,title, handleDateChange}) {
  return (
    <div >
      <h2>{title}</h2>
      <input
      className="dateclass"
        type="date"
        placeholder="Select"
        value={selectedDate}
        onChange={handleDateChange}
      />
    </div>

  )
}