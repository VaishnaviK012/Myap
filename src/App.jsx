import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import 'bootstrap-icons/font/bootstrap-icons.css';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './Admin Panel/Sidebar';
import Nav from './WebPractice/Nav';
import Section2 from './WebPractice/Section2';
import Section3 from './WebPractice/Section3';
import Section4 from './WebPractice/Section4';
import Section5 from './WebPractice/Section5';
import Section6 from './WebPractice/Section6';
import Section7 from './WebPractice/Section7';
import Section8 from './WebPractice/Section8';
import Footer from './WebPractice/Footer';
// import Nextpg from './WebPractice/NextPage';
// import Router from 'router';
import { Route,  Routes } from 'react-router-dom';
import NextPage from './WebPractice/NextPage';
import Home from './WebPractice/Home';



function App() {
 

  return (
    <>
      {/* <Sidebar/> */}
      {/* <Nav/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
      <Section8/>
      <Footer/>
      */}
      {/* <Home/> */}
     
    


      <Routes>
        
        <Route path="/" element={<Home/>} /> 
        <Route path="/NextPage" element={<NextPage/>} /> 
      </Routes>
   
      {/* <Nav />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Footer />
      
      <Routes>
        <Route path="/NextPage" element={<NextPage />} />
      </Routes> */}
 
 
    </>
    
  )
}

export default App
