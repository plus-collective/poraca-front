import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Button from '../../components/button';

class Popup extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {  
        //Add toggle the dropdown
        const modal = document.querySelector('.modal')
        const closeButton = document.querySelector('.delete')
        const reqButton = document.querySelector('.modal .xaca-btn')
        const handleToggle = () => {
            modal.classList.toggle('is-active');
        };
        closeButton.onclick = () => handleToggle();
        reqButton.onclick = () => handleToggle();
    }

    render() {
        return (
            <div className="modal is-active">
                <div 
                    className="modal-background" 
                    role="button"
                    onClick={() => this.props.history.goBack()}
                ></div>
                <div className="modal-card"
                    role="button"
                    onClick={e => e.stopPropagation()}
                    >
                    <header className="modal-card-head">
                        <p className="modal-card-title">{this.props.title}</p>
                        <button className="delete" aria-label="close"></button>
                    </header>
                    <section className="modal-card-body">
                        HOLA
                    </section>
                    <footer className="modal-card-foot ">
                        <Button text="PEDIR" wpp></Button>
                    </footer>
                </div>
            </div>
        );
    }
  }

Popup.propTypes = {
    title: PropTypes.string,
    wpp: PropTypes.bool,
    data: PropTypes.object
};
Popup.defaultProps = {
    title: 'Default modal title',
    wpp: false,
    data: {}
};
  
export default withRouter(Popup);