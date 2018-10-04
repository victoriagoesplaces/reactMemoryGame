import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar.js';
import Card from './components/Card/Card.js';
import Footer from './components/Footer/Footer.js';
import cards from './cards.json'
import './App.css';

class App extends Component {

  state = {
    cards: cards,
    score: 0,
    topScore: 0,
    clickedCards: [],
    message: ""
  }
  
  clickedCharacter = (id) => {
  const [page] = document.getElementsByTagName('body');
  
  if (this.state.clickedCards.includes(id)) {
    this.setState({score: 0, clickedCards: []})
  
    page.classList.add('shakeWrapper')
    this.setState({message: 'You already clicked that!'})
    setTimeout(() => {
      page.classList.remove('shakeWrapper');
    }, 500);
    setTimeout(() => {
      this.setState({message: ""})
    }, 3000)
  
  } else {
    this.setState({clickedCards: [...this.state.clickedCards, id]})
    this.setState({score: this.state.score + 1})
    if (this.state.score >= this.state.topScore) {
      this.setState({topScore: this.state.score + 1})
  
    } 
    if (this.state.score === 11) {
      this.setState({message: 'You Won!'})
      this.setState({score: 0, clickedCards: [], cards: cards})
      setTimeout(() => {
        this.setState({message: ''})
      }, 3000)
    } 
  }
  }
  
  //randomize array function from 'Fisher-Yates Shuffle'
  reArrangeCards = (array) => {
  let currentIndex = array.length;
  
  while (0 !== currentIndex) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    let temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  
  this.setState({cards:cards});
  }
  
  renderCards = (array) => {
  return this.state.cards.map(card => (
    <section className='col s4' key={card.id} id={card.id}>
      <Card
        name={card.name} 
        image={card.image} 
        reArrangeCards={() => {this.reArrangeCards(this.state.cards)}}
        clickedCharacter={() => {this.clickedCharacter(card.id)}}/>
    </section>
    )
  )
  }
 
  
  render() {
  return (
    <div>
      <div className="container-fluid">
        <Navbar score={this.state.score} topScore={this.state.topScore}/>
        <div className="container instructions">
          <h5>Click on each of the images, making sure not to select the same one twice. <br></br>
          <br></br>If you are able to get your score to hit 9, then you win the game. Give it your best shot and see if you can remember what you clicked.</h5>
        </div>
        <div className="container instructions">{this.state.message}</div>
        <br />
        <div className="container row cardWrapper">
          {this.renderCards(this.state.cards)}
        </div>
      </div>
      <Footer/>
    </div>
 );
   
  }
 
  }


export default App;

