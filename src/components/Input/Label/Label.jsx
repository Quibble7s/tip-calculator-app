import React from 'react'

const Label = ({id, label}) => {
  return (
      <label htmlFor={id} className="label">{label}</label>
  )
}

export default Label
