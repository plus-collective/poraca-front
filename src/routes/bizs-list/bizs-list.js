import React from 'react';

import DistrictSelector from '../../components/district-selector';
import ListElement from '../../components/list-element';
import Tags from '../../components/tags';

function BizsList(props) {
    return (
    // <h1>LISTA DE EMPRENDIMIENTOS</h1>
    <div>
      <div class="hero is-primary pt-6">
        <div class="hero-body pb-4">
          <div class="container has-text-centered is-vcentered">
              {/* <DistrictFilterBiz></DistrictFilterBiz> */}
              <DistrictSelector
                action={props.handleDistrictChange}
                districts={props.districts}
                selectedDistrict= {props.selectedDistrict}
              ></DistrictSelector>
          </div>
        </div>
      </div>
      
      <Tags></Tags>

      <ListElement opt="biz"></ListElement>

    </div>

     ) }

export default BizsList;