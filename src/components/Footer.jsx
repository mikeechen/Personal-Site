import React, { Component } from 'react';
import '../styles/footer.css';
import github from '../assets/1489308246_Github_social_media_logo.svg';
import linkedIn from '../assets/1489308244_Linkedin_social_media_logo.svg';
import facebook from '../assets/1489308242_Facebook_social_media_logo.svg';
import twitter from '../assets/1489308240_Twitter_social_media_logo.svg';
import instagram from '../assets/1489308248_Instagram_social_media_logo.svg';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <a href="https://github.com/mikeechen" target="_blank"><img className="footer-logo" src={github} alt="github"/></a>
          <a href="https://linkedIn.com/in/mikeechen915" target="_blank"><img className="footer-logo" src={linkedIn} alt="linkedIn"/></a>
          <a href="https://www.facebook.com/ChenMichaelChen" target="_blank"><img className="footer-logo" src={facebook} alt="facebook"/></a>
          <a href="https://twitter.com/chenmasta" target="_blank"><img className="footer-logo" src={twitter} alt="twitter"/></a>
          <a href="https://www.instagram.com/mikeechen/" target="_blank"><img className="footer-logo" src={instagram} alt="instagram"/></a>
        </div>
      </footer>
    )
  }
}
