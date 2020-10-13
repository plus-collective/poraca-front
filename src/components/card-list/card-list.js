import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

import CardImage from '../card/card-image'
import CardContent from '../card/card-content'

import Card from '../card'



class CardList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            linkTo : "",
        }
    }
    componentDidMount() {  
        switch (this.props.opt){
            case "biz":
                this.setState({      
                    linkTo : "/biz/",
                });
                break;
            case "product":
                this.setState({      
                    linkTo : "/biz/",
                });
                break;
            default:
                break;
        }
    }

    render() {

        const footerSpace = {
            height: "100px",
        };

        let data;
        if(this.props.selectedDistrict === "Todos"){
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
                                opt = {this.props.opt}
                                name = {element.name}
                                slug = {element.slug}
                                link = {this.state.linkTo}
                                logo = {element.logo}
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