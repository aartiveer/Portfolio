import React, { useState, useEffect } from "react";
import Loader from "./components/Loader";
import HeroSection from "./components/HeroSection";
import './App.css'; // Optional if using CSS
import About from "./components/About";
import NavbarSection from "./components/NavbarSection";
import Skills from "./components/Skills";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);   // after 2 seconds, stop loading and show main content
    }, 2000);     //Loader Timer after 2 sec display first page 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={loading ? "fade" : "fade-in"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <NavbarSection />
          <section id="home">
            <HeroSection />

          </section>

          <About />
          <Skills />
          
        </>
      )}
    </div>
  );
}


export default App;
