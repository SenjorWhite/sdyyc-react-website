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
      sideBarEnabled: false,
      auth: null
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
        <NavBar
          auth={this.state.auth}
          openSideBar={this.switchSideBar}
          sideBarEnabled={this.state.sideBarEnabled}
          setCurrentPage={this.setCurrentPage}
        />
        <MainContent
          auth={this.state.auth}
          currentPage={this.state.currentPage}
          sideBarEnabled={this.state.sideBarEnabled}
          closeSideBar={this.closeSideBar}
        />
        <Footer />
      </div>
    );
  }

  async componentDidMount() {
    let res = await fetch("/api/auth/current_user", { method: "GET" })
    console.log(res);
    let userInfo = await res.json();
    console.log(userInfo);
    this.setState({
      auth: userInfo
    })
  }

  setCurrentPage = (event) => {
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
