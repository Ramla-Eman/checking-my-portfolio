import React from 'react'
// components
import Header from './components/Header';
import Banner from './components/Banner';
import Nav from './components/Nav';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBot from './chatBot/ChatBot';

const App = () => {
  return (
    <div className='siteImage bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer/>
      <ChatBot/>
      {/* <div className='h-[4000px]'></div> */}
    </div>
  )
}

export default App