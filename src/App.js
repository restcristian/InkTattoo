import React, { Component } from 'react';
import './App.css';
import Layout from './hoc/Layout/Laying';
import About from './components/Sections/About/About';
import Gallery from './components/Sections/Gallery/Gallery';
import Team from './components/Sections/Team/Team';
import ContactUs from './components/Sections/ContactUs/ContactUs';
import FindUs from './components/Sections/FindUs/FindUs';
import FooterArea from './components/Sections/FooterArea/FooterArea';
import Photos from './components/Sections/Photos/Photos';


class App extends Component {
 
  render() {
    return (
      <Layout>
        <About />
        <Photos />
        <Team />
        <Gallery />
        <ContactUs />
        <FindUs />
        <FooterArea />
      </Layout>
    );
  }
}

export default App;
