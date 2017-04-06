import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import '../styles/main.css';

export default class Main extends Component {
  componentDidMount() {
    this.props.invertBack();
  }

  render() {
    return (
      <section className="background">
        <a id="hidden" href="https://mikeechen-jquerycalc.surge.sh">:)</a>
        <div id="preload"></div>
        <MediaQuery query="(min-width: 1220px)">
          <div>
            <h1 className="animated fadeInDown">MICHAEL CHEN</h1>
            <h3 className="animated fadeInUp">Developer and Engineer.</h3>
          </div>
        </MediaQuery>
        <MediaQuery query="(max-width: 1219px) and (min-width: 751px)">
          <div>
            <h1 className="animated fadeInDown">MICHAEL CHEN</h1>
            <h3 className="animated fadeInUp">Developer and Engineer.</h3>
          </div>
        </MediaQuery>
        <MediaQuery query="(max-width: 750px)">
          <div>
            <img className="animated fadeInDown" src="http://fontmeme.com/permalink/170313/1c08a7dce2a7ca6fbb17e1bf7fc0aaf1.png" alt="Michael Chen"/>
            <h4 className="animated fadeInUp">Developer and Engineer.</h4>
          </div>
        </MediaQuery>
      </section>
    )
  }
}
