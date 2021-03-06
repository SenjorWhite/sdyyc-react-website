import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Events.scss';

class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            pivot: null
        }
        this.showEventDetails = this.showEventDetails.bind(this);
    }

    getPivotStyle(index) {
        //console.log("index:" + index + " pivot:" + this.state.pivot);
        if (index === parseInt(this.state.pivot)) {
            return { minWidth: "80vw" };
        } else {
            return { minWidth: "30vw" };
        }
    }

    async componentDidMount() {
        let response = await fetch("/api/events");
        let events = await response.json();
        this.setState({
            events: events
        })
    }

    showEvents() {
        let events = this.state.events.map((event, index) =>
            <li className="event-card" key={index}>
                <ul style={this.getPivotStyle(index)}>
                    <li className="event-title">{event.title}</li>
                    <li className="event-date">{new Date(event.eventDate).toLocaleString()}</li>
                    <li className="event-content">{event.content}</li>
                    <li className="event-rsvp">{this.createRSVPButton(event, index)}</li>
                </ul>
            </li>
        )
        return events;
    }

    showEventDetails(event) {
        if (this.state.pivot === parseInt(event.target.value)) {
            this.setState({
                pivot: null
            });
        } else {
            this.setState({
                pivot: parseInt(event.target.value)
            });
        }
    }

    createRSVPButton(event, index) {
        let button;
        switch (event.rsvp) {
            case "wait":
                button = <button className="rsvp-wait">Add into Waiting List</button>
                break;
            case "allow":
                button = <button className="rsvp-allow">Join Event</button>
                break;
            default:
                button = <button onClick={this.showEventDetails} value={index} className="rsvp-past">Finished (Review)</button>
        }
        return button;
    }

    renderCreateButton = () => {
        if (this.props.auth) {
            return (
                <Link to="/events/create" className="add-button" style={{ boxShadow: "5px 5px 10px 1px rgba(0, 0, 0, 0.75)" }}>
                    <div className="add-button-content">
                        <i className="material-icons">
                            create
                        </i>
                    </div>
                </Link>
            )
        }
    }

    render() {
        return (
            <div className="Events">
                <h1>Our Events</h1>
                <ul className="event-list">
                    {this.showEvents()}
                </ul>
                {this.renderCreateButton()}
            </div >
        );
    }
}

export default Events;