import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import myFace from '../assets/circle.png';
import '../styles/project.css';
import '../styles/contact.css';

export default class Contact extends Component {
  componentDidMount() {
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

  render() {
    return (
      <section className="second-background">
        <div className="contact-section">
          <div className="container">
            <img className="face animated fadeInDown" src={myFace} alt="Michael Chen"/>
            <div className="contact-text animated fadeInUp">
              <h2>Contact me via: </h2>
              <MediaQuery query="(min-width: 621px)">
                <h3>Email: <a href="mailto:mikeechen915@gmail.com" target="_blank">mikeechen915@gmail.com</a></h3>
              </MediaQuery>
              <MediaQuery query="(max-width: 620px)">
                <h3>Gmail: <a href="mailto:mikeechen915@gmail.com" target="_blank">mikeechen915</a></h3>
              </MediaQuery>
              <h3>LinkedIn: <a href="https://linkedin.com/in/mikeechen915" target="_blank">mikeechen915</a></h3>
              <h3>Github: <a href="https://github.com/mikeechen">mikeechen</a></h3>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
