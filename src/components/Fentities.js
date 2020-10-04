import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../styles/fentity-directory.css'

class Fentities extends Component {
    render() {
        const fentitiesCat = this.props.match.params.fentities
        const fentities = this.props.state[fentitiesCat]
        return (
            <div>
                <h1 id="fentities-title">{fentitiesCat}</h1>
                <div id="fentities-container">
                    {fentities.map(f => {
                        return (
                            <Link to={`/directory/${fentitiesCat}/${f.name}`}>
                                <div className="mini">
                                    <img className="directory-img" src={f.imgUrl} alt="" />
                                    <span>{f.name}</span>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>)
    }
}

export default Fentities