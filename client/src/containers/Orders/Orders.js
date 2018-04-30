import React from 'react';
import axios from '../../axios-orders';
import Order from '../../components/Order/Order';

class Orders extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      orders: [],
      loading: true,
    }
  }

  componentDidMount () {
    axios.get('/orders.json')
      .then(res => {
        const fetchOrders = [];
        for (let key in res.data) {
          fetchOrders.push({
            ...res.data[key],
            id: key
          })
        }

        this.setState({
          loading: false,
          orders: fetchOrders
        })
      })
      .catch(err => {
        console.log(err)
        this.setState({
          loading: false
        })
      })
  }

  render () {
    return (
      <div>
        {this.state.orders.map(order => {
          return (
            <Order 
              key={order.id} 
              price={order.price} 
              ingredients={order.ingredients}
            />
          )
        })}
      </div>
    )
  }
}

export default Orders;