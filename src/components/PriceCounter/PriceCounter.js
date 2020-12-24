import React from 'react';

const PriceCounter = props => {

  return (
      <div className="PriceCounter">
        <p>Price: {props.price}</p>
      </div>
  );
};

export default PriceCounter;