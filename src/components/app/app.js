import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
// import logo from '../../images/logo.svg';

import Home from '../../routes/home';
import Biz from '../../routes/biz';
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
      tags: [
        "Dulce",
        "Salado"
      ],
      selectedDistrict: "AllDistricts",
      selectedBiz: null,
      selectedTag: "AllTags",
      cart: 
        {
          products: [{
            name:null,
            quantity: null,
            price: null
            }],
          totalItem: null,
          totalPrice: null
        }
      };
  }

  // This method will be sent to the child component
  handlerSelectDistrict(event) {
    this.setState({
        selectedDistrict: event.target.value
    });
  }
  handlerSelectBiz(biz) {
    this.setState({
      selectedBiz: biz
    });
  }
  handlerSelectTag(tagName) {
    console.log('I was triggered during render')
    this.setState({
        selectedTag: tagName
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
                    districts = {this.state.districts}
                    handleDistrictChange ={this.handlerSelectDistrict}
                    selectedDistrict = {this.state.selectedDistrict}
                  />
                )}
              />
            <Route
                exact
                path="/bizslist"
                render={props => (
                  <BizsList
                    districts = {this.state.districts}
                    tags={this.state.tags}
                    selectedDistrict = {this.state.selectedDistrict}
                    selectedTag = {this.state.selectedTag}
                    handleDistrictChange ={this.handlerSelectDistrict}
                    handlerSelectBiz ={this.handlerSelectBiz}
                    handlerSelectTag ={this.handlerSelectTag}
                  />
                )}
              />
            <Route 
              path="/biz/:slug" 
              render={()=> <Biz 
                parentState={this.state} 
                cart={this.state.cart}
                />
              } 
            />
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
