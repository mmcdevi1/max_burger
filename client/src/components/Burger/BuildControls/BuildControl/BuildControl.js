import React from 'react';
import classes from './BuildControl.css';

const buildControl = (props) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button 
        onClick={() => props.click(props.type, -1)} 
        className={classes.Less}
        disabled={props.disabled(props.type)}
      >
        Less
      </button>
      <button onClick={() => props.click(props.type, 1)} className={classes.More}>More</button>
    </div>
  )
}

export default buildControl;