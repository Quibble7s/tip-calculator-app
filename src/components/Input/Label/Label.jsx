import React from 'react'

import './Label.css'

const Label = ({id, label}) => {
  return (
    <div className="label-component">
      <label htmlFor={id} className="label-component__label">{label}</label>
    </div>
  )
}

export default Label
