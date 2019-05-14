import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
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

    renderAuthButton() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <button className="auth" onClick={() => { window.location.href = "/api/auth/google" }}>
                        Sign in with Google
                    </button>
                );
            default:
                return (
                    <button className="auth" onClick={() => { window.location.href = "/api/auth/logout" }}>
                        Sign out
                    </button>
                )
        }
    }

    renderDonateButton() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return;
            default:
                return (
                    <div className="donate-div">
                        <StripeCheckout
                            name="Donate Senjor The Poor"
                            description="please give him some money."
                            amount={10000}
                            currency="CAD"
                            locale="en"
                            stripeKey={process.env.REACT_APP_STRIPE_KEY}
                            token={token => this.props.sendStripeToken(token)}
                        >
                            <button className="donate">
                                Donate Senjor
                            </button>
                        </StripeCheckout>
                        <button className="why">
                            ?
                        </button>
                    </div>
                )
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
                {this.renderDonateButton()}
                {this.renderAuthButton()}
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