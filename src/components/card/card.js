import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import CardImage from './card-image'
import CardContentBiz from './card-content-biz'
import CardContentProd from './card-content-prod'


import './card.css';

function Card(props){
    let style
    switch (props.opt) {
        case "biz":
            return CardBiz(props);
        case "product":
            return CardProd(props);       
        default:
            break;
    }
    
}

function CardBiz(props){

    return (
        <Link to={ "/biz/" + props.data.slug} onClick={() => props.handlerSelectBiz(props.data.slug)}>
            <div className="card is-horizontal is-third m-2">
                <CardImage
                    name= {props.data.name}
                    logo= {props.data.logo}
                    styleImg= "card-img-biz"
                ></CardImage>
                {/* PASAR DATA Y OPT */}
                <CardContentBiz
                    name= {props.data.name}
                    barrio = {props.data.barrio}
                    descripcion = {props.data.descripcion}
                    cont_whatsapp = {props.data.cont_whatsapp}
                ></CardContentBiz>
            </div>
        </Link>
      );
}

function CardProd(props){
    return (
        // <Link to={ "/biz/" + props.data.slug} onClick={() => props.handlerSelectBiz(props.data.slug)}>
        <Link >
            <div className="card is-horizontal is-third m-2">
                <CardImage
                    name= {props.data.name}
                    logo= {props.data.imagen}
                    styleImg= ""
                ></CardImage>
                {/* PASAR DATA Y OPT */}
                <CardContentProd
                    name= {props.data.name}
                    barrio = {props.data.barrio}
                    descripcion = {props.data.descripcion}
                    cont_whatsapp = {props.data.cont_whatsapp}
                ></CardContentProd>
            </div>
        </Link>
      );
}

Card.propTypes = {
    opt: PropTypes.oneOf(['biz', 'product']),
    data: PropTypes.object,
    handlerSelectBiz: PropTypes.func,
    handlerCart: PropTypes.func
};

export default Card;