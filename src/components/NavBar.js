import React, { Component } from 'react';
import '../styles/NavBar.scss';

class NavBar extends Component {
    render() {
        return (
            <div className="NavBar">
                <ul className="nav-ul">
                    <li>
                        <button>Home</button>
                    </li>
                    <li>
                        <button>Tutorial</button>
                    </li>
                    <li>
                        <button>Events</button>
                    </li>
                    <li>
                        <button>Join us</button>
                    </li>
                    <li>
                        <button>Contact</button>
                    </li>
                    <li className="title"><span>Software Developers in YYC</span></li>
                    <li className="right" >
                        <button className="user-button">
                            <i className="material-icons" >person</i>
                        </button>
                    </li>
                </ul>
            </div>
        );
    }
}

export default NavBar;