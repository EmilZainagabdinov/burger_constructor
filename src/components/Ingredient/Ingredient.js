import React from 'react';
import './Ingredient.css';

const Ingredient = props => {
  return (
      <div className="Ingredient">
        <div className="IngredientInfo">
          <img onClick={props.addItem} className="IngrImage" src={props.image} alt={props.name}/>
          <p className="IngrName">{props.name}</p>
        </div>
        <div className="IngredientQuantity">
          <p className="IngrCounter">{'x' + props.count}</p>
          <button onClick={props.remove} className="IngrRemove">&times;</button>
        </div>
      </div>
  );
};

export default Ingredient;