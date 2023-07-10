import React from 'react'
// import "../scss/components.scss"

export default function ButtonDemo({txt,style,onClick}) {
  return (    
      <button className='btn' 
     style={style ? style : null}
      onClick={onClick}
      >
        {txt}
        </button>      
  );
}
