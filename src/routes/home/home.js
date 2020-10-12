import React from 'react';

import Button from '../../components/button';
import DistrictSelector from '../../components/district-selector';


import './home.css';

function Home(props){
  return (
    <section class="hero is-primary is-fullheight">
      <div class="hero-body">
        <div class="container p-5 has-text-centered is-vcentered">
          <h1 class="title is-3">
            ¿En que barrio estas?
          </h1>
          <div className="block">
            <DistrictSelector 
              action={props.handleDistrictChange}
              districts={props.districts}
              selectedDistrict={props.selectedDistrict}
              >
              </DistrictSelector>
          </div>
          <div className="block">
            <Button text="BUSCAR" action="/bizslist"></Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;