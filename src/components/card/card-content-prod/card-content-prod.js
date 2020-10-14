import React from 'react';
import PropTypes from 'prop-types';

function CardContentProd(props){
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
                    {/* {renderBtnProduct()} */}
                </div>
            </div>
        </div>
      );
}

CardContentProd.propTypes = {
    logo: PropTypes.string,
    name: PropTypes.string,
    styleImg: PropTypes.string,
};

export default CardContentProd;