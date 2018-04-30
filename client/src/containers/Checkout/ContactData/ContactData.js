import React from 'react';
import { connect } from 'react-redux'
import axios from '../../../axios-orders';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

class ContactData extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      orderForm: {
        name: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Your Name'
          },
          value: ''
        },
        street: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Street'
          },
          value: ''
        },
        zipcode: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Zip Code'
          },
          value: ''
        },
        state: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'State'
          },
          value: ''
        },
        email: {
          elementType: 'input',
          elementConfig: {
            type: 'email',
            placeholder: 'Your Email'
          },
          value: ''
        },
        deliveryMethod: {
          elementType: 'select',
          elementConfig: {
            options: [
              {value: 'fastest', displayValue: 'Fastest'},
              {value: 'slow', displayValue: 'Slow'}
            ]
          },
          value: ''
        },        
      },
      loading: false,
    }
  }

  orderHandler = async (e) => {
    e.preventDefault();

    this.setState({ loading: true })

    const formData = {}
    for (let key in this.state.orderForm) {
      formData[key] = this.state.orderForm[key].value
    }

    const res = await axios.post('/orders.json', {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      orderData: formData
    })
    // .then(res => {
    //   console.log(res)
    //   this.setState({ loading: false })
    // })
    // .catch(err => {
    //   console.log(err)
    //   this.setState({ loading: false })
    // })

    this.setState({ loading: false });
    this.props.history.push('/')
  }

  inputChangedHandler = (e, input) => {
    const { orderForm } = this.state;

    const form = {
      ...orderForm
    }

    const formEl = {
      ...form[input] 
    }

    formEl.value = e.target.value;
    form[input] = formEl;

    this.setState({
      orderForm: form
    })
  }

  render () {
    const formElements = [];

    for (let key in this.state.orderForm) {
      formElements.push({
        id: key,
        config: this.state.orderForm[key]
      })
    }

    let form = (
      <form onSubmit={this.orderHandler}>
        {formElements.map(el => {
          const { elementType, elementConfig, value } = el.config;

          return (
            <Input 
              key={el.id} 
              elementType={elementType} 
              elementConfig={elementConfig} 
              value={value} 
              changed={(e) => {this.inputChangedHandler(e, el.id)}}
            />
          )
        })}
        <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
      </form>
    );

    if (this.state.loading) {
      form = <Spinner />
    }

    return (
      <div className={classes.ContactData}>
        <h4>Enter you contact information</h4>
        {form}
      </div>
    )
  }
}

function mapStateToProps (state) {
  const { 
    ingredients,
    totalPrice 
  } = state.Burger;

  return {
    ingredients,
    totalPrice
  }
}

export default connect(mapStateToProps, null)(ContactData);