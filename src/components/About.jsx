import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import '../styles/main.css';
import '../styles/about.css';

export default class About extends Component {
  componentDidMount() {
    this.props.invertBack();
  }

  render() {
    return (
      <section className="background">
        <a id="hidden" href="https://mikeechen-jquerycalc.surge.sh">:)</a>
        <div className="secondary">
          <div className="container">
            <h3 className="text animated fadeInDown">Hello there! I'm Michael Chen.</h3>
            <p className="text animated fadeInDown">
              I’m a Web Developer based out of Seattle. Growing up, I was always
              interested in technology, and how it could improve our lives.
              I took a C/C++ course over a summer during high school, and instantly
              fell in love with how I can make a simple application from just writing code.
              Coding has been a passion of mine for a long time, and I am ready
              to begin my career as a developer.
            </p>
            <MediaQuery query="(min-width: 620px)">
              <div className="row animated fadeInUp">
                <div className="one-half column">
                  <p className="text">Technologies I love:</p>
                  <ul className="list">
                    <li>JavaScript</li>
                    <li>ReactJS</li>
                    <li>AngularJS</li>
                    <li>NodeJS</li>
                    <li>ExpressJS</li>
                    <li>PostgreSQL</li>
                  </ul>
                </div>
                <div className="one-half column">
                  <p className="text">More Technologies I love:</p>
                  <ul className="list">
                    <li>Java Spring</li>
                    <li>Ruby on Rails</li>
                    <li>ASP.NET</li>
                    <li>MongoDB</li>
                  </ul>
                </div>
              </div>
            </MediaQuery>
          </div>
        </div>
      </section>
    );
  }
}
