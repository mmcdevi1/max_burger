import axios from '../../axios-orders';

const actions = {
  ADD_INGREDIENTS: 'ADD_INGREDIENTS',
  REMOVE_INGREDIENTS: 'REMOVE_INGREDIENTS',
  FETCH_DATA: 'FETCH_DATA',
  FETCH_DATA_ERROR: 'FETCH_DATA_ERROR',

  addIngredient: (name, amount) => {
    return dispatch => {
      dispatch({
        type: actions.ADD_INGREDIENTS,
        payload: {
          name,
          amount
        }
      })
    }
  },

  removeIngredient: (name) => {
    return dispatch => {
      dispatch({
        type: actions.REMOVE_INGREDIENTS,
        payload: name
      })
    }
  },

  fetchData: () => {
    return dispatch => {
      axios.get('https://react-burger-cbf1b.firebaseio.com/ingredients.json')
        .then(res => {
          dispatch({
            type: actions.FETCH_DATA,
            payload: res.data,
          })
        })
        .catch(err => {
          dispatch({
            type: actions.FETCH_DATA_ERROR,
          })
        })
    }
  }
}

export default actions;