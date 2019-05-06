import React, { Component } from 'react';
import '../styles/NavBar.scss';

class NavBar extends Component {


    render() {
        return (
            <div className="NavBar">
                <ul className="nav-ul">
                    <li>
                        <button onClick={this.props.setCurrentPage} value="Home">Home</button>
                    </li>
                    <li>
                        <button onClick={this.props.setCurrentPage} value="Tutorial">Tutorial</button>
                    </li>
                    <li>
                        <button onClick={this.props.setCurrentPage} value="Events">Events</button>
                    </li>
                    <li>
                        <button onClick={this.props.setCurrentPage} value="JoinUs">Join us</button>
                    </li>
                    <li>
                        <button onClick={this.props.setCurrentPage} value="Contact">Contact</button>
                    </li>
                    <li className="title"><span>Software Developers in YYC</span></li>
                    <li className="right" >
                        <button className="user-button">
                            <i className="material-icons" >person</i>
                        </button>
                    </li>
                </ul>
            </div >
        );
    }
}

export default NavBar;