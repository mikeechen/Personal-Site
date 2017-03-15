import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import '../styles/main.css';

export default class Main extends Component {
  componentDidMount() {
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
      <section className="background">
        <MediaQuery query="(min-width: 1220px)">
          <div>
            {/* <img className="animated fadeInDown" src="http://fontmeme.com/permalink/170313/52d04448b7de6f8a4b08bc25f989eb87.png" alt="Michael Chen"/> */}
            <h1 className="animated fadeInDown">MICHAEL CHEN</h1>
            <h3 className="animated fadeInUp">Developer. Problem Sovler. Networker.</h3>
          </div>
        </MediaQuery>
        <MediaQuery query="(max-width: 1219px) and (min-width: 751px)">
          <div>
            <h1 className="animated fadeInDown">MICHAEL CHEN</h1>
            <h3 className="animated fadeInUp">Developer. Problem Sovler. Networker.</h3>
          </div>
        </MediaQuery>
        <MediaQuery query="(max-width: 750px)">
          <div>
            <img className="animated fadeInDown" src="http://fontmeme.com/permalink/170313/1c08a7dce2a7ca6fbb17e1bf7fc0aaf1.png" alt="Michael Chen"/>
            <h4 className="animated fadeInUp">Developer. Problem Sovler. Networker.</h4>
          </div>
        </MediaQuery>
      </section>
    )
  }
}
