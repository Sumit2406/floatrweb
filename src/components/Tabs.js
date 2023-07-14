import React, { useState } from "react";

const Tabs = ({ tabDataObj, defaultSelected, onTabSelect }) => {
  
  const [selectedValue, setSelectedValue] = useState(defaultSelected || "");
  console.log(defaultSelected);
  const handleTabClick = (value) => {
    setSelectedValue(value);
    if (onTabSelect) {
      onTabSelect(value);
    }
  };

  return (
    <div className="tabs-container">
      <ul className="tab-list">
        {tabDataObj.map((tab) => (
          <li
            key={tab.value}
            className={`tab-item ${tab.value === selectedValue ? "active" : ""}`}
            onClick={() => handleTabClick(tab.value)}
          >
            {tab.label}
          </li>
        ))}
      </ul>
      <div className="tab-content">
        {selectedValue &&
          tabDataObj.find((tab) => tab.value === selectedValue)?.content}
      </div>
    </div>
  );
};

export default Tabs;