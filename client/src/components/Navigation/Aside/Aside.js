import React from 'react';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import classes from './Aside.css';
import Backdrop from '../../UI/Backdrop';
import Aux from '../../../hoc/Auxi';

const aside = (props) => {
  let attachedClasses = [classes.aside, classes.close];
  if (props.open) {
    attachedClasses = [classes.aside, classes.open]
  }

  return (
    <Aux>
      <Backdrop show={props.open} cancel={props.closed} />
      <div className={attachedClasses.join(' ')}>
        <div onClick={props.closed}>
          Close
        </div>
        <nav>
          <NavItems />
        </nav>
      </div>
    </Aux>
  )
}

export default aside;