import React from 'react';
import classes from './NavItems.css';
import NavItem from './NavItem/NavItem';

const navItems = () => {
  return (
    <nav>
      <ul className={classes.navigationItems}>
        <NavItem link='/'>Burger Builder</NavItem>
        <NavItem link='/orders'>Orders</NavItem>
      </ul>
    </nav>
  )
}

export default navItems;