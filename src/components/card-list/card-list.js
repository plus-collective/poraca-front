import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

import CardImage from '../card/card-image'
import CardContent from '../card/card-content'

import Card from '../card'

import './card-list.css';

class CardList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            linkTo : "",
            classImage: "",
            renderBtnProduct: null,
            btnProduct: null,
        }
    }
    componentDidMount() {  
        switch (this.props.opt){
            case "biz":
                this.setState({      
                    linkTo : "/biz/",
                    styleImg: "card-img-biz",
                    btnProduct: false,
                });
                break;
            case "product":
                this.setState({      
                    linkTo : "/biz/",
                    btnProduct: true
                });
                break;
            default:
                break;
        }
    }

    render() {

        const renderBtnProduct = () => {
            if (this.state.btnProduct) {
                return (
                    <div>
                        <button className="button is-small is-danger is-light">
                            <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <button className="button is-small is-success is-light">
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                    </div>
                )
            }              
        }

        const footerSpace = {
            height: "100px",
        };

        let data;
        if(this.props.selectedDistrict === null){
            data = this.props.data;
        }else {
            data = this.props.data.filter(element => element.barrio === this.props.selectedDistrict);
        }
        
        return (
            <div>
                {
                data.map(
                    (element) => {
                        return ( 
                            <Card
                                name = {element.name}
                                slug = {element.slug}
                                link = {this.state.linkTo}
                                logo = {element.logo}
                                style = "biz"
                                data = {element}
                                handlerSelectBiz = {this.props.handlerSelectBiz}
                            ></Card>
                        )
                    })
                }   
                {this.state.btnProduct && <div style={footerSpace}></div>}
            </div>
        );
    }
  }

CardList.propTypes = {
    data: PropTypes.array,
    opt: PropTypes.oneOf(['biz', 'product']),
};
CardList.defaultProps = {
    data: [],
    opt: "biz"
};
  
export default CardList;