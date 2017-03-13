import React, { Component } from 'react';
import '../styles/main.css';

export default class Main extends Component {
  render() {
    return (
      <section className="background">
        <div>
          <img className="animated fadeInDown" src="http://fontmeme.com/permalink/170313/52d04448b7de6f8a4b08bc25f989eb87.png" alt="Michael Chen"/>
          <h3 className="animated fadeInUp">Developer. Problem Sovler. NetWorker.</h3>
        </div>
      </section>
    )
  }
}
