import React from 'react';
import Aux from '../../hoc/Auxi';
import classes from './Layout.css';
import Header from '../Navigation/Toolbar';
import Aside from '../Navigation/Aside/Aside';

class Layout extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      showAside: false,
    }
  }

  asideClosedHandler = () => {
    this.setState({
      showAside: false
    })
  }

  asideToggleHandler = () => {
    this.setState((prevState) => {
      return { showAside: !prevState.showAside }
    })
  }


  render () {
    return (
      <Aux>
        <Header openMenu={this.asideToggleHandler} />
        <Aside open={this.state.showAside} closed={this.asideClosedHandler} />
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    )
  }
}

export default Layout;