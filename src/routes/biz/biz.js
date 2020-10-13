import React from 'react';
import PropTypes from 'prop-types';

import Popup from '../../components/popup';
import ListElement from '../../components/card-list';
import HeaderBiz from '../../components/header-biz';
import FooterBiz from '../../components/footer-biz';

function Biz(props) {
    return (
      <div>
        <HeaderBiz 
          bizName={props.bizData.name} 
          bizSched={props.bizData.horario}
          bizLogo={props.bizData.logo}
        ></HeaderBiz>
        <div class="container">
          <ListElement opt="product"></ListElement>
          <FooterBiz></FooterBiz>
        </div>
      </div>
    ) }
    

Biz.propTypes = {
    data: PropTypes.object,
};
Biz.defaultProps = {
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
export default Biz;