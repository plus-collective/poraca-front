import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
// import logo from '../../images/logo.svg';

import Home from '../../routes/home';
import Business from '../../routes/business';
import BizsList from '../../routes/bizs-list';
import Confirm from '../../routes/confirm';
import NavBar from '../navbar';

import './app.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <NavBar/> */}
          <Redirect
                from="/"
                to="/home" />
          <Switch>
            <Route
                exact
                path="/home"
                component={Home} />
            <Route
                exact
                path="/bizslist"
                component={BizsList} />
            <Route
                exact
                path="/biz"
                component={Business} />
            <Route
                exact
                path="/confirm"
                component={Confirm} />
            <Route>{'404'}</Route>
          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;
