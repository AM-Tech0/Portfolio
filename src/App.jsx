import { useState } from "react";
import React from "react";
import About from "./container/About/About.jsx";
import Footer from "./container/footer/Footer.jsx";
import Header from "./container/header/Header.jsx";
import Experience from "./container/Experience/Experience.jsx";
import Testimonials from "./container/testimonials/Testimonials.jsx";
import Navbar from './Component/Navbar/Navbar.jsx'
import Portfolio from "./container/portfolio/Portfolio.jsx";
import Contact from "./container/Contact/Contact.jsx";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
         <Header/>
        <Navbar/>
        <About/> 
        <Experience/>
        <Portfolio/>
         <Testimonials/>
         <Contact/>
         <Footer/>
    
    </>
  );
}

export default App;
