import React from 'react';

import Button from '../button';

import './footer-biz.css';

function FooterBiz(props){
  return (
      <footer className="footer fix-footer">
        <div class="columns is-mobile p-3 is-vcentered">
            <div class="column is-6">
                <TagsFooter></TagsFooter>
            </div>
            <div class="column">
                <Button text="CONFIRMAR" action="/confirm"></Button>
            </div>
        </div>
      </footer>
  );
}

function TagsFooter(props){
    return (
        <div>
            <div class="tags has-addons tags-initial">
                <span class="tag is-danger is-light has-text-weight-bold">Items</span>
                <span class="tag">2</span>
            </div>
            <div class="tags has-addons tags-initial">
                <span class="tag is-danger is-light has-text-weight-bold">Precio ($)</span>
                <span class="tag">  600</span>
            </div>
        </div>
  );
}

export default FooterBiz;