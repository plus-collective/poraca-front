import React from 'react';

import Button from '../../components/button';
import DistrictSelector from '../../components/district-selector';


import './home.css';

function Home(props){
  return (
    <section className="hero is-primary is-fullheight">
      <div className="hero-body">
        <div className="container p-5 has-text-centered is-vcentered">
          <h1 className="title is-3">
            ¿En que barrio estas?
          </h1>
          <div className="block">
            <DistrictSelector 
              handleDistrictChange={props.handleDistrictChange}
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