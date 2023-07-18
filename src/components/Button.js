import React from 'react'
// import "../scss/components.scss"

export default function Button({btnLabel,rectangualar,btnClick}) {
  return (    
      <button className='btn' 
    style={rectangualar==="true" ? ({
      backgroundColor: '#6f6fb5',
      color: 'white',
      fontSize: '16px',
      width: '295px',
      height: '80px',
      lineHeight: '22px',
      letterSpacing:'3px'
    }) 
 : ({
  backgroundColor: '#6f6fb5',
  color: 'white',
  fontSize: '16px',
  width: '295px',
  height: '80px',
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
