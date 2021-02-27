import "./App.css";
import React from "react";
import Particles from "react-particles-js"
import  "bootstrap/dist/css/bootstrap.min.css";
import  Header from "./component/Header";
import Navbar from "./component/Navbar";
import About from "./component/About";
import Services from "./component/Services";
import Skills from "./component/Skills";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import firebase from "./component/fire";
function App() {
  return (
    <>
    <Particles
      params={{
        particles:{
          number:{
            value:30,
            density:{
              enable:true,
              value_area:900
            }
          },
          shape:{
            type:"star",
            stroke: {
              width: 6,
              color:"#f9ab00"
            }
          }
        }
      }

      }
    />
    <Navbar />
    <Header />
    <About />
    <Services />
    <Skills />
    <Contact />
    <Footer />
    </>
    );
}

export default App;
