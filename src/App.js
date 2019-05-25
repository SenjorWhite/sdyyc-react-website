import React, { Component } from 'react';
import NavBar from './components/NavBar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import { BrowserRouter, Route } from 'react-router-dom';
import './styles/App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: null
    }
  }

  render() {
    return (
      <BrowserRouter>
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
            sendStripeToken={this.sendStripeToken}
            setCurrentPage={this.setCurrentPage}
          />
          <Route path={["/:currentPage/:subPage", "/:currentPage", "/"]} component={(props) =>
            <MainContent
              {...props}
              auth={this.state.auth}
              setAuth={this.setAuth}
            />}
          />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }

  async componentDidMount() {
    let res = await fetch("/api/auth/current_user", { method: "GET" })
    let userInfo = await res.json();
    console.log(userInfo);
    this.setState({
      auth: userInfo
    })
  }

  sendStripeToken = async (token) => {
    let res = await fetch("api/stripe", {
      method: "POST",
      body: JSON.stringify(token),
      headers: { 'Content-Type': 'application/json' }
    });

    let userInfo = await res.json();
    this.setState({
      auth: userInfo
    })
  }

  setAuth = (auth) => {
    this.setState({
      auth: auth
    });
  }

  setCurrentPage = (event) => {
    this.setState({
      currentPage: event.target.value
    })
  }
}

export default App;