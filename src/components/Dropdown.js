import React from 'react'
import dowonIcon from "../assets/pngs/drop-down.png";
import upIcon from "../assets/pngs/drop-up.png";
import "../scss/components.scss"

export default function Dropdown({handleDropdown, dropval}) {
  return (
    <>
<div className='dropdown' onClick={handleDropdown}> 
<p>Dromp Down</p> {dropval ? <img src={dowonIcon} alt="dowonIcon" /> : <img src={upIcon} alt="upIcon" />} 

 </div>      
    </>
  )
}
