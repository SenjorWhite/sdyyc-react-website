import React, { Component } from 'react';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import MainContent from './components/MainContent';
import './styles/App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideBarEnabled: false
    }
  }
  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
        </header>
        <NavBar openSideBar={this.openSideBar} />
        <SideBar showList={this.state.sideBarEnabled} closeSideBar={this.closeSideBar} />
        <MainContent />
      </div>
    );
  }

  openSideBar = () => {
    this.setState({ sideBarEnabled: true });
  }

  closeSideBar = () => {
    this.setState({ sideBarEnabled: false });
  }
}

export default App;
