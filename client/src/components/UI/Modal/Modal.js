import React from 'react';
import classes from './Modal.css';
import Backdrop from '../Backdrop';

const modal = (props) => {
  return (
    <div>
      <Backdrop show={props.show} cancel={props.cancel} />
      <div 
        className={classes.Modal}
        style={{transform: props.show ? 'translateY(0)' : 'translateY(-100vh'}}
      >
        {props.children}
      </div>
    </div>
  )
}

export default modal;