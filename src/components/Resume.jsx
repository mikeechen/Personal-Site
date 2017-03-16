import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import resume from '../assets/resume-MichaelChen.pdf';
import '../styles/project.css';

export default class Resume extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.setResume(true);
  }

  componentWillUnmount() {
    this.props.setResume(false);
  }

  render() {
    return (
      <embed src={resume} alt="pdf" type="application/pdf"/>
    )
  }
}
