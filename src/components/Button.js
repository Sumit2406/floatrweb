import React from 'react'
// import "../scss/components.scss"

export default function Button({btnLabel,rectangualar,btnClick,disable}) {
  return (    
      <button className='btn' 
    style={rectangualar==="true" ? ({
      backgroundColor: disable ? '#43A2FF' : '#6E7985',
      color: disable ? 'rgba(255, 255, 255, 0.60)': '#FFFFFF',
      borderRadius: '0.5rem',      
      width: "100%",
      // height: '70px',
      letterSpacing:'3px',
lineHeight: '1.5',
fontSize: '18px',
fontFamily: 'ProximaBold'
    }) 
 : ({
  backgroundColor: disable ? '#43A2FF' :'#6E7985',
  color : disable? 'rgba(255, 255, 255, 0.60)' : '#FFFFFF',
  borderRadius: '0.5rem',      
      width: "100%",
      // height: '70px',
      letterSpacing:'3px',
lineHeight: '1.5',
fontSize: '18px',
fontFamily: 'ProximaBold'

})}
      onClick={btnClick}
      disabled= {disable ? false : true} 
      >
        {btnLabel}
        </button>      
  );
}
