import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import { slide as Menu } from 'react-burger-menu';
import resume from '../assets/resume-MichaelChen.pdf';
import '../styles/header.css';

export default class Header extends Component {
  componentDidMount() {
    const location = window.location.pathname;
    if (location === '/' || location === '/about') {
      this.props.invertBack();
    } else {
      this.props.invert();
    }
  }

  render() {
    return (
      <header>
        <MediaQuery query="(min-width: 1220px)">
          <Link to="/">
            <img className="logo" src="http://fontmeme.com/permalink/170313/1c08a7dce2a7ca6fbb17e1bf7fc0aaf1.png" alt="MC"/>
          </Link>
          <nav className="main-header">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><a href={resume} target="_blank">Resumé</a></li>
            </ul>
          </nav>
        </MediaQuery>
        <MediaQuery query="(max-width: 1219px) and (min-width: 751px)">
          <Link to="/">
            <img className="logo" src="http://fontmeme.com/permalink/170313/1c08a7dce2a7ca6fbb17e1bf7fc0aaf1.png" alt="MC"/>
          </Link>
          <Menu right>
            <Link className="menu-item" to="/">Home</Link>
            <Link className="menu-item" to="/about">About</Link>
            <Link className="menu-item" to="/projects">Projects</Link>
            <Link className="menu-item" to="/contact">Contact</Link>
            <a className="menu-item" href={resume} target="_blank">Resumé</a>
          </Menu>
        </MediaQuery>
        <MediaQuery query="(max-width: 750px)">
          <Menu right>
            <Link className="menu-item" to="/">Home</Link>
            <Link className="menu-item" to="/about">About</Link>
            <Link className="menu-item" to="/projects">Projects</Link>
            <Link className="menu-item" to="/contact">Contact</Link>
            <a className="menu-item" href={resume} target="_blank">Resumé</a>
          </Menu>
        </MediaQuery>
      </header>
    )
  }
}
