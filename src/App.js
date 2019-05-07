import React, { Component } from 'react';
import NavBar from './components/NavBar';
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
          <link href="https://fonts.googleapis.com/css?family=Architects+Daughter" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet"></link>
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
        </header>
        <NavBar openSideBar={this.switchSideBar} setCurrentPage={this.setCurrentPage} />
        <MainContent
          currentPage={this.state.currentPage}
          sideBarEnabled={this.state.sideBarEnabled}
          closeSideBar={this.closeSideBar}
        />
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

  switchSideBar = () => {
    this.setState({ sideBarEnabled: !this.state.sideBarEnabled });
  }

  closeSideBar = () => {
    this.setState({ sideBarEnabled: false });
  }
}

export default App;
