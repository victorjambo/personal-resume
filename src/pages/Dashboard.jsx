import React, { Component } from 'react';
import Breakpoint, { BreakpointProvider } from 'react-socks';

import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import Home from './Home';
import About from './About/About';
import Service from './About/Service';
import Skills from './Skills';
import Timeline from './Timeline';
import Experience from './Experience';

import Firebase from '../helper/firebase';
import mockApi from '../mockApi';

class Dashboard extends Component {
  state = { ...mockApi }

  firebase = new Firebase();

  // componentDidMount() {
  //   this.firebase.database.on('value', (snapshot) => {
  //     this.setState({ ...snapshot.val() });
  //   });
  // }

  render() {
    const {
      frameworks, softSkills, stacks, stories, technicalSkills, userInfo
    } = this.state;
    return (
      <BreakpointProvider>
        <Navbar />
        <Home userInfo={userInfo} />
        <About userInfo={userInfo} frameworks={frameworks} />
        <Service stacks={stacks} />
        <Skills technicalSkills={technicalSkills} softSkills={softSkills} />
        <Breakpoint small down><Experience stories={stories} /></Breakpoint>
        <Breakpoint medium up><Timeline stories={stories} /></Breakpoint>
        {/* <Portfolio /> */}
        <Footer userInfo={userInfo} />
      </BreakpointProvider>
    );
  }
}

export default Dashboard;
