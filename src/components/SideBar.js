import React, { Component } from 'react';
import '../styles/SideBar.scss';

class SideBar extends Component {
    getEnableState() {
        if (this.props.showList) {
            return { width: "300px" };
        } else {
            return { width: 0 };
        }
    }

    render() {
        return (
            <div className="SideBar" >
                <button onClick={this.props.closeSideBar}>&lt;</button>
                <ul className="side-ul">
                    <li className="side-li"><button className="side-button">Option 1</button></li>
                    <li className="side-li"><button className="side-button">Option 2</button></li>
                    <li className="side-li"><button className="side-button">Option 3</button></li>
                    <li className="side-li"><button className="side-button">Option 4</button></li>
                </ul>
            </div >
        );
    }
}

export default SideBar;