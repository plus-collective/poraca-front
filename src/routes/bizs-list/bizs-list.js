import React, {Component} from 'react';

import DistrictSelector from '../../components/district-selector';
import CardList from '../../components/card-list';
import TagList from '../../components/tag-list';

class BizsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bizsData: []
    }
  }

  componentDidMount(){
    // FETCH BIZ API
    this.setState({
      bizsData : [
        {
            "pk": 1,
            "name": "Emprendimiento new",
            "slug": "emprendimiento-1",
            "tag": "Dulce",
            "subtag": "vegan",
            "descripcion": "Descripcion empemprendimiento 1",
            "logo": "http://api.xaca.delivery:8000/media/emprens/59498491/59498491.jpeg",
            "cont_mail": "test@test.com",
            "cont_insta": "testinstagram",
            "cont_whatsapp": "1533875000",
            "direccion": "Calle falsa 123",
            "barrio": "Palermo",
            "ciudad": "CABA",
            "cobertura": "Test",
            "horario": "Pedidos hasta 18hs y envios a partir de las 21hs",
            "envio": "NO",
            "owner": "test@admin"
        },
        {
            "pk": 2,
            "name": "Emprendimiento 2",
            "slug": "emprendimiento-2",
            "tag": "Dulce",
            "subtag": "vegan",
            "descripcion": "Descripcion empemprendimiento 2",
            "logo": "http://api.xaca.delivery:8000/media/emprens/59498491/59498491.jpeg",
            "cont_mail": "test@test.com",
            "cont_insta": "testinstagram",
            "cont_whatsapp": "1533875000",
            "direccion": "Calle falsa 123",
            "barrio": "Almagro",
            "ciudad": "CABA",
            "cobertura": "Test",
            "horario": "12:00 A 23:00",
            "envio": "SI",
            "owner": "test@admin"
        },
        {
            "pk": 3,
            "name": "Emprendimiento 3",
            "slug": "emprendimiento-3",
            "tag": "alimento",
            "subtag": "vegan",
            "descripcion": "Descripcion empemprendimiento 3",
            "logo": "http://api.xaca.delivery:8000/media/emprens/59498491/59498491.jpeg",
            "cont_mail": "test@test.com",
            "cont_insta": "testinstagram",
            "cont_whatsapp": "1533875000",
            "direccion": "Calle falsa 123",
            "barrio": "Recoleta",
            "ciudad": "CABA",
            "cobertura": "Test",
            "horario": "11:00 a 15:00 - 19:00 a 23:30",
            "envio": "SI",
            "owner": "test@admin"
        },
        {
            "pk": 4,
            "name": "Emprendimiento asd",
            "slug": "emprendimiento-ads",
            "tag": "Salado",
            "subtag": "vegan",
            "descripcion": "Descripcion empemprendimiento 3",
            "logo": "http://api.xaca.delivery:8000/media/emprens/59498491/59498491.jpeg",
            "cont_mail": "test@test.com",
            "cont_insta": "testinstagram",
            "cont_whatsapp": "1533875000",
            "direccion": "Calle falsa 123",
            "barrio": "Recoleta",
            "ciudad": "CABA",
            "cobertura": "Test",
            "horario": "11:00 a 15:00 - 19:00 a 23:30",
            "envio": "SI",
            "owner": "test@admin"
        }
      ]
    });
  }


  render(){
    return (
      <div>
        <div className="hero is-primary pt-6">
          <div className="hero-body pb-4">
            <div className="container has-text-centered is-vcentered">
                <DistrictSelector
                  handleDistrictChange={this.props.handleDistrictChange}
                  districts={this.props.districts}
                  selectedDistrict= {this.props.selectedDistrict}
                ></DistrictSelector>
            </div>
          </div>
        </div>
        <TagList 
          handlerSelectTag={this.props.handlerSelectTag}
          tags={this.props.tags}
          ></TagList>

        <CardList 
          opt="biz" 
          data={this.state.bizsData}
          handlerSelectBiz = {this.props.handlerSelectBiz}
          selectedDistrict= {this.props.selectedDistrict}
          selectedTag = {this.props.selectedTag}
          >
        </CardList>

      </div>
    ) 
  }
}

export default BizsList;