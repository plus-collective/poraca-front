import React from 'react';

import Button from '../../components/button';
import DistrictFilterHome from '../../components/district-filter-home';
import DistrictFilterBiz from '../../components/district-filter-biz';
import Popup from '../../components/popup';
import ListElement from '../../components/list-element';
import Tags from '../../components/tags';

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
            <DistrictFilterHome></DistrictFilterHome>
          </div>
          <div className="block">
            <Button text="BUSCAR" action="/bizslist"></Button>
          </div>
        </div>
      </div>
    </section>


      
    //   {/* <Popup></Popup> */}
    //   {/* <Tags></Tags>
    //   <ListElement opt="biz"></ListElement> */}
    //   {/* <ListElement opt="product"></ListElement> */}
    // </div>
  );
}

export default Home;