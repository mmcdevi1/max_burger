import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import reducerList from './reducers';
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [ reduxThunk, logger ];

const reducers = combineReducers({
  ...reducerList
})

export default createStore(reducers, composeEnhancers(applyMiddleware(...middlewares)))