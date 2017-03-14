import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import { slide as Menu } from 'react-burger-menu';
import '../styles/header.css';

export default class Header extends Component {
  render() {
    return (
      <header>
        <MediaQuery query="(min-width: 1220px)">
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
        </MediaQuery>
        <MediaQuery query="(max-width: 1219px) and (min-width: 751px)">
          <Menu right>
            <Link className="menu-item" to="/">Home</Link>
            <a className="menu-item" href="#">About</a>
            <a className="menu-item" href="#">Projects</a>
            <a className="menu-item" href="#">Contact</a>
            <a className="menu-item" href="#">Resume</a>
          </Menu>
        </MediaQuery>
        <MediaQuery query="(max-width: 750px)">
          <Menu right>
            <Link className="menu-item" to="/">Home</Link>
            <a className="menu-item" href="#">About</a>
            <a className="menu-item" href="#">Projects</a>
            <a className="menu-item" href="#">Contact</a>
            <a className="menu-item" href="#">Resume</a>
          </Menu>
        </MediaQuery>
      </header>
    )
  }
}
