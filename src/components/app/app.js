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

  constructor(props) {
    super(props)

    // Bind the this context to the handler function
    this.handlerSelectDistrict = this.handlerSelectDistrict.bind(this);
    this.handlerSelectBiz= this.handlerSelectBiz.bind(this);
    this.handlerSelectTag= this.handlerSelectTag.bind(this);
    this.handlerCart = this.handlerCart.bind(this);

    // Set some state
    this.state = {
      // EXTRAER LOS DISTRICT DE LA API O PONER TODO CABA ACA
        districts: [
          "Palermo",
          "Recoleta",
          "Almagro",
          "Balvanera",
          "Colegiales"
       ],
        selectedDistrict: null,
        selectedBiz: null,
        selectedTag: null,
        cart: []
    };
  }

  // This method will be sent to the child component
  handlerSelectDistrict(event) {
    this.setState({
        selectedDistrict: event.target.value
    });
  }
  handlerSelectBiz(event) {
    this.setState({
        selectedDistrict: event
    });
  }

  handlerSelectTag(event) {
    this.setState({
        selectedTag: event
    });
  }
  handlerCart(cart){
    this.setState({
      cart: cart
    });
  }

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
                render={props => (
                  <Home
                    handleDistrictChange ={this.handlerSelectDistrict}
                    districts = {this.state.districts}
                    selectedDistrict = {this.state.selectedDistrict}
                  />
                )}
              />
            <Route
                exact
                path="/bizslist"
                render={props => (
                  <BizsList
                    handleDistrictChange ={this.handlerSelectDistrict}
                    districts = {this.state.districts}
                    selectedDistrict = {this.state.selectedDistrict}
                    handlerSelectBiz ={this.handlerSelectBiz}
                    handlerSelectTag ={this.handlerSelectTag}
                  />
                )}
              />
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
