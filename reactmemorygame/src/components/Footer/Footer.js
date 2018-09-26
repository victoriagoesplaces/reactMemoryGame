import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div>
                <nav className="navbar fixed-bottom justify-content-center">
                    <a className="navbar-brand" href="/">React Clicky Game</a>
                </nav>
            </div>
        );
    }
}

export default Footer;