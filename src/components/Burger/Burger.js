import React from 'react';
import './Burger.css'

const Burger = props => {
  const burgerContents = [];

  for (let i = 0; i < props.contents.length; i++) {
    if (props.contents[i].count > 0) {
      for (let c = 0; c < props.contents[i].count; c++) {
        burgerContents.push(<div key={props.contents[i].name + c} className={props.contents[i].name}/>);
      }
    }
  }

  return (
      <div className="Burger">
        <div className="BreadTop">
          <div className="Seeds1" />
          <div className="Seeds2" />
        </div>
        {burgerContents}
        <div className="BreadBottom" />
      </div>
  );
};

export default Burger;