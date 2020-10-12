import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

import './district-filter-home.css';

class DistrictFilterHome extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let placesValues = this.props.places.map(
            function(name) {
                return { name: name, filter: "http://" + name };
            }
        );
        
        return (
            <div class="select">
                <select>
                    <option>Seleccionar</option>
                    {
                        placesValues.map(
                            function(place) {
                                return  <option>{place.name}</option>
                            }
                        )
                    }
                </select>
            </div>
        );
    }
  }

  DistrictFilterHome.propTypes = {
    places: PropTypes.array
  };
  DistrictFilterHome.defaultProps = {
    places: [
           "Palermo",
           "Recoleta",
           "Almagro",
           "Balvanera",
           "Colegiales"
        ],
  };
  
export default DistrictFilterHome;