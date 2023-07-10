import React, { useState } from "react";

const Tabs = ({ data, defaultSelected, onTabSelect }) => {
  const [selectedValue, setSelectedValue] = useState(defaultSelected || "");
  const handleTabClick = (value) => {
    setSelectedValue(value);
    if (onTabSelect) {
      onTabSelect(value);
    }
  };

  return (
    <div className="tabs-container">
      <ul className="tab-list">
        {data.map((tab) => (
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
          data.find((tab) => tab.value === selectedValue)?.content}
      </div>
    </div>
  );
};

export default Tabs;