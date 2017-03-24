import React, { Component } from 'react';
// import MediaQuery from 'react-responsive';
import home from '../assets/svg/001-home-page.svg';
import tech from '../assets/svg/002-technology.svg';
import circle from '../assets/svg/003-circle.svg';
import food from '../assets/svg/004-dinner.svg';
import multi from '../assets/svg/005-multimedia.svg'
import dreamHome from '../assets/screencap/dreamhome.png';
import fat from '../assets/screencap/foodapptracker.png';
import snap from '../assets/screencap/snapshop.png';
import data from '../assets/screencap/dataguru.png';
import winetwitch from '../assets/screencap/winetwitch.png';
import '../styles/project.css';

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.handleMouseIn = this.handleMouseIn.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseIn(e) {
    let front = e.target;

    if (front.nodeName === 'A') {
      front = front.firstChild;
    }

    const back = front.parentNode.previousSibling;

    front.style.opacity = '0.5';
    back.style.opacity = '0.7';
  }

  handleMouseLeave(e) {
    let front = e.target;

    if (front.nodeName === 'A') {
      front = front.firstChild;
    }

    const back = front.parentNode.previousSibling;

    front.style.opacity = '1';
    back.style.opacity = '0';
  }

  componentDidMount() {
    this.props.invert();
  }

  render() {
    return(
      <section className="second-background">
        <div className="project-content">
          <div className="container">
            <div className="row project-row">
              <div className="three columns project animated fadeInLeft">
                <div className="img-container">
                  <img className="background-icon" src={dreamHome} alt="dream-home"/>
                  <a
                    onMouseEnter={this.handleMouseIn}
                    onMouseLeave={this.handleMouseLeave}
                    href="http://dreamhomesbyrebeccayu.herokuapp.com/"
                    target="_blank"
                    >
                      <img className="project-icon" src={home} alt="dream-home"/>
                  </a>
                </div>
                <div className="project-desc-container">
                  <p className="title">Dream Home</p>
                  <p className="project-desc">A real-estate site for real-estate
                    agent Rebecca Yu, who operates in Corvallis, OR.</p>
                  <p className="list-header">Technologies utilized:</p>
                  <ul className="list project-list">
                    <li>ReactJS</li>
                    <li>MobX</li>
                    <li>NodeJS</li>
                    <li>ExpressJS</li>
                    <li>PostgreSQL</li>
                    <li>PostGIS</li>
                  </ul>
                  <div className="row button-row">
                    <a href="http://dreamhomesbyrebeccayu.herokuapp.com/" target="_blank" className="button my-butt">Live Site</a>
                    <a href="https://github.com/mikeechen/DreamHome" target="_blank" className="button my-butt">Github</a>
                  </div>
                </div>
              </div>
              <div className="three columns project animated fadeInLeft">
                <div className="img-container">
                  <img className="background-icon" src={fat} alt="F.A.T"/>
                  <a
                    onMouseEnter={this.handleMouseIn}
                    onMouseLeave={this.handleMouseLeave}
                    href="https://food-tracker-app.herokuapp.com/"
                    target="_blank"
                    >
                      <img className="project-icon" src={circle} alt="F.A.T"/>
                  </a>
                </div>
                <div className="project-desc-container">
                  <p className="title">Food Tracker App</p>
                  <p className="project-desc">An app to help you track and analyze
                    your daily food intake.</p>
                  <p className="list-header">Technologies utilized:</p>
                  <ul className="list project-list">
                    <li>ReactJS</li>
                    <li>NodeJS</li>
                    <li>ExpressJS</li>
                    <li>PostgreSQL</li>
                    <li>Brunch</li>
                  </ul>
                  <div className="row button-row">
                    <a href="https://food-tracker-app.herokuapp.com/" target="_blank" className="button my-butt">Live Site</a>
                    <a href="https://github.com/smk291/food-tracker" target="_blank" className="button my-butt">Github</a>
                  </div>
                </div>
              </div>
              <div className="three columns project animated fadeInRight">
                <div className="img-container">
                  <img className="background-icon" src={snap} alt="snapshop"/>
                  <a
                    onMouseEnter={this.handleMouseIn}
                    onMouseLeave={this.handleMouseLeave}
                    href="http://mikeechen-snapshop.herokuapp.com/"
                    target="_blank"
                    >
                      <img className="project-icon" src={tech} alt="snapshop"/>
                  </a>
                </div>
                <div className="project-desc-container">
                  <p className="title">Snap Shop</p>
                  <p className="project-desc">A mock e-commerce site that specializes
                    in cameras.</p>
                  <p className="list-header">Technologies utilized:</p>
                  <ul className="list project-list">
                    <li>AngularJS</li>
                    <li>NodeJS</li>
                    <li>ExpressJS</li>
                    <li>PostgreSQL</li>
                    <li>Brunch</li>
                  </ul>
                  <div className="row button-row">
                    <a href="http://mikeechen-snapshop.herokuapp.com/" target="_blank" className="button my-butt">Live Site</a>
                    <a href="https://github.com/mikeechen/snap-shop" target="_blank" className="button my-butt">Github</a>
                  </div>
                </div>
              </div>
              <div className="three columns project animated fadeInRight">
                <div className="img-container">
                  <img className="background-icon" src={data} alt="data-guru"/>
                  <a
                    onMouseEnter={this.handleMouseIn}
                    onMouseLeave={this.handleMouseLeave}
                    href="http://data-guru.herokuapp.com/"
                    target="_blank"
                    >
                      <img className="project-icon" src={multi} alt="data-guru"/>
                  </a>
                </div>
                <div className="project-desc-container">
                  <p className="title">Data Guru</p>
                  <p className="project-desc">An online tool for developers to
                  find and store useful open-data through Socrata's API.</p>
                  <p className="list-header">Technologies utilized:</p>
                  <ul className="list project-list">
                    <li>JavaScript</li>
                    <li>JQuery</li>
                    <li>NodeJS</li>
                    <li>ExpressJS</li>
                    <li>PostgreSQL</li>
                  </ul>
                  <div className="row button-row">
                    <a href="http://data-guru.herokuapp.com/" target="_blank" className="button my-butt">Live Site</a>
                    <a href="https://github.com/Voxelsdev/Data-Guru" target="_blank" className="button my-butt">Github</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row project-row">
              <div className="three columns project animated fadeInLeft">
                <div className="img-container">
                  <img className="background-icon" src={winetwitch} alt="wine-twitch"/>
                  <a
                    onMouseEnter={this.handleMouseIn}
                    onMouseLeave={this.handleMouseLeave}
                    href="http://mikeechen-winetwitch.surge.sh/"
                    target="_blank"
                    >
                      <img className="project-icon" src={food} alt="wine-twitch"/>
                  </a>
                </div>
                <div className="project-desc-container">
                  <p className="title">Twitch and Wine</p>
                  <p className="project-desc">A fun and interactive application
                  that pairs wine with twitch channels.</p>
                  <p className="list-header">Technologies utilized:</p>
                  <ul className="list project-list">
                    <li>JavaScript</li>
                    <li>JQuery</li>
                    <li>AJAX</li>
                    <li>Twitch API</li>
                    <li>Wine.com API</li>
                  </ul>
                  <div className="row button-row">
                    <a href="http://mikeechen-winetwitch.surge.sh/" target="_blank" className="button my-butt">Live Site</a>
                    <a href="https://github.com/mikeechen/Twitch-and-Wine" target="_blank" className="button my-butt">Github</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
