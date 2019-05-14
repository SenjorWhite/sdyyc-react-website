import React from 'react';
import Iframe from 'react-iframe';
import '../styles/JoinUs.scss';

function JoinUs() {
    return (
        <div className="JoinUs">
            <Iframe url="https://www.meetup.com/Software-Developers-Learning-Together/" />
        </div>
    )
}

export default JoinUs;