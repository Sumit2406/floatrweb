import React from 'react'
import "../scss/components.scss"

export default function Button({btnLabel,rectangualar,btnClick,disable}) {
  return (    
      <button className={`button1 ${rectangualar==="true" ?
      (disable ? "disable-recatngular1" : "enable-recatngular1") : 
      ((disable ? "disable-Circular1" : "enable-Circular1")) 
      }`}
      onClick={btnClick}
      disabled= {disable ? false : true} 
      >
        {btnLabel}
        </button>      
  );
}
