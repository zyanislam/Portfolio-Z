import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from "./components/skills/Skills";
import Services from './components/services/Services';
import References from './components/references/References';
import Contacts from './components/contacts/Contacts';

const App = () => {
  return (
    <>
      <Header />  
      
      <main className='main'>
        <Home />

        <About />
        
        <Skills />

        <Services />
        
        <References />
        
        <Contacts />

      </main>
    </>
  )
}

export default App;
