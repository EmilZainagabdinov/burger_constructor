import React from 'react';

const PriceCounter = props => {

  return (
      <div className="PriceCounter">
        <h4>Price: {props.price}</h4>
      </div>
  );
};

export default PriceCounter;