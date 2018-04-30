import axios from '../../axios-orders';

const actions = {
  ORDER_SUCCESS: 'ORDER_SUCCESS',
  ORDER_FAIL: 'ORDER_FAIL',

  purchaseBurgerStart: (data) => {
    return dispatch => {
      axios.post('/orders.json', data)
        .then(res => {
          dispatch({
            type: actions.ORDER_SUCCESS,
            payload: {
              id: res.data,
              data
            }
          })
        })
        .catch(err => {
          dispatch({
            type: actions.ORDER_FAIL,
            payload: error
          })
        })
    }
  },
}

export default actions;