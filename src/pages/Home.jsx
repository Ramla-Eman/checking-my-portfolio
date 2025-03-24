import React from "react";

import Banner from '../components/Banner';
import Nav from '../components/Nav';
import About from '../components/About';
import Skills from '../components/Skills';
import Work from '../components/Work';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div>
      <Banner />
      <Nav />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
};

export default Home;
