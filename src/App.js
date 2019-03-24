import React, { Component } from 'react';
import Breakpoint, { BreakpointProvider } from 'react-socks';
import firebase from 'firebase/app';

import Navbar from './common/Navbar';
import Footer from './common/Footer';
import Home from './pages/Home';
import About from './pages/About/About';
import Service from './pages/About/Service';
import Skills from './pages/Skills';
import Portfolio from './pages/Portfolio';
import Timeline from './pages/Timeline';
import Experience from './pages/Experience';

import config from './config/firebase';

class App extends Component {
  componentWillMount() {
    const firebaseApp = firebase.initializeApp(config);
    console.log(firebaseApp);
  }

  render() {
    return (
      <BreakpointProvider>
        <Navbar />

        <Home />
        <About />
        <Service />
        <Skills />
        <Breakpoint small down>
          <Experience />
        </Breakpoint>
        <Breakpoint medium up>
          <Timeline />
        </Breakpoint>
        <Portfolio />

        <Footer />
      </BreakpointProvider>
    );
  }
}

export default App;
