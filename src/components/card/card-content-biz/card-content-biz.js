import React from 'react';
import PropTypes from 'prop-types';

function CardContentBiz(props){
    return (
        <div className="card-content p-4">
            <div className="media mb-2">
                <div className="media-content">
                    <p className="title is-size-6 mb-1">{props.name}</p>
                </div>
            </div>
            <div className="content">
                <p className="subtitle is-7">
                    {props.descripcion}
                </p>
                <div className="card-aditional-content"> 
                    <p className="has-text-weight-bold pr-1 m-0">{props.barrio}</p>
                    |
                    <a className="pl-1 pr-5" href={"tel:" + props.cont_whatsapp}>{props.cont_whatsapp}</a>
                </div>
            </div>
        </div>
      );
}

CardContentBiz.propTypes = {
    logo: PropTypes.string,
    name: PropTypes.string,
    styleImg: PropTypes.string,
};

export default CardContentBiz;