import React, { Component } from 'react';
import Breakpoint, { BreakpointProvider } from 'react-socks';
import firebase from 'firebase/app';

import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import Home from './Home';
import About from './About/About';
import Service from './About/Service';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Timeline from './Timeline';
import Experience from './Experience';

import config from '../config/firebase';

class Dashboard extends Component {
  componentWillMount() {
    const firebaseApp = firebase.initializeApp(config);
    console.log(firebaseApp.options);
  }

  render() {
    return (
      <BreakpointProvider>
        <Navbar />

        <Home />
        <About />
        <Service />
        <Skills />
        <Breakpoint small down><Experience /></Breakpoint>
        <Breakpoint medium up><Timeline /></Breakpoint>
        <Portfolio />

        <Footer />
      </BreakpointProvider>
    );
  }
}

export default Dashboard;
