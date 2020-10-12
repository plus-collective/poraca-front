import React from 'react';

import Button from '../../components/button';
import DistrictFilterHome from '../../components/district-filter-home';
import DistrictFilterBiz from '../../components/district-filter-biz';
import Popup from '../../components/popup';
import ListElement from '../../components/list-element';
import Tags from '../../components/tags';
import HeaderBiz from '../../components/header-biz';
import FooterBiz from '../../components/footer-biz';

import './confirm.css';

function Confirm(props){
  return (
    <div>
      <HeaderBiz
        bizName={props.bizData.name} 
        ></HeaderBiz>
      <div class="container px-5 ">
            <h2 className="title is-4 has-text-centered"> Tu pedido</h2>

            <div class="columns is-mobile px-5 is-size-5">
                <div class="column is-8 ">
                    <dl >
                        <li>Falafel</li>
                        <li>Pepsi</li>
                        <li>Pan de pita</li>
                    </dl>
                </div>
                <div class="column is-4">
                    <ul>
                        <li>600</li>
                        <li>170</li>
                        <li>50</li>
                    </ul>
                </div>
            </div>
            <hr className="line"></hr>
            <div class="columns is-mobile px-5 is-size-5">
                <div class="column is-8 ">
                    <ul >
                        <li>TOTAL:</li>
                    </ul>
                </div>
                <div class="column is-4">
                    <ul>
                        <li>600</li>
                    </ul>
                </div>
            </div>
            <div className="block">
            <Button text="PEDIR" action="/confirm" wpp></Button>
            </div>
          
      </div>
    </div>


      
    //   {/* <Popup></Popup> */}
    //   {/* <Tags></Tags>
    //   <ListElement opt="biz"></ListElement> */}
    //   {/* <ListElement opt="product"></ListElement> */}
    // </div>
  );
}

Confirm.defaultProps = {
    bizData: 
        {
            "pk": 1,
            "name": "Emprendimiento 1",
            "tag": "alimento",
            "subtag": "vegan",
            "descripcion": "Descripcion empemprendimiento 1",
            "logo": "http://api.xaca.delivery:8000/media/emprens/59498491/59498491.jpeg",
            "cont_mail": "test@test.com",
            "cont_insta": "testinstagram",
            "cont_whatsapp": "1533875000",
            "direccion": "Calle falsa 123",
            "barrio": "Almagro",
            "ciudad": "CABA",
            "cobertura": "Test",
            "horario": "LUN a VIE de 18hs a 23:00",
            "envio": "NO",
            "owner": "test@admin"
        }
    };

export default Confirm;