import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/fentity.css'


class Fentity extends Component {
    
    render() {
        const fentitiesCat = this.props.match.params.fentities
        const fentitiesName = this.props.match.params.name
        const fentity = this.props.state[fentitiesCat].find(f => f.name === fentitiesName)
        console.log(this.props);
        return (
            <div id="creature-container">
                <Link to={`../${fentitiesCat}`}>Back</Link>
                <h1>{fentity.name}</h1>
                <img src={fentity.imgUrl} alt=""/>
                <div className="title">Power:</div>
                <div className="power text"> {fentity.power}</div>
                <div className="other text">{fentity.other}</div>
            </div>
        )
    }
}

export default Fentity;
