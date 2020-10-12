
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import WppImg from '../../images/wpp-512.png';

function Button(props) {

    const renderWppLogo = ()=>{
        if(props.wpp){
          return <span class="icon"> <img src={WppImg} alt="whatsapp logo" /> </span>
        } else{
          return 
        }
      }

    return (
      <Link to={props.action}>
        <button className="button is-success is-fullwidth xaca-btn" href={props.action}>
            <span>{props.text}</span>
            {renderWppLogo()}
        </button> 
      </Link>
    );
  }

  Button.propTypes = {
    text: PropTypes.string,
    wpp: PropTypes.bool,
    action: PropTypes.string
  };
  Button.defaultProps = {
    text: 'Default Text',
    wpp: false,
    action: "/list"
  };
  
export default Button;