import React, { Component } from 'react';
import CreateForm from './CreateForm';
import "react-datepicker/dist/react-datepicker.css";

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

    handleSubmit = () => {
        console.log("Submit");
    }

    handleChange = (date) => {
        this.setState({
            startDate: date
        });
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
            <CreateForm
            startDate={this.state.stateDate}
            handleChange={this.handleDateChange}
            renderInvitees={this.renderInvitees}
        />
        );
    }
}