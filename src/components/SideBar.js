import React, { Component } from 'react';
import '../styles/SideBar.scss';

class SideBar extends Component {
    getEnableState() {
        if (this.props.sideBarEnabled) {
            return { width: "15vw" };
        } else {
            return { width: 0 };
        }
    }

    render() {
        return (
            <div className="SideBar" style={this.getEnableState()} >
                    <button className="closeButton" onClick={this.props.closeSideBar}>
                        <i className="material-icons">
                            clear_all
                        </i>
                    </button>
                    <button>EDIT PROFILE</button>
                    <button>EDIT EVENTS</button>
                    <span className="gap"></span>
                    <button className="auth">Sign in with Google</button>
            </div >
        );
    }
}

export default SideBar;