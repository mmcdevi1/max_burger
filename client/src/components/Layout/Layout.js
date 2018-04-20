import React from 'react';
import Aux from '../../hoc/Auxi';
import classes from './Layout.css';
import Header from '../Navigation/Toolbar';

const layout = (props) => {
  return (
    <Aux>
      <Header />
      <main className={classes.Content}>
        {props.children}
      </main>
    </Aux>
  )
}

export default layout;