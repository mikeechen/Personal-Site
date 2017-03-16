import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import '../styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.invert = this.invert.bind(this);
    this.invertBack = this.invertBack.bind(this);
  }

  setResume(bool) {
    this.setState({resume: bool});
  }

  invert() {
    const images = document.getElementsByClassName('footer-logo');
    const logo = document.querySelector('.logo');
    const headerNav = document.querySelector('.main-header');

    for (let img of images) {
      img.style.filter = 'invert(40%)';
    }

    if (headerNav) {
      headerNav.style.filter = 'invert(100%)';
    }

    if (logo) {
      logo.style.filter = 'invert(100%)';
    }
  }

  invertBack() {
    const images = document.getElementsByClassName('footer-logo');
    const logo = document.querySelector('.logo');
    const headerNav = document.querySelector('header nav');

    for (let img of images) {
      img.style.filter = 'invert(100%)';
    }

    if (headerNav) {
      headerNav.style.filter = 'invert(0%)';
    }

    if (logo) {
      logo.style.filter = 'invert(0%)';
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <main className="main">
            <Header
              invert={this.invert}
              invertBack={this.invertBack}
            />
            <Route exact path="/" render={() => (
              <Main
                invertBack={this.invertBack}
              />
            )} />
            <Route path="/about" render={() => (
              <About
                invertBack={this.invertBack}
              />
            )} />
            <Route path="/contact" render={() => (
              <Contact
                invert={this.invert}
              />
            )} />
            <Route path="/projects" render={() => (
              <Projects
                invert={this.invert}
              />
            )} />
          </main>
          <Footer
            invert={this.invert}
            invertBack={this.invertBack}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
