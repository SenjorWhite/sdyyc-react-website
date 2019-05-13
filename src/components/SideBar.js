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

    async login() {
        let res = await fetch("/api/auth/google");
        let user = await res.json();
        console.log(user);
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
                <button className="auth" onClick={this.login}>Sign in with Google</button>
                <a className="auth" href="/api/auth/google">Sign in with Google</a>
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