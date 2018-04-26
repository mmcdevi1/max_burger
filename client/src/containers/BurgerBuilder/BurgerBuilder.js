import React from 'react';
import Aux from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler';

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
      ingredients: {},
      subTotal: 0,
      totalPrice: 4,
      isPurchasable: false,
      purchasing: false,
      loading: false,
    }
  }

  componentDidMount () {
    axios.get('https://react-burger-cbf1b.firebaseio.com/ingredients.json')
    .then(res => {
      this.setState({
        ingredients: res.data
      })
    })
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

  purchaseContinueHandler = () => {
    this.setState({ loading: true })

    axios.post('/orders.json', {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: 'Mike McD',
        address: {
          street: '123 street',
          zipcode: '12345',
          state: 'NY'
        }
      }
    })
    .then(res => {
      console.log(res)
      this.setState({ loading: false, purchasing: false })
    })
    .catch(err => {
      console.log(err)
      this.setState({ loading: false, purchasing: false })
    })
  }

  orderSummary () {
    if (this.state.loading) {
      return <Spinner />
    } else {
      return (
        <OrderSummary 
          ingredients={this.state.ingredients} 
          cancel={this.cancelModal} 
          continue={this.purchaseContinueHandler}
          price={this.state.totalPrice}
        />
      )
    }
  }

  render () {
    const { ingredients, purchasing, isPurchasable, totalPrice } = this.state;
    
    return (
      <Aux>
        <Modal show={purchasing} cancel={this.cancelModal}>
          {this.orderSummary()}
        </Modal>
        <Burger ingredients={ingredients} />
        <BuildControls 
          click={this.addIngredientHandler}
          disabled={this.disableBtn}
          price={totalPrice}
          disableOrderNow={isPurchasable}
          ordered={this.purchaseHandler}
        />
      </Aux>
    )
  }
}

export default withErrorHandler(BurgerBuilder, axios);