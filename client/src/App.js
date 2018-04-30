import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './reducers/store';
import Layout from './components/Layout';
import BurgerBuilder from './containers/BurgerBuilder';
import Checkout from './containers/Checkout';
import Orders from './containers/Orders/Orders';

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Layout>
            <Switch>
              <Route path="/checkout" component={Checkout} />
              <Route path="/orders" component={Orders} />
              <Route path="/" exact component={BurgerBuilder} />
            </Switch>
          </Layout>
        </Provider>
      </div>
    );
  }
}

export default App;
