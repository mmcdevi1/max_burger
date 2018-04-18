import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad'},
  { label: 'Bacon', type: 'bacon'},
  { label: 'Cheese', type: 'cheese'},
  { label: 'Meat', type: 'meat'}
];

const buildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <p>Price: {props.price.toFixed(2)}</p>
      {controls.map(ctrl => {
        return (
          <BuildControl 
            type={ctrl.type} 
            click={props.click} 
            key={ctrl.label} 
            label={ctrl.label} 
            disabled={props.disabled}
          />
        )
      })}
      <button 
        disabled={!props.disableOrderNow}
        onClick={props.ordered}
      >
        Order Now
      </button>
    </div>
  )
}

export default buildControls;