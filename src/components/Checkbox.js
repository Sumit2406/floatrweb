import "../scss/components.scss"
import tick from  "../assets/pngs/tick.png";
import unTick from  "../assets/pngs/unTick.png";

import React from 'react';
export default function Checkbox({chkHableClick, isChecked}) {

  return (

<div className="chkBox" onClick={chkHableClick}>
{isChecked? <img src={tick} alt="clicked" /> : <img src={unTick} alt="clicked" />}
</div> 
  );
}