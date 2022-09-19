import React from 'react'
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredients/BurgerIngredients'

const burger = (props) => {
  let ingredientsArr = Object.keys(props.ingredients)
    .map(key => {
      return [...Array(props.ingredients[key])].map((j, i) => {
        return <BurgerIngredient key={key + i} type={key} />
      })
    }).reduce((arr, element) => {
      return arr.concat(element)
    }, [])
  if (ingredientsArr.length === 0) {
    ingredientsArr = <p>No ingredients added!</p>
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top' />
      {ingredientsArr}
      <BurgerIngredient type='bread-bottom' />
    </div>
  )
}

export default burger
