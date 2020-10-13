import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import CardImage from './card-image'
import CardContent from './card-content'

import './card.css';

function Card(props){
    let style
    if(props.opt==="biz"){
        style = "card-img-biz";
    }

    return (
        <Link to={ "/biz/" + props.slug} onClick={() => props.handlerSelectBiz(props.slug)}>
            <div className="card is-horizontal is-third m-2">
                <CardImage
                    name= {props.name}
                    logo= {props.logo}
                    styleImg= {style}
                ></CardImage>
                {/* PASAR DATA Y OPT */}
                <CardContent
                    opt = {props.opt}
                    name= {props.name}
                    barrio = {props.data.barrio}
                    descripcion = {props.data.descripcion}
                    cont_whatsapp = {props.data.cont_whatsapp}
                ></CardContent>
            </div>
        </Link>
      );
}

Card.propTypes = {
    opt: PropTypes.oneOf(['biz', 'product']),
    name: PropTypes.string,
    slug: PropTypes.string,
    link: PropTypes.string,
    logo: PropTypes.string,
    data: PropTypes.object,
    handlerSelectBiz: PropTypes.func,
    handlerCart: PropTypes.func
};

export default Card;