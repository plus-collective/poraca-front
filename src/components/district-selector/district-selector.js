import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './district-selector.css';

class DistrictSelector extends Component {

    render() {
        return (
            <div className="select">
                <select onChange={this.props.handleDistrictChange} value={this.props.selectedDistrict}>
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
    handleDistrictChange: PropTypes.func,
    districts: PropTypes.array,
    selectedDistrict: PropTypes.string
};
DistrictSelector.defaultProps = {
    districts: [
        "Palermo"
    ],
};
  
export default DistrictSelector;