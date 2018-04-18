import React from 'react';
import Ingredients from './Ingredients/Ingredients';
import classes from './Burger.css';

const _ = {
  transform: (obj, callback) => {
    const keys = Object.keys(obj);

    return keys.map(key => {
      return [...Array(obj[key])].map((_, i) => {
        return callback(key, i)
      })
    })
    .reduce((arr, el) => {
      return arr.concat(el)
    }, [])
  }
}

const burger = (props) => {
  let transformIngredients = _.transform(props.ingredients, (ingredient, index) => {
    return <Ingredients key={ingredient + index} type={ingredient} />
  })

  return (
    <div className={classes.Burger}>
      <Ingredients type="bread-top" />
      {(transformIngredients.length === 0) ? 'Please start adding ingredients' : transformIngredients}
      <Ingredients type="bread-bottom" />
    </div>
  )
}

export default burger;