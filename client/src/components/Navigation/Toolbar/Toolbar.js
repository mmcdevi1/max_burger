import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems'

const toolBar = (props) => {
  return (
    <header className={classes.toolbar}>
      <div>Menu</div>
      <Logo />
      <NavItems />
    </header>
  )
}

export default toolBar;