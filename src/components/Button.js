import React from 'react'
// import "../scss/components.scss"

export default function Button({btnLabel,rectangualar,btnClick}) {
  return (    
      <button className='btn' 
    style={rectangualar==="true" ? ({
      backgroundColor: 'blue',
      color: 'white',
      fontSize: '16px',
      width: '100px',
      height: '35px',
    }) 
 : ({
  backgroundColor: 'blue',
  color: 'white',
  fontSize: '16px',
  width: '100px',
  height: '35px',
  borderRadius: '15px',
})}
      onClick={btnClick}
      >
        {btnLabel}
        </button>      
  );
}
