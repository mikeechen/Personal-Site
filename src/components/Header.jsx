import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

export default class Header extends Component {
  render() {
    return (
      <header>
        <img src="http://fontmeme.com/permalink/170313/1c08a7dce2a7ca6fbb17e1bf7fc0aaf1.png" alt="MC"/>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Resume</a></li>
          </ul>
        </nav>
      </header>
    )
  }
}
