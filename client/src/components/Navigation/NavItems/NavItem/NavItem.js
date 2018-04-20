import React from 'react';
import classes from './NavItem.css';

const navItem = (props) => {
  return (
    <li className={classes.navigationItem}>
      <a 
        href={props.link}
        className={props.active ? classes.active : null}
      >{props.children}</a>
    </li>
  )
}

export default navItem;