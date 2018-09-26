import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render(props) {
    return (
      <div>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            Clicky Game
          </li>
          <li className="nav-item">
            Click image to begin
          </li>
          <li>Score: {props.score}</li>
          <li>||</li>
          <li>Top Score: {props.topScore}</li>
        </ul>
      </div>
    );
  }
}

export default Navbar;