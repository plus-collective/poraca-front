import React from 'react';
// import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './tag-list.css';

function Tags(props){
    return (
        <div className="tags are-medium are-rounded m-3">
          {
            props.tags.map(
              (name) => {
                return <button 
                type="button"
                className="link-button" 
                >
                  <Tag handlerSelectTag={props.handlerSelectTag} name={name}></Tag>
                </button>
              })
          }
        </div>
      );
}

function Tag(props){
  return <span className="tag is-danger is-light mx-1" onClick={() => props.handlerSelectTag(props.name)}>{props.name}</span>;
}

Tags.propTypes = {
  tags: PropTypes.array,
  handlerSelectTag: PropTypes.func
};

export default Tags;