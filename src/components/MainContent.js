import React, { Component } from 'react';
import Home from './Home';
import Tutorial from './Tutorial';
import Events from './Events';
import JoinUs from './JoinUs';
import Contact from './Contact';

class MainContent extends Component {
    showCurrentPage() {
        let currentPage;
        switch (this.props.currentPage) {
            case "Home":
                currentPage = <Home />;
                break;
            case "Tutorial":
                currentPage = <Tutorial />;
                break;
            case "Events":
                currentPage = <Events />;
                break;
            case "JoinUs":
                currentPage = <JoinUs />;
                break;
            case "Contact":
                currentPage = <Contact />;
                break;
            default:
                currentPage = <div>Current Page not found.</div>;
        }
        return currentPage;
    }

    render() {
        return (
            this.showCurrentPage()
        );
    }
}

export default MainContent;