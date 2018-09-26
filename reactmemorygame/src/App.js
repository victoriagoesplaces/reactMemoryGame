import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar.js';
import Card from './components/Card/Card.js';
import Footer from './components/Footer/Footer.js';
import cards from './cards.json'
import './App.css';

class App extends Component {
  render() {
    return (
    <Navbar/>
    ,
    <Card  
    name={cards[0].name}
    image={cards[0].image}/>,

    <Footer/>
    );
  }
}

export default App;
