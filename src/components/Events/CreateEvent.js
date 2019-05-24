import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import '../../styles/CreateEvent.scss';
import "react-datepicker/dist/react-datepicker.css";
import { updateExpression } from '@babel/types';

const Users = [
    {
        "_id": "5cd9c1ec779d877ae81b63a6",
        "displayName": "Senjor White",
        "picture": "https://lh5.googleusercontent.com/-Res8JrplBFg/AAAAAAAAAAI/AAAAAAAACFU/ATTokUN3Yck/photo.jpg"
    },
    {
        "_id": "5ce7652f3f2afd550ca65181",
        "displayName": "White Senjor",
        "picture": "https://lh6.googleusercontent.com/-Ig4gXW4-b1o/AAAAAAAAAAI/AAAAAAAAAAo/vgVKidemxU0/photo.jpg"
    }
]

export default class CreateEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stateDate: new Date(),
            invitees: null
        }
    }

    handleChange = (date) => {
        this.setState({
            startDate: date
        });
    }

    handleSubmit = () => {
        console.log("Submit");
    }

    getInvitees = () => {
        let invitees = Users.map((invitee, index) => {
            invitee.invite = false;
            invitee.index = index;
            return invitee;
        })

        return invitees;
    }

    componentDidMount() {
        let invitees = this.getInvitees();
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

    render() {
        return (
            <div className="CreateEvent">
                <div className="create-form">
                    <label htmlFor="eventTitle">Title:</label>
                    <input type="text" id="eventTitle" name="title" placeholder="The event title.." />
                    <label htmlFor="datePicker">Date:</label>
                    <DatePicker id="datePicker"
                        selected={this.state.startDate}
                        onChange={this.handleChange}
                        showTimeSelect
                        dateFormat="Pp"
                        timeIntervals="10"
                    />
                    <label htmlFor="content">Content:</label>
                    <textarea placeholder="Describe your event.." />
                    <label htmlFor="invitee">Invitee:</label>
                    <div className="invitees">
                        {this.renderInvitees()}
                    </div>
                    <div className="button-container">
                        <button className="back">
                            <i className="material-icons">
                                undo
                            </i>
                            Back
                        </button>
                        <button className="next">
                            Next
                        <i className="material-icons">
                                send
                        </i>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}