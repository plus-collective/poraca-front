import React from 'react';
import PropTypes from 'prop-types';

function CardImage(props){
    return (
        <div className="card-image ">
            <figure className="image is-square">
                <img src={props.logo} alt={"Logo de "+ props.name} className={props.styleImg}></img>
            </figure>
        </div>
      );
}

CardImage.propTypes = {
    logo: PropTypes.string,
    name: PropTypes.string,
    styleImg: PropTypes.string,
};

export default CardImage;