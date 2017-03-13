import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <main className="main">
            <Header />
            <Main />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
