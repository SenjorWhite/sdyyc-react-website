import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import '../../styles/CreateEvent.scss';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stateDate: new Date()
        }
    }

    handleChange = (date) => {
        this.setState({
            startDate: date
        });
    }

    render() {
        return (
            <div className="CreateEvent">
                <form className="create-form">
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
                    <div className="button-container">
                        <button>
                            <i class="material-icons">
                                undo
                            </i>
                            Back
                        </button>
                        <button>Next
                        <i className="material-icons">
                                send
                        </i>
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}