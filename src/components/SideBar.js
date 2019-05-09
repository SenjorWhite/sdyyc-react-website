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
                <button onClick={this.getEvents}>EDIT EVENTS</button>
                <span className="gap"></span>
                <button className="auth">Sign in with Google</button>
            </div >
        );
    }

    getEvents() {
        fetch("/api/events", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(res => res.json())
            .then(events => {
                console.log(events);
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export default SideBar;