import React from 'react';
// import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './tags.css';

function Tags(props){



    return (
        <div class="tags are-medium are-rounded m-3 ">
          {
            props.namesTag.map(
              (name) => {
                return <a><span class="tag is-danger is-light mx-1">{name}</span></a>;
              })
          }
        </div>
      );
}

Tags.propTypes = {
  namesTag: PropTypes.array
};
Tags.defaultProps = {
  namesTag: [
          "Todos",
          "Dulce",
          "Salado"
      ],
};

export default Tags;