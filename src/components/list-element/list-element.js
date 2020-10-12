import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

import './list-element.css';

class ListElement extends Component {

    constructor(props) {
        super(props);
        this.state = {
            urlAnchor : "",
            classImage: "",
            renderBtnProduct: null
        }
    }

    componentDidMount() {  

        switch (this.props.opt){
            case "biz":
                this.setState({      
                    urlAnchor : "/biz/",
                    classImage: "card-img-biz",
                    btnProduct: false,
                });
                break;
            case "product":
                this.setState({      
                    urlAnchor : "http://xaca.delivery/biz/popup",
                    classImage: "",
                    btnProduct: true
                });
                break;
            default:
                break;
        }
    }

    render() {

        const renderBtnProduct = () => {
            if (this.state.btnProduct) {
                return (
                    <div>
                        <button class="button is-small is-danger is-light">
                            <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <button class="button is-small is-success is-light">
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                    </div>
                )
            }              
        }

        const footerSpace = {
            height: "100px",
          };
        
        return (
            <div>
                {
                this.props.bizsData.map(
                    (biz) => {
                        return ( 
                        // CAMBIAR CUANDO TENGA BIEN LAS RUTAS
                        // <a href={this.state.urlAnchor + biz.name} target="_blank" >
                        <Link to={this.state.urlAnchor}>
                            <div className="card is-horizontal is-third m-2">
                                <div className="card-image ">
                                    <figure className="image is-square">
                                        <img src={biz.logo} alt={"Logo de "+ biz.name} className={this.state.classImage}></img>
                                    </figure>
                                </div>
                                <div className="card-content p-4">
                                    <div className="media mb-2">
                                        <div className="media-content">
                                            <p className="title is-size-6 mb-1">{biz.name}</p>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <p className="subtitle is-7">
                                            {biz.descripcion}
                                        </p>
                                        <div className="card-aditional-content"> 
                                            <p className="has-text-weight-bold pr-1 m-0">{biz.barrio}</p>
                                            |
                                            <a className="pl-1 pr-5" href={"tel:" + biz.cont_whatsapp}>{biz.cont_whatsapp}</a>
                                            {/* QUITAR LA FUNCIONALIDAD DE AGREGAR O QUITAR ELEMENTOS DE ESTE COMPONENTE*/}
                                            {renderBtnProduct()}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        )
                    })
                }
                {this.state.btnProduct && <div style={footerSpace}></div>}
            </div>
        );
    }
  }

ListElement.propTypes = {
    data: PropTypes.array,
    opt: PropTypes.oneOf(['biz', 'product']),
};
ListElement.defaultProps = {
    bizsData: [
        {
            "pk": 1,
            "name": "Emprendimiento 1",
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
            "horario": "Pedidos hasta 18hs y envios a partir de las 21hs",
            "envio": "NO",
            "owner": "test@admin"
        },
        {
            "pk": 2,
            "name": "Emprendimiento 2",
            "tag": "alimento",
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
            "tag": "alimento",
            "subtag": "vegan",
            "descripcion": "Descripcion empemprendimiento 3",
            "logo": "http://api.xaca.delivery:8000/media/emprens/59498491/59498491.jpeg",
            "cont_mail": "test@test.com",
            "cont_insta": "testinstagram",
            "cont_whatsapp": "1533875000",
            "direccion": "Calle falsa 123",
            "barrio": "Almagro",
            "ciudad": "CABA",
            "cobertura": "Test",
            "horario": "11:00 a 15:00 - 19:00 a 23:30",
            "envio": "SI",
            "owner": "test@admin"
        },
        {
            "pk": 4,
            "name": "Emprendimiento 4",
            "tag": "alimento",
            "subtag": "vegan",
            "descripcion": "Descripcion empemprendimiento 4",
            "logo": "http://api.xaca.delivery:8000/media/emprens/59498491/59498491.jpeg",
            "cont_mail": "test@test.com",
            "cont_insta": "testinstagram",
            "cont_whatsapp": "1533875000",
            "direccion": "Calle falsa 123",
            "barrio": "Almagro",
            "ciudad": "CABA",
            "cobertura": "Test",
            "horario": "11:00 a 15:00 - 19:00 a 23:30",
            "envio": "SI",
            "owner": "test@admin"
        },
        {
            "pk": 5,
            "name": "Emprendimiento 5",
            "tag": "alimento",
            "subtag": "vegan",
            "descripcion": "Descripcion empemprendimiento 5",
            "logo": "http://api.xaca.delivery:8000/media/emprens/59498491/59498491.jpeg",
            "cont_mail": "test@test.com",
            "cont_insta": "testinstagram",
            "cont_whatsapp": "1533875000",
            "direccion": "Calle falsa 123",
            "barrio": "Almagro",
            "ciudad": "CABA",
            "cobertura": "Test",
            "horario": "11:00 a 15:00 - 19:00 a 23:30",
            "envio": "SI",
            "owner": "test@admin"
        },
        {
            "pk": 6,
            "name": "Emprendimiento 6",
            "tag": "alimento",
            "subtag": "vegan",
            "descripcion": "Descripcion empemprendimiento 6",
            "logo": "http://api.xaca.delivery:8000/media/emprens/59498491/59498491.jpeg",
            "cont_mail": "test@test.com",
            "cont_insta": "testinstagram",
            "cont_whatsapp": "1533875000",
            "direccion": "Calle falsa 123",
            "barrio": "Almagro",
            "ciudad": "CABA",
            "cobertura": "Test",
            "horario": "11:00 a 15:00 - 19:00 a 23:30",
            "envio": "SI",
            "owner": "test@admin"
        },
        {
            "pk": 7,
            "name": "Emprendimiento 7",
            "tag": "alimento",
            "subtag": "vegan",
            "descripcion": "Descripcion empemprendimiento 7",
            "logo": "http://api.xaca.delivery:8000/media/emprens/59498491/59498491.jpeg",
            "cont_mail": "test@test.com",
            "cont_insta": "testinstagram",
            "cont_whatsapp": "1533875000",
            "direccion": "Calle falsa 123",
            "barrio": "Almagro",
            "ciudad": "CABA",
            "cobertura": "Test",
            "horario": "11:00 a 15:00 - 19:00 a 23:30",
            "envio": "SI",
            "owner": "test@admin"
        }
    ],
    opt: "biz"
};
  
export default ListElement;