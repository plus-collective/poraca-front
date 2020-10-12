import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './district-selector.css';

class DistrictSelector extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="select">
                <select onChange={this.props.action} value={this.props.selectedDistrict}>
                    <option>Seleccionar</option>
                    {
                        this.props.districts.map(
                            (district,id) =>{
                                return  <option key={id}>{district}</option>
                            }
                        )
                    }
                </select>
            </div>
        );
    }
  }

  DistrictSelector.propTypes = {
    action: PropTypes.func,
    districts: PropTypes.array,
    selectedDistrict: PropTypes.string
  };
  DistrictSelector.defaultProps = {
    districts: [
           "Palermo"
        ],
  };
  
export default DistrictSelector;