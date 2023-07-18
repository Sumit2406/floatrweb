import React from 'react'
// import "../scss/components.scss"

export default function Button({btnLabel,rectangualar,btnClick}) {
  return (    
      <button className='btn' 
    style={rectangualar==="true" ? ({
      $backgroundColor: 'rgba(110, 121, 133, 0.60)',
      color: 'rgba(255, 255, 255, 0.60)',
      fontSize: '16px',
      width: '200px',
      height: '60px',
      lineHeight: '22px',
      letterSpacing:'3px'
    }) 
 : ({
  backgroundColor: 'rgba(110, 121, 133, 0.60)',
  color: 'rgba(255, 255, 255, 0.60)',
  fontSize: '16px',
  width: '200px',
  height: '60px',
  borderRadius: '20px',
  lineHeight: '22px',
  letterSpacing:'3px'

})}
      onClick={btnClick}
      >
        {btnLabel}
        </button>      
  );
}
