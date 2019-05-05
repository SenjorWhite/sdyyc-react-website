import React, { Component } from 'react';
import '../styles/NavBar.scss';

class NavBar extends Component {
    render() {
        return (
            <div className="NavBar">
                <ul className="nav-ul">
                    <li className="nav-li" style={{ float: "left" }}>
                        <button className="nav-button" onClick={this.props.openSideBar}>
                            Home
                        </button>
                    </li>
                    <li className="nav-li" style={{ float: "left" }}><a href="/" className="title"> Software Developers in YYC</a></li>
                    <li className="nav-li" >
                        <button className="nav-button">
                            <i className="material-icons" >person</i>
                        </button>
                    </li>
                </ul>
            </div>
        );
    }
}

export default NavBar;