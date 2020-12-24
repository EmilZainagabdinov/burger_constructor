import React from 'react';
import Ingredient from "../Ingredient/Ingredient";

const IngredientsList = props => {
  let ingrList = props.ingredientsCurrent.map(ingr => {

    const ingrInfo = props.ingredientsInfo.filter(ingredientInfoItem => {
      return ingredientInfoItem.name === ingr.name;
    });

    return (
        <Ingredient
            key={ingr.name}
            image={ingrInfo[0].image}
            name={ingr.name}
            count={ingr.count}
            addItem={() => props.changeIngrQty(ingr.name)}
            remove={() => props.removeIngr(ingr.name)}
        />);
  });

  return (
      <div className="IngredientsList">
        {ingrList}
      </div>
  );
};

export default IngredientsList;