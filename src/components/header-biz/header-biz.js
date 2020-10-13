import React from 'react';
import PropTypes from 'prop-types';



import './header-biz.css';

function HeaderBiz(props) {
    return (
    <div>
      <div class="hero is-primary">
        <div class="hero-body pb-4">
          <div class="container is-centered has-text-centered is-vcentered">
            <div className="wrapper-biz-img">
              <figure class="image is-square">
                <img class="is-rounded" src={props.bizLogo}></img>
              </figure>
            </div>
            <h1 className="title is-4 is-centered py-4">{props.bizName}</h1>
          </div>
        </div>
      </div>
      <div className="has-text-centered px-5 pt-6 ">
          {props.bizSched && <h2 className="subtitle is-5"> {props.bizSched}</h2>}
          {props.bizSched && <hr className="line"></hr>}
      </div>

    </div>
    ) }

HeaderBiz.propTypes = {
  bizName: PropTypes.string,
  bizSched: PropTypes.string,
  bizLogo: PropTypes.string,
};

HeaderBiz.defaultProps = {
  bizName: "Plus Collective",
  bizSched: null,
  bizLogo: "http://api.xaca.delivery:8000/media/emprens/59498491/59498491.jpeg",
};

export default HeaderBiz;