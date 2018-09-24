import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar.js';
import Card from './components/Card/Card.js';
import Footer from './components/Footer/Footer.js';
import './App.css';

class App extends Component {
  render() {
    return (
    <Navbar/>,


      // <div className="App">
      //   <header className="App-header">
      //     {Navbar}
      //   </header>
      //   <p className="App-intro">
      //     {Card}
      //   </p>
      //   <footer>
      //     {Footer}
      //   </footer>
      // </div>

    <Footer/>
    );
  }
}

export default App;
