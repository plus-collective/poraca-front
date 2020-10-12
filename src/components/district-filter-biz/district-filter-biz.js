import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

import './district-filter-biz.css';

class DistrictFilterBiz extends Component {

    constructor(props) {
        super(props);
        this.state = {
            toggleArrow : false
        }
    }

    componentDidMount() {  
        // Add toggle the dropdown
        const dropdown = document.querySelector('.dropdown')
        const handleToggle = () => {
            dropdown.classList.toggle('is-active');
            this.setState({
                toggleArrow : !this.state.toggleArrow
            });
        };
        dropdown.onclick = () => handleToggle();
    }

    render() {

        // changue filter with the correct url
        let placesValues = this.props.places.map(
            function(name) {
                return { name: name, filter: "http://" + name };
            }
        );
        const renderArrow = ()=>{
            if(this.state.toggleArrow){
              return <FontAwesomeIcon icon={faAngleUp} />
            } else{
              return <FontAwesomeIcon icon={faAngleDown} />
            }
          }

        return (
            <div className="dropdown">
                <div className="dropdown-trigger">
                    <button className="button  is-fullwidth" aria-haspopup="true" aria-controls="dropdown-menu">
                    <span>Seleccionar Barrio</span>
                    <span className="icon is-small">
                        {renderArrow()}
                    </span>
                    </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                        {
                            placesValues.map(
                                function(place) {
                                    return  <a key={place.name} href={place.filter} className="dropdown-item">
                                                {place.name}
                                            </a>
                                }
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }
  }

  DistrictFilterBiz.propTypes = {
    places: PropTypes.array
  };
  DistrictFilterBiz.defaultProps = {
    places: [
           "Palermo",
           "Recoleta",
           "Almagro",
           "Balvanera",
           "Colegiales"
        ],
  };
  
export default DistrictFilterBiz;