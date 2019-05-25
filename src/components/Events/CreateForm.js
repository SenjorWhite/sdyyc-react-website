import React from 'react';
import DatePicker from 'react-datepicker';
import '../../styles/CreateEvent.scss';

function CreateForm(props) {
    return (
        <div className="CreateEvent">
            <div className="create-form">
                <label htmlFor="eventTitle">Title:</label>
                <input type="text" id="eventTitle" name="title" placeholder="The event title.." onChange={props.handleTitleChange} value={props.title} />
                <label htmlFor="datePicker">Date:</label>
                <DatePicker id="datePicker"
                    selected={props.startDate}
                    onChange={props.handleDateChange}
                    showTimeSelect
                    dateFormat="Pp"
                    timeIntervals="10"
                />
                <label htmlFor="content">Content:</label>
                <textarea id="content" placeholder="Describe your event.." onChange={props.handleContentChange} value={props.content} />
                <label htmlFor="invitee">Invitee(s):</label>
                <div className="invitees">
                    {props.renderInvitees()}
                </div>
                <div className="button-container">
                    <button className="back" onClick={props.handleClickBack}>
                        <i className="material-icons">
                            undo
                        </i>
                        Back
                    </button>
                    <button className="next" onClick={props.handleClickNext}>
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
