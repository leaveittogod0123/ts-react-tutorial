import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import ShoppingCart from './components/ShoppingCart';
import BookBeautySalon from './components/BookBeautySalon';
import GlobalStyles from './utils/GlobalStyles';

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyles />
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={ShoppingCart} />
              <Route path="/book" component={BookBeautySalon} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
