import React, { Component } from 'react';
import Home from './Home';
import Tutorial from './Tutorial';
import Events from './Events/Events';
import CreateEvent from './Events/CreateEvent';
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
        switch (this.props.match.params.currentPage) {
            case "home":
                currentPage = <Home ClassName="article" />;
                break;
            case "tutorial":
                currentPage = <Tutorial ClassName="article" />;
                break;
            case "events":
                if (this.props.match.params.subPage === "create")
                    currentPage = <CreateEvent ClassName="article" setAuth={this.props.setAuth} />;
                else
                    currentPage = <Events ClassName="article" auth={this.props.auth}/>;
                break;
            case "joinus":
                currentPage = <JoinUs ClassName="article" />;
                break;
            case "contact":
                currentPage = <Contact ClassName="article" />;
                break;
            default:
                currentPage = <Home ClassName="article" />;
        }
        return currentPage;
    }

    render() {
        return (
            <div className="MainContent">
                {console.log("Current Page: %s, Sub Page: %s", this.props.match.params.currentPage, this.props.match.params.subPage)}
                {this.showCurrentPage()}
            </div>
        );
    }
}

export default MainContent;