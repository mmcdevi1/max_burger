import React from 'react';
import classes from './Order.css';
import _ from 'lodash';

const order = (props) => {
  let ingredients = [];

  for (let key in props.ingredients) {
    ingredients.push({
      name: key,
      amount: props.ingredients[key]
    })
  }

  ingredients = ingredients.map(ingredient => {
    return (
      <span key={ingredient.name} style={{'border': '1px solid #dcdcdc', 'fontSize':'12px', 'padding':'3px', 'margin':'0 5px 0 0'}}>
        {_.capitalize(ingredient.name)} ({ingredient.amount})
      </span>
    )
  })

  return (
    <div className={classes.Order}>
      Ingredients: {ingredients}
      <p>Price: <strong>${Number.parseFloat(props.price.toFixed(2))}</strong></p>
    </div>
  )  
}

export default order;