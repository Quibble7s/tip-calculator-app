import React, {useState } from 'react'
import Label from '../Label/Label';

import './NumberInput.css';

const NumberInput = ({id, src, imageAlt, label, onInputChangeHandler, value}) => {

  const [active, setActive] = useState("number-input");
  const onFocusHandler = () =>{
    setActive("number-input number-input--active");
  }
  const onLostFocusHandler = () => {
    setActive("number-input");
  }

  return (
    <div style={{marginTop: "10px"}}>
      <Label id={id} label={label}/>
      <div className={active}>
        <img className="number-input__image" src={src} alt={imageAlt} />
        <input 
          id={id}
          name={id}
          className="number-input__input"
          onFocus={onFocusHandler}
          onBlur={onLostFocusHandler}
          onChange={onInputChangeHandler} 
          value={value} 
          type="number"
        />
      </div>
    </div>
  )
}

export default NumberInput
