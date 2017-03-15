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
          <img className="logo" src="http://fontmeme.com/permalink/170313/1c08a7dce2a7ca6fbb17e1bf7fc0aaf1.png" alt="MC"/>
          <nav className="main-header">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><a href="#">Projects</a></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><a href="#">Resume</a></li>
            </ul>
          </nav>
        </MediaQuery>
        <MediaQuery query="(max-width: 1219px) and (min-width: 751px)">
          <img className="logo" src="http://fontmeme.com/permalink/170313/1c08a7dce2a7ca6fbb17e1bf7fc0aaf1.png" alt="MC"/>
          <Menu right>
            <Link className="menu-item" to="/">Home</Link>
            <Link className="menu-item" to="/about">About</Link>
            <a className="menu-item" href="#">Projects</a>
            <Link className="menu-item" to="/contact">Contact</Link>
            <a className="menu-item" href="#">Resume</a>
          </Menu>
        </MediaQuery>
        <MediaQuery query="(max-width: 750px)">
          <Menu right>
            <Link className="menu-item" to="/">Home</Link>
            <Link className="menu-item" to="/about">About</Link>
            <a className="menu-item" href="#">Projects</a>
            <Link className="menu-item" to="/contact">Contact</Link>
            <a className="menu-item" href="#">Resume</a>
          </Menu>
        </MediaQuery>
      </header>
    )
  }
}
