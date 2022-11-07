import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Calculator from './components/Calculators';
import Home from './components/Home';
import Navbar from './components/NavBar';
import QUOTE from './components/Quotes';

const App = () => (
  <Router>

    <div className="App">
      <Navbar />

      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/Calculators">
            <Calculator />
          </Route>

          <Route path="/Quotes">
            <QUOTE />
          </Route>
        </Switch>

      </div>

    </div>
  </Router>

);
export default App;
