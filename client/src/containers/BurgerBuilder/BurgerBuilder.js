import React from 'react';
import { connect } from 'react-redux'
import Aux from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler';
import actions from '../../actions/burger/types';

const { addIngredient, fetchData } = actions;

class BurgerBuilder extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      purchasing: false,
      loading: false,
    }
  }

  componentDidMount () {
    this.props.fetchData();
  }

  disableBtn = (type) => {
    // return this.props.ingredients[type] <= 0;
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true })
  }

  cancelModal = () => {
    this.setState({ purchasing: false })
  }

  purchaseContinueHandler = () => {
    this.props.history.push('/checkout')
  }

  orderSummary () {
    if (this.state.loading) {
      return <Spinner />
    } else if (this.props.ingredients) {
      return (
        <OrderSummary 
          ingredients={this.props.ingredients} 
          cancel={this.cancelModal} 
          continue={this.purchaseContinueHandler}
          price={this.props.totalPrice}
        />
      )
    }
  }

  render () {
    const { purchasing } = this.state;
    const { ingredients, totalPrice, isPurchasable } = this.props;
    let burger;
    if (ingredients) {
      burger = (
        <Aux>
        <Modal show={purchasing} cancel={this.cancelModal}>
          {this.orderSummary()}
        </Modal>
        <Burger ingredients={ingredients} />
        <BuildControls 
          click={this.props.addIngredient}
          disabled={this.disableBtn}
          price={totalPrice}
          disableOrderNow={isPurchasable}
          ordered={this.purchaseHandler}
        />
      </Aux>
      )
    }

    return (
      <div>
        {burger}
      </div>
    )
  }
}

function mapStateToProps (state) {
  const { 
    ingredients, 
    totalPrice, 
    isPurchasable,
    error
  } = state.Burger;

  return {
    ingredients,
    totalPrice,
    isPurchasable,
    error
  }
}


export default connect(mapStateToProps, { addIngredient, fetchData })(withErrorHandler(BurgerBuilder, axios))