import React, { useEffect, useState } from 'react'
import Label from '../Label/Label';

import './NumberInput.css';

const NumberInput = ({id, src, imageAlt, label, onInputChangeHandler, value}) => {

  const [active, setActive] = useState(false);

  const onFocusHandler = () =>{
    setActive(!active);
  }

  return (
    <div style={{marginTop: "10px"}}>
      <Label id={id} label={label}/>
      <div className="number-input">
        <img className="number-input__image" src={src} alt={imageAlt} />
        <input 
          id={id}
          name={id}
          className="number-input__input"
          onFocus={onFocusHandler}
          onChange={onInputChangeHandler} 
          value={value} 
          type="number"
        />
      </div>
    </div>
  )
}

export default NumberInput
