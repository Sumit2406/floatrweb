
import React from 'react'
import Tabs from '../components/Tabs'
import "../scss/components.scss"

export default function Products() {
  const tabDataObj = [
    { label: "Male", value: "M", content: <p>Content for Tab 1</p> },
    { label: "Female", value: "F", content: <p>Content for Tab 2</p> },
    { label: "Transgender", value: "T", content: <p>Content for Tab 3</p> },
  ];

  const handleTabSelect = (selectedValue) => {
    console.log("Selected value:", selectedValue);
  };
  
  return (
    <div className="tab-container">
      <h1>Product page</h1>
      <Tabs
        tabDataObj={tabDataObj}
        defaultSelected="2"
        handleTabSelect={handleTabSelect}
      />
    </div>
  )
}
