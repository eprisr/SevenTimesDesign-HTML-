import React from 'react';
import Header from '../Components/Header.js';
import Hero from '../Components/Hero.js';
import RecentWork from '../Components/RecentWork';
import About from '../Components/About';
import Footer from '../Components/Footer';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Hero />
        <RecentWork />
        <About />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;