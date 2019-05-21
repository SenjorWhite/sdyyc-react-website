import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SideBar from './SideBar';
import '../styles/NavBar.scss';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sideBarEnabled: false
        }
    }

    setWithSideBar() {
        if (this.props.sideBarEnabled) {
            return { backgroundColor: "#545893" };
        } else {
            return {};
        }
    }

    renderUserIcon() {
        switch (this.props.auth) {
            case null:
                return <i className="material-icons" >person</i>;
            case false:
                return <i className="material-icons" >person</i>;
            default:
                return (
                    <img src={this.props.auth.picture} alt={this.props.auth.displayName} />
                );
        }
    }

    renderUserName() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return;
            default:
                return (
                    <span style={{ padding: "5px 10px" }}>{this.props.auth.displayName}</span>
                );
        }
    }

    renderUserCredits() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return;
            default:
                return (
                    <li className="right">
                        <span className="credits">Credits: {this.props.auth.credits}</span>
                    </li>
                );
        }
    }

    switchSideBar = () => {
        this.setState({ sideBarEnabled: !this.state.sideBarEnabled });
    }

    render() {
        return (
            <div className="NavBar">
                <ul className="nav-ul">
                    <li>
                        <Link className="nav-link" to="/home" value="Tutorial">Home</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/tutorial" value="Tutorial">Tutorial</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/events" value="Tutorial">Events</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/joinus" value="Tutorial">Join Us</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/contact" value="Tutorial">Contact</Link>
                    </li>
                    <li className="title"><span>Software Developers in YYC</span></li>
                    {this.renderUserCredits()}
                    <li className="right" >
                        <button className="user-button" style={this.setWithSideBar()} onClick={this.switchSideBar}>
                            {this.renderUserName()}
                            {this.renderUserIcon()}
                        </button>
                    </li>
                </ul>
                <SideBar
                    auth={this.props.auth}
                    sideBarEnabled={this.state.sideBarEnabled}
                    closeSideBar={this.switchSideBar}
                    sendStripeToken={this.props.sendStripeToken}
                />
            </div >
        );
    }
}

export default NavBar;