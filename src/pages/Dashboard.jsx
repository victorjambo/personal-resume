import React, { Component } from 'react';
import Breakpoint, { BreakpointProvider } from 'react-socks';

import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import Home from './Home';
import About from './About/About';
import Service from './About/Service';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Timeline from './Timeline';
import Experience from './Experience';

import Firebase from '../helper/firebase';

class Dashboard extends Component {
  state = {
    frameworks: [],
    userInfo: {}
  }

  firebase = new Firebase();

  componentDidMount() {
    this.firebase.database.on('value', (snapshot) => {
      const { frameworks, userInfo } = snapshot.val();
      this.setState({
        frameworks,
        userInfo
      });
      console.log(this.state);
    }, (error) => {
      console.log(error.code);
    });
  }

  render() {
    const { userInfo } = this.state;
    return (
      <BreakpointProvider>
        { userInfo.name ? (
          <React.Fragment>
            <Navbar />
            <Home />
            <About />
            <Service />
            <Skills />
            <Breakpoint small down><Experience /></Breakpoint>
            <Breakpoint medium up><Timeline /></Breakpoint>
            <Portfolio />
            <Footer />
          </React.Fragment>
        ) : (
          <div>Loading...</div>
        )}
      </BreakpointProvider>
    );
  }
}

export default Dashboard;
