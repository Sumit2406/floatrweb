import React from 'react'
// import "../scss/components.scss"

export default function Button({btnLabel,rectangualar,btnClick,disable}) {
  return (    
      <button className='btn' 
    style={rectangualar==="true" ? ({
      backgroundColor: disable ? '#43A2FF' : '#6E7985',
      color: disable ? 'rgba(255, 255, 255, 0.60)': '#FFFFFF',
      fontSize: '24px',
      width: '300px',
      letterSpacing:'3px',
      height: '80px',
      lineHeight: '22px',
      borderRadius: '20px',
      fontWeight: '700'    
    }) 
 : ({
  backgroundColor: disable ? '#43A2FF' :'#6E7985',
  color : disable? 'rgba(255, 255, 255, 0.60)' : '#FFFFFF',
  fontSize: '24px',
  width: '300px',
  letterSpacing:'3px',
  height: '80px',
  lineHeight: '22px',
  borderRadius: '20px',
  fontWeight: '700'    

})}
      onClick={btnClick}
      disabled= {disable ? false : true} 
      >
        {btnLabel}
        </button>      
  );
}
