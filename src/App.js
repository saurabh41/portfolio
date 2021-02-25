import "./App.css";
import Particles from "react-particles-js"
import  Header from "./component/Header";
import  "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/Navbar";
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
    </>
    );
}

export default App;
