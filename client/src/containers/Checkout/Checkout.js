import React from 'react';
import { connect } from 'react-redux'
import { Route } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import actions from '../../actions/burger/types';

const { ADD_INGREDIENTS, REMOVE_INGREDIENTS } = actions;

class Checkout extends React.Component {
  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  }

  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact')
  }
  
  render () {
    return (
      <div>
        <CheckoutSummary 
          ingredients={this.props.ingredients} 
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
        />
        <Route 
          path={this.props.match.path + '/contact'} 
          component={ContactData} />
      </div>
    )
  }
}

function mapStateToProps (state) {
  const { 
    ingredients, 
  } = state.Burger;

  return {
    ingredients,
  }
}

export default connect(mapStateToProps, null)(Checkout);