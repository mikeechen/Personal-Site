import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import '../styles/main.css';

export default class Main extends Component {
  render() {
    return (
      <section className="background">
        <MediaQuery query="(min-width: 1220px)">
          <div>
            <img className="animated fadeInDown" src="http://fontmeme.com/permalink/170313/52d04448b7de6f8a4b08bc25f989eb87.png" alt="Michael Chen"/>
            <h3 className="animated fadeInUp">Developer. Problem Sovler. NetWorker.</h3>
          </div>
        </MediaQuery>
        <MediaQuery query="(max-width: 1219px) and (min-width: 751px)">
          <div>
            <img className="animated fadeInDown" src="http://fontmeme.com/permalink/170313/52d04448b7de6f8a4b08bc25f989eb87.png" alt="Michael Chen"/>
            <h3 className="animated fadeInUp">Developer. Problem Sovler. NetWorker.</h3>
          </div>
        </MediaQuery>
        <MediaQuery query="(max-width: 750px)">
          <div>
            <img className="animated fadeInDown" src="http://fontmeme.com/permalink/170313/1c08a7dce2a7ca6fbb17e1bf7fc0aaf1.png" alt="Michael Chen"/>
            <h4 className="animated fadeInUp">Developer. Problem Sovler. NetWorker.</h4>
          </div>
        </MediaQuery>
      </section>
    )
  }
}
