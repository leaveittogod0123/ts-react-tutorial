import React, { Component } from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router,
  withRouter,
} from 'react-router-dom';
import ShoppingCart from './components/ShoppingCart';
import BookBeautySalon from './components/BookBeautySalon';
import GlobalStyles from './utils/GlobalStyles';

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyles />
        <Switch>
          <Route path="/book" component={BookBeautySalon} />
          <Route exact path="/" component={ShoppingCart} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
