import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import AsideToggle from '../Aside/AsideToggle';

const toolBar = (props) => {
  return (
    <header className={classes.toolbar}>
      <AsideToggle openMenu={props.openMenu} />
      <Logo />
      <nav className={classes.desktopOnly}>
        <NavItems />
      </nav>
    </header>
  )
}

export default toolBar;