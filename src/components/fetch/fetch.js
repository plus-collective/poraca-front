import React, {Component} from 'react';


// Class in chargue of retreive the information from de API
class Fetch extends Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}

export default Fetch;