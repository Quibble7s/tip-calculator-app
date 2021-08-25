import React from 'react'

import './TotalTip.css'

const TotalTip = ({tip, total}) => {
  return (
    <>
      <div className="total">
        <div>
          <p className="total__header">Tip Amout</p>
          <p className="total__person">/ person</p>
        </div>
        <p className="total__total">{`\$${tip}`}</p>
      </div>
      <div className="total">
        <div>
          <p className="total__header">Total</p>
          <p className="total__person">/ person</p>
        </div>
        <p className="total__total">{`\$${total}`}</p>
      </div>
      <div className="total">
        <button className="total__button" type="reset">RESET</button>
      </div>
    </>
  )
}

export default TotalTip
