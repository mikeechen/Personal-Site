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
              <div className="three columns project">
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
              </div>
              <div className="three columns project">
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
              </div>
              <div className="three columns project">
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
              </div>
              <div className="three columns project">
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
              </div>
            </div>
            <div className="row project-row">
              <div className="three columns project">
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
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
