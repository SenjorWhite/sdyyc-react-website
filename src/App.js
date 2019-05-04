import React from 'react';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import MainContent from './components/MainContent';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
      </header>
      <NavBar />
      <SideBar />
      <MainContent />
    </div>
  );
}

export default App;
