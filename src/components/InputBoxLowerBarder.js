import React from 'react';

const InputBoxLowerBarder = ({ title, placeholder, prefix, suffix, image1, image2, value, info, error, handleInputChange,
  type, len,readOnly }) => {
  return (
    <div className='txtinputblock'>
      {title && <label >{title} </label>}
      <div className='textinputlowerborder'>
      {prefix && <span className="textinput_prefix ">{prefix}</span>}
      {image1 && 
          <span className="input-demo_image1 "> 
            <img src={image1} alt="Left Icon" style={{ height: 20, width: 20}} />
          </span>
        }
      <input className='textinput_box' type={type}  placeholder={placeholder}
      value={value} onChange={handleInputChange} maxLength={len} readOnly={readOnly}
      />

      {suffix && <span className="textinput_suffix ">{suffix}</span>}
      {image2 && 
          <span className="input-demo_image2 ">
            <img src={image2} alt="Right Icon" style={{ height: 20, width: 20 }} onChange={handleInputChange}/>
          </span>
        }
      </div>
      {info && !error && <span className='infomessage'>This is an important message</span>}
      <span className='errormessage'>{error}</span>
    </div>
  );
};

export default InputBoxLowerBarder;