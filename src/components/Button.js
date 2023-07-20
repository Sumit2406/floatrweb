import React from 'react'
// import "../scss/components.scss"

export default function Button({btnLabel,rectangualar,btnClick,disable}) {
  return (    
      <button className='btn' 
    style={rectangualar==="true" ? ({
      backgroundColor: disable ? '#43A2FF' : '#6E7985',
      color: disable ? 'rgba(255, 255, 255, 0.60)': '#FFFFFF',
      fontSize: '1em',
      width: '11.11111111111111em',
      letterSpacing:'0.16666666666666666em',
      height: '3.3333333333333335em',
      lineHeight: '1.2222222222222223em',
      borderRadius: '0.5555555555555556em',      
      
    }) 
 : ({
  backgroundColor: disable ? '#43A2FF' :'#6E7985',
  color : disable? 'rgba(255, 255, 255, 0.60)' : '#FFFFFF',
  fontSize: '1em',
  width: '11.11111111111111em',
  letterSpacing:'0.16666666666666666em',
  height: '3.3333333333333335em',
  lineHeight: '1.2222222222222223em',
  borderRadius: '0.5555555555555556em',
  

})}
      onClick={btnClick}
      disabled= {disable ? false : true} 
      >
        {btnLabel}
        </button>      
  );
}
