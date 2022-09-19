import React from 'react'
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(key => {
      return (<li key={key}><span style={{ textTransform: 'capitalize' }}>{key}</span>: {props.ingredients[key]}</li>)
    })
  return (
    <Aux>
      <h3> Your Order</h3>
      <ul>
        {ingredientSummary}
      </ul>
      <p><storng>Total price: ${props.price.toFixed(2)}</storng></p>
      <p>Continue to Checkout?</p>
      <Button btnType='Danger' clicked={props.purchaseCancelled}>Cancel</Button>
      <Button btnType='Success' clicked={props.purchaseContinue}>Continue</Button>
    </Aux>
  )
}

export default orderSummary
