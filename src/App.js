import React, { Component } from 'react';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './styles/App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "Home",
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
        <NavBar openSideBar={this.openSideBar} setCurrentPage={this.setCurrentPage} />
        <SideBar showList={this.state.sideBarEnabled} closeSideBar={this.closeSideBar} />
        <MainContent currentPage={this.state.currentPage} />
        <Footer />
      </div>
    );
  }

  setCurrentPage = (event) => {
    console.log(event.target);
    this.setState({
      currentPage: event.target.value
    })
  }

  openSideBar = () => {
    this.setState({ sideBarEnabled: true });
  }

  closeSideBar = () => {
    this.setState({ sideBarEnabled: false });
  }
}

export default App;
