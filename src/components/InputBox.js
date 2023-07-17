import React from 'react';
// import "../scss/App.scss";
// import "../scss/components.scss";
const InputBox = ({ title, placeholder, prefix, suffix, image1, image2, inputType,value,handleInputChange }) => {

  return (
    <div className='txtinputblock'>
      <label>{title}</label>
      
      <div className='textinput'>
      {prefix && <span className="textinput_prefix ">{prefix}</span>}
      {image1 && 
          <span className="input-demo_image1 ">
            <img src={image1} alt="Left Icon" style={{ height: 20, width: 20}} />
          </span>
        }

      <input className='textinput_box' type={inputType}  placeholder={placeholder}
      value={value} onChange={handleInputChange}
      />

      {suffix && <span className="textinput_suffix ">{suffix}</span>}
      {image2 && 
          <span className="input-demo_image2 ">
            <img src={image2} alt="Right Icon" style={{ height: 20, width: 20 }} onChange={handleInputChange}/>
          </span>
        }
      </div>
      <p className='infomessage'>This is an important message</p>
      <p className='errormessage'>Hello Error</p>
    </div>
  );
};

export default InputBox;