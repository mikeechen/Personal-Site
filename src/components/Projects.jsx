import React, { Component } from 'react';
// import MediaQuery from 'react-responsive';
import '../styles/project.css';

export default class Projects extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.invert();
  }

  render() {
    return(
      <section className="second-background">
        <div>
          <h3>Under Construction. 👷 </h3>
          <h3>In the meantime, please check out my <a href="https://github.com/mikeechen">GitHub </a>
          or connect with me on <a href="https://linkedin.com/in/mikeechen915">LinkedIn</a>!</h3>
        </div>
      </section>
    )
  }
}
