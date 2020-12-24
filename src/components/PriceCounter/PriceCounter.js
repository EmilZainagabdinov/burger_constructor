import React from 'react';
import './PriceCounter.css'

const PriceCounter = props => {

  return (
      <div className="PriceCounter">
        <h4>Price: {props.price}</h4>
      </div>
  );
};

export default PriceCounter;