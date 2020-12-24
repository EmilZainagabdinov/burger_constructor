import React, {useState} from "react";
import BurgerConstructorBlock from "../components/BurgerConstructorBlock/BurgerConstructorBlock";
import IngredientsList from "../components/IngredientsList/IngredientsList";
import Burger from "../components/Burger/Burger";
import PriceCounter from "../components/PriceCounter/PriceCounter";
import saladImage from '../assets/salad.jpg';
import cheeseImage from '../assets/cheese.jpg';
import meatImage from '../assets/meat.jpg';
import baconImage from '../assets/bacon.jpg';
import './App.css';

const App = () => {
  const INGREDIENTS = [
    {name: 'Salad', price: 5, image: saladImage},
    {name: 'Cheese', price: 20, image: cheeseImage},
    {name: 'Meat', price: 50, image: meatImage},
    {name: 'Bacon', price: 30, image: baconImage},
  ];

  const [ingredients, setIngredients] = useState([
      {name: 'Salad', count: 0},
      {name: 'Cheese', count: 0},
      {name: 'Meat', count: 0},
      {name: 'Bacon', count: 0},
  ]);

  const [totalPrice, setTotalPrice] = useState(20);

  const changeIngredientQty = name => {
    const index = ingredients.findIndex(item => item.name === name);
    const ingredientItemCopy = {...ingredients[index]};
    ingredientItemCopy.count++;

    const ingredientsCopy = [...ingredients];
    ingredientsCopy[index] = ingredientItemCopy;

    setIngredients(ingredientsCopy);
    countTotal('add' ,INGREDIENTS, ingredientItemCopy);
  };

  const removeIngredient = name => {
    const index = ingredients.findIndex(item => item.name === name);
    const ingredientItemCopy = {...ingredients[index]};

    countTotal('remove' ,INGREDIENTS, ingredientItemCopy);
    ingredientItemCopy.count = 0;

    const ingredientsCopy = [...ingredients];
    ingredientsCopy[index] = ingredientItemCopy;

    setIngredients(ingredientsCopy);
  };

  const countTotal = (action, ingredientsInfo, ingredientCurrent) => {
    const targetIngredient = ingredientsInfo.filter(ingredientItem => {
      return ingredientItem.name === ingredientCurrent.name;
    });

    let price;
    if (action === 'add') {
      price = totalPrice + targetIngredient[0].price;
    } else if (action === 'remove') {
      price = totalPrice - targetIngredient[0].price * ingredientCurrent.count;
    }

    setTotalPrice(price);
  };

  return (
      <div className="App">
        <BurgerConstructorBlock title="Ingredients">
          <IngredientsList
              ingredientsInfo={INGREDIENTS}
              ingredientsCurrent={ingredients}
              total={totalPrice}
              changeIngrQty={changeIngredientQty}
              removeIngr={removeIngredient}
          />
        </BurgerConstructorBlock>
        <BurgerConstructorBlock title="Burger">
          <Burger contents={ingredients} />
          <PriceCounter
              price={totalPrice} />
        </BurgerConstructorBlock>
      </div>
  );
}

export default App;