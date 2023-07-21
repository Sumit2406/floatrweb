import React from 'react'
// import "../scss/components.scss"

export default function Button({btnLabel,rectangualar,btnClick,disable}) {
  return (    
      <button className='btn' 
    style={rectangualar==="true" ? ({
      backgroundColor: disable ? '#43A2FF' : '#6E7985',
      color: disable ? 'rgba(255, 255, 255, 0.60)': '#FFFFFF',
      borderRadius: '15px',      
      width: "410px",
      height: '70px',
      letterSpacing:'0.16666666666666666em',
lineHeight: '22px',
fontWeight: 700,
fontSize: '24px',
display:'flex',
justifyContent:'center',
alignItems:'center'

    }) 
 : ({
  backgroundColor: disable ? '#43A2FF' :'#6E7985',
  color : disable? 'rgba(255, 255, 255, 0.60)' : '#FFFFFF',
  borderRadius: '15px',      
  width: "410px",
  letterSpacing:'0.16666666666666666em',
  height: '70px',
lineHeight: '22px',
fontWeight: 700,
fontSize: '24px',
display:'flex',
justifyContent:'center',
alignItems:'center'
})}
      onClick={btnClick}
      disabled= {disable ? false : true} 
      >
        {btnLabel}
        </button>      
  );
}
