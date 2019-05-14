import React, { Component } from 'react';
import SideBar from './SideBar';
import Home from './Home';
import Tutorial from './Tutorial';
import Events from './Events';
import JoinUs from './JoinUs';
import Contact from './Contact';

class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: null
        };
    }

    showCurrentPage() {
        let currentPage;
        switch (this.props.currentPage) {
            case "Home":
                currentPage = <Home ClassName="article" />;
                break;
            case "Tutorial":
                currentPage = <Tutorial ClassName="article" />;
                break;
            case "Events":
                currentPage = <Events ClassName="article" />;
                break;
            case "JoinUs":
                currentPage = <JoinUs ClassName="article" />;
                break;
            case "Contact":
                currentPage = <Contact ClassName="article" />;
                break;
            default:
                currentPage = <div>Current Page not found.</div>;
        }
        return currentPage;
    }

    render() {
        return (
            <div className="MainContent">
                {this.showCurrentPage()}
                <SideBar
                    auth={this.props.auth}
                    sideBarEnabled={this.props.sideBarEnabled}
                    closeSideBar={this.props.closeSideBar}
                    sendStripeToken={this.props.sendStripeToken}
                />
            </div>
        );
    }
}

export default MainContent;