import React, { useState } from 'react'
import NumberInput from '../Input/Number/NumberInput'
import PercentageSelector from '../Input/PercentageSelector/PercentageSelector';
import TotalTip from '../Output/TotalTip';


import './Splitter.css'

const Splitter = () => {

  const [values, setValues] = useState({
    bill: 0,
    people: 0,
    percentage: 0
  });

  const {bill, people, percentage} = values;

  const onInputChangeHandler = (e) =>{
    setValues({
      ...values,
      [e.target.name]: parseFloat(e.target.value)
    });
  };

  const onPercentageClickHandler = (e) => {
    e.preventDefault();
    let val = parseFloat(e.target.value.split("%")[0]);
    setValues({
      ...values,
      percentage: val
    });
  };
  
  const calcTipPerPerson = () => {
    if(isNaN(bill) || isNaN(people) || !isFinite(bill / parseInt(people))){
      return 0.00.toFixed(2);
    }
    return Math.round((((bill * percentage) / 100 / parseInt(people)) + Number.EPSILON) * 100) / 100;
  };
  
  const calcTotalPerPerson = () => {
    if(isNaN(bill) || isNaN(people) || !isFinite(bill / parseInt(people))){
      return 0.00.toFixed(2);
    }
    return Math.round((((bill / parseInt(people)) + calcTipPerPerson()) + Number.EPSILON) * 100) / 100;
  };
  

  return (
    <div className="splitter">
      <form id="form" className="form">
        <div>
          <NumberInput 
            id="bill" 
            src="./src/images/icon-dollar.svg" 
            imageAlt="bill" 
            label="Bill"
            onInputChangeHandler={onInputChangeHandler}
            value={bill}
          />

          <PercentageSelector
            label="Select Tip %"
            onClickHandler={onPercentageClickHandler}
          />

          <NumberInput 
            id="people" 
            src="./src/images/icon-person.svg" 
            imageAlt="people" 
            label="Number of People"
            onInputChangeHandler={onInputChangeHandler}
            value={people}
          />
        </div>
        <div className="total-tip">
          <TotalTip 
            tip={calcTipPerPerson()}
            total={calcTotalPerPerson()}
          />
        </div>
      </form>
    </div>
  )
}

export default Splitter
