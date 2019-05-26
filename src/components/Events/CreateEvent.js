import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CreateForm from './CreateForm';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date(),
            title: "",
            content: "",
            formState: null,
            invitees: null
        }
    }

    handleDateChange = (date) => {
        this.setState({
            startDate: date
        });
    }

    getInvitees = async () => {
        let res = await fetch("/api/event/members");
        let users = await res.json();

        let invitees = users.map((invitee, index) => {
            invitee.invite = false;
            invitee.index = index;
            return invitee;
        })

        return invitees;
    }

    async componentDidMount() {
        let invitees = await this.getInvitees();
        this.setState({
            invitees: invitees
        })
    }

    checkInvitation(index) {
        let invitees = this.state.invitees;
        invitees[index].invite = !invitees[index].invite;
        this.setState({
            invitees: invitees
        });
    }

    renderInvitees = () => {
        let invitees = this.state.invitees;
        if (invitees) {
            invitees = this.state.invitees.map((invitee, index) => {
                return (
                    <div className="invitee" key={index}>
                        <div className="checkbox">
                            <button onClick={() => this.checkInvitation(invitee.index)}>
                                <img src={invitee.picture} alt={invitee.displayName}></img>
                            </button>
                            {invitee.invite &&
                                <i className="material-icons">
                                    done
                                </i>
                            }
                        </div>
                        <label>
                            {invitee.displayName}
                        </label>
                    </div>
                )
            });
        }
        return invitees;
    }

    handleClickBack = () => {
        this.setState({
            formState: "back"
        });
    }

    handleClickNext = () => {
        console.log("clicked next");
        this.setState({
            formState: "next"
        });
    }

    handleTitleChange = (event) => {
        this.setState({
            title: event.target.value
        });
    }

    handleContentChange = (event) => {
        this.setState({
            content: event.target.value
        })
    }

    handleClickStay = () => {
        this.setState({
            formState: null
        });
    }

    listInvitees = () => {
        return this.state.invitees.map((invitee, index) => {
            if (invitee.invite) {
                return (
                    <div className="invitee" key={index}>
                        <img className="picture" src={invitee.picture} alt={invitee.displayName} />
                        <div className="name">{invitee.displayName}</div>
                    </div>
                )
            }
            return null;
        });
    }

    renderAlert = () => {
        if (this.state.formState === "back") {
            return (
                <div className="back-alert">
                    <div className="form">
                        <label>Are you sure you want to go back and drop this unfinished form?</label>
                        <div className="buttons">
                            <Link className="drop" to="/events" >Drop</Link>
                            <button onClick={this.handleClickStay}>Stay</button>
                        </div>
                    </div>
                </div>
            );
        } else if (this.state.formState === "next") {
            return (
                <div className="next-confirm">
                    <div className="form">
                        <label className="title">
                            PLEASE DOUBLE CHECK THE INFORMATION
                        </label>
                        <div className="information">
                            <label>Title:</label>
                            <p>{this.state.title}</p>
                            <label>Event Date:</label>
                            <p className="date">
                                {this.state.startDate.toLocaleString()}
                            </p>
                            <label>Content:</label>
                            <p className="content">{this.state.content}</p>
                            <label>Invitee(s):</label>
                            <div className="invitees">
                                {this.listInvitees()}
                            </div>
                        </div>
                        <div className="buttons">
                            <button onClick={this.handleClickStay}>Modify</button>
                            <Link className="confirm" to="/events" onClick={this.sendCreateEventInfo}>Confirm</Link>
                        </div>
                    </div>
                </div>
            );
        }
    }

    getInviteeIDList = () => {
        let IDs = [];
        this.state.invitees.forEach((invitee, index) => {
            if (invitee.invite) {
                IDs.push(invitee._id);
            }
        })
        return IDs;
    }

    sendCreateEventInfo = async () => {
        console.log("clicked confirm");
        console.log(this.props.auth);
        let eventInfo = {
            title: this.state.title,
            body: this.state.content,
            eventDate: this.state.startDate,
            attendees: this.getInviteeIDList()
        }

        let res = await fetch("/api/event/create", {
            method: "POST",
            body: JSON.stringify(eventInfo),
            headers: { 'Content-Type': 'application/json' }
        });

        let userInfo = await res.json();
        this.props.setAuth(userInfo);
    }

    render() {
        return (
            <div>
                {this.renderAlert()}
                <CreateForm
                    title={this.state.title}
                    handleTitleChange={this.handleTitleChange}
                    startDate={this.state.startDate}
                    handleDateChange={this.handleDateChange}
                    content={this.state.content}
                    handleContentChange={this.handleContentChange}
                    renderInvitees={this.renderInvitees}
                    handleClickBack={this.handleClickBack}
                    handleClickNext={this.handleClickNext}
                />
            </div>
        )
    }
}