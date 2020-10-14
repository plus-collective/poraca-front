import React,{Component} from 'react';
import PropTypes from 'prop-types';

import Popup from '../../components/popup';
import HeaderBiz from '../../components/header-biz';
import Card from '../../components/card'
import FooterBiz from '../../components/footer-biz';


class Biz extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      bizData: [],
      products:[]
    }
  }

  componentDidMount(){
  // FETCH BIZ API
  this.setState({
    bizData: 
    {
        "pk": 1,
        "name": "Nombre Emprendimiento",
        "tag": "alimento",
        "subtag": "vegan",
        "descripcion": "Descripcion empemprendimiento 1",
        "logo": "http://api.xaca.delivery:8000/media/emprens/59498491/59498491.jpeg",
        "cont_mail": "test@test.com",
        "cont_insta": "testinstagram",
        "cont_whatsapp": "1533875000",
        "direccion": "Calle falsa 123",
        "barrio": "Almagro",
        "ciudad": "CABA",
        "cobertura": "Test",
        "horario": "LUN a VIE de 18hs a 23:00",
        "envio": "NO",
        "owner": "test@admin",
    },
    products: [
    {
        "pk": 1,
        "name": "Producto 1",
        "tag": "Dulce",
        "descripcion": "Esta es la descripción de un producto",
        "imagen": "http://api.xaca.delivery:8000/media/emprens/84277053/84277053.jpeg",
        "precio": 100,
        "inmediato": false,
        "stock": true,
        "emprendimiento": "Nombre Emprendimiento"
    },
    {
        "pk": 2,
        "name": "Producto 2",
        "tag": "Dulce",
        "descripcion": "Soy un producto re copado",
        "imagen": "http://api.xaca.delivery:8000/media/emprens/84277053/84277053.jpeg",
        "precio": 200,
        "inmediato": true,
        "stock": true,
        "emprendimiento": "Nombre Emprendimiento"
    }] 
    })

  }

  render(){
    return (
      <div>
        <HeaderBiz 
          bizName={this.state.bizData.name} 
          bizSched={this.state.bizData.horario}
          bizLogo={this.state.bizData.logo}
        ></HeaderBiz>
        <div class="container">
          {
          this.state.products.map(
              (element) => {
                  return ( 
                      <Card
                          opt = "product"
                          data = {element}
                          handlerSelectBiz = {this.props.handlerSelectBiz}
                      ></Card>
                  )
              })
          }

          <FooterBiz></FooterBiz>
        </div>
      </div>
    ) 
  }
}

Biz.propTypes = {
    data: PropTypes.object,
};
Biz.defaultProps = {
};
export default Biz;