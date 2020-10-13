import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import CardImage from './card-image'
import CardContent from './card-content'

function Card(props){
    let style
    if(props.style==="biz"){
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
                <CardContent
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
    name: PropTypes.string,
    slug: PropTypes.string,
    link: PropTypes.string,
    logo: PropTypes.string,
    style: PropTypes.oneOf(['biz', 'product']),
    data: PropTypes.object,
    handlerSelectBiz: PropTypes.func,
};

export default Card;