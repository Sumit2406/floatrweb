import React from 'react'
import "../scss/components.scss"


export default function ToggleButton({title,handleToggle,togglestatus}) 
{

  return (
    <div className="togglecontainer">
       <p className="login-instruction">{title}</p>
          <div className={togglestatus? 'toggle' : 'toggle-disable'} onClick={handleToggle}>
            <div className={togglestatus? 'toggle-circle' : 'toggle-circle-disable'} onClick={handleToggle}></div>

    </div>
    </div>
  )
}
