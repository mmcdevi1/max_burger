import React from 'react';
import classes from './Logo.css';

const path = process.env.PUBLIC_URL + '/images/burger-logo.png'

const logo = (props) => {
  return (
    <div className={classes.logo}>
      <img src={path} />
    </div>
  )
}

export default logo;