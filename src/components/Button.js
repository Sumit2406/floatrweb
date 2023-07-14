import React from 'react'
// import "../scss/components.scss"

export default function Button({btnLabel,btnStyle,btnClick}) {
  return (    
      <button className='btn' 
     style={btnStyle ? btnStyle : null}
      onClick={btnClick}
      >
        {btnLabel}
        </button>      
  );
}
