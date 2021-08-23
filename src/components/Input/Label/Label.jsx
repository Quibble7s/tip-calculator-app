import React from 'react'

import './Label.css'

const Label = ({id, label}) => {
  return (
      <label htmlFor={id} className="label">{label}</label>
  )
}

export default Label
