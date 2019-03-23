import React, { Component } from 'react';
import Navbar from './common/Navbar';
import Footer from './common/Footer';
import Home from './pages/Home';
import About from './pages/About/About';
import Service from './pages/About/Service';
import Skills from './pages/Skills';
import Experience from './pages/Experience';

import './App.css';
import Portfolio from './pages/Portfolio';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />

        <Home />
        <About />
        <Service />
        <Skills />
        <Experience />
        <Portfolio />

        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
