import React from 'react';
import classes from './NavItems.css';
import NavItem from './NavItem/NavItem';

const navItems = () => {
  return (
    <nav>
      <ul className={classes.navigationItems}>
        <NavItem link='/' active>Burger Builder</NavItem>
        <NavItem link='/checkout'>Checkout</NavItem>
      </ul>
    </nav>
  )
}

export default navItems;