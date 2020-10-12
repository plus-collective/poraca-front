import React from 'react';

import DistrictFilterBiz from '../../components/district-filter-biz';
import Popup from '../../components/popup';
import ListElement from '../../components/list-element';
import Tags from '../../components/tags';

function BizsList(props) {
    return (
    // <h1>LISTA DE EMPRENDIMIENTOS</h1>
    <div>
      <div class="hero is-primary pt-6">
        <div class="hero-body pb-4">
          <div class="container has-text-centered is-vcentered">
              <DistrictFilterBiz></DistrictFilterBiz>
          </div>
        </div>
      </div>
      
      <Tags></Tags>

      <ListElement opt="biz"></ListElement>

    </div>

     ) }

export default BizsList;