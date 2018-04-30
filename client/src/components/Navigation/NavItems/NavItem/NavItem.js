import React from 'react';
import classes from './NavItem.css';
import { NavLink } from 'react-router-dom';

const navItem = (props) => {
  return (
    <li className={classes.navigationItem}>
      <NavLink to={props.link} exact activeClassName={classes.active}>
        {props.children}
      </NavLink>
    </li>
  )
}

export default navItem;