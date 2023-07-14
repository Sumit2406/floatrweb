import React from 'react'
import "../scss/components.scss"

export default function TextArea({ label, value, onChange }) {
  console.log(value);
  return (
<div className='TextAreaContainer'>
      <label className='TextAreaLabel'>{label}</label>
      <textarea
        value={value}
        onChange={onChange}
        />
    </div>
  )
}
