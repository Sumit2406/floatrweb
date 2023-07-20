import React from 'react'
// import "../scss/components.scss"

export default function Button({btnLabel,rectangualar,btnClick,disable}) {
  return (    
      <button className='btn' 
    style={rectangualar==="true" ? ({
      backgroundColor: disable ? '#43A2FF' : '#6E7985',
      color: disable ? 'rgba(255, 255, 255, 0.60)': '#FFFFFF',
      fontSize: '1em',
      width: '200px',
      letterSpacing:'3px',
      height: '60px',
      lineHeight: '22px',
      borderRadius: '10px',      
      
    }) 
 : ({
  backgroundColor: disable ? '#43A2FF' :'#6E7985',
  color : disable? 'rgba(255, 255, 255, 0.60)' : '#FFFFFF',
  fontSize: '1em',
  width: '200px',
  letterSpacing:'3px',
  height: '60px',
  lineHeight: '22px',
  borderRadius: '10px',
  

})}
      onClick={btnClick}
      disabled= {disable ? false : true} 
      >
        {btnLabel}
        </button>      
  );
}
