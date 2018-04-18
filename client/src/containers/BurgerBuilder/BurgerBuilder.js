import React from 'react';
import Aux from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary';

const price = {
  salad: 0.5,
  bacon: 1,
  cheese: 0.75,
  meat: 2
}

class BurgerBuilder extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0,
      },
      subTotal: 0,
      totalPrice: 4,
      isPurchasable: false,
      purchasing: false,
    }
  }

  addIngredientHandler = (type, int) => {
    if (this.state.ingredients[type] <= 0 && int < 0) { return; }

    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = this.state.ingredients[type] + int;

    const updateSubtotal = this.state.subTotal + price[type] * int;
    const updatePurchaseState = updateSubtotal > 0;

    this.setState({
      ingredients: updatedIngredients,
      subTotal: updateSubtotal,
      totalPrice: this.state.totalPrice + price[type] * int,
      isPurchasable: updatePurchaseState
    })
  }

  disableBtn = (type) => {
    return this.state.ingredients[type] <= 0;
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true })
  }

  cancelModal = () => {
    this.setState({ purchasing: false })
  }

  purchaseContinue = () => {
    console.log('continued')
  }

  render () {
    const { ingredients } = this.state;
    console.log(this.state)
     return (
      <Aux>
        <Modal show={this.state.purchasing} cancel={this.cancelModal}>
          <OrderSummary 
            ingredients={this.state.ingredients} 
            cancel={this.cancelModal} 
            continue={this.purchaseContinue}
            price={this.state.totalPrice}
          />
        </Modal>
        <Burger ingredients={ingredients} />
        <BuildControls 
          click={this.addIngredientHandler}
          disabled={this.disableBtn}
          price={this.state.totalPrice}
          disableOrderNow={this.state.isPurchasable}
          ordered={this.purchaseHandler}
        />
      </Aux>
    )
  }
}

export default BurgerBuilder;