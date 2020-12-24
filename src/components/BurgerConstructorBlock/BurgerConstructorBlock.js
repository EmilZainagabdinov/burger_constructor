import React from 'react';
import './BurgerConstructorBlock.css';

const BurgerConstructorBlock = props => {
  return (
      <div className="ConstructorBlock">
        <h3 className="ConstructorBlockTitle">{props.title}</h3>
        <div className="ConstructorBox" >
          {props.children}
        </div>
      </div>
  );
};

export default BurgerConstructorBlock;