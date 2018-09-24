import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    render() {
      return (
<div>
  <ul className="nav justify-content-center">
    <li className="nav-item">
      Clicky Game
    </li>
    <li className="nav-item">
      Click image to begin
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/">Score:</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/">Top Score:</a>
    </li>
  </ul>
</div>
    );
}
}

export default Navbar;