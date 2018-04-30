import actions from '../actions/burger/types';

const { ADD_INGREDIENTS, REMOVE_INGREDIENTS, FETCH_DATA, FETCH_DATA_ERROR } = actions;

const initialState = {
  ingredients: {},
  totalPrice: 4,
  subTotal: 0,
  isPurchasable: false,
  error: false,
}

const price = {
  salad: 0.5,
  bacon: 1,
  cheese: 0.75,
  meat: 2
}

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENTS:
      const { name, amount } = action.payload;
      const updateSubtotal = state.subTotal + price[name] * amount;
      const updatePurchaseState = updateSubtotal > 0;

      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [name]: state.ingredients[name] + amount,
        },
        totalPrice: state.totalPrice + price[name] * amount,
        subTotal: updateSubtotal,
        isPurchasable: updatePurchaseState,
      }
    case FETCH_DATA:
      return {
        ...state,
        ingredients: action.payload,
        error: false
      }
    case FETCH_DATA_ERROR:
      return {
        ...state,
        error: true
      }
    default:
      return state;
  }
}

export default reducer;