import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <main className="main">
            <Header />
            <Route exact path="/" component={Main} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/projects" component={Projects} />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
