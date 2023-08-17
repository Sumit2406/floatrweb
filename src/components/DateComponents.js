import React from "react";

export default function DateComponents({selectedDate,title, handleDateChange}) {
  return (
    <div >
      <p className="DateTitle">{title}</p>
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