import React from 'react';
import DatePicker from 'react-datepicker';
import '../../styles/CreateEvent.scss';

function CreateForm(props) {
    return (
        <div className="CreateEvent">
            <div className="create-form">
                <label htmlFor="eventTitle">Title:</label>
                <input type="text" id="eventTitle" name="title" placeholder="The event title.." />
                <label htmlFor="datePicker">Date:</label>
                <DatePicker id="datePicker"
                    selected={props.startDate}
                    onChange={props.handleDateChange}
                    showTimeSelect
                    dateFormat="Pp"
                    timeIntervals="10"
                />
                <label htmlFor="content">Content:</label>
                <textarea placeholder="Describe your event.." />
                <label htmlFor="invitee">Invitee:</label>
                <div className="invitees">
                    {props.renderInvitees()}
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

export default CreateForm;
