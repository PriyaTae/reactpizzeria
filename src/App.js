import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
//import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  let Comp;
  switch(window.location.pathname){
    case "/":
      Comp=<App/>
      break;
    case "/menu":
      Comp=<Menu/>
      break;
    case "/about":
      Comp=<About/>
      break;
    case  "/contact":
      Comp=<Contact/>
      break;
    default:
      Comp=<Home/>
      break;
          
  }
  return (
    <div className="App">
      <Navbar/>
      {Comp}
     <Footer/>
    </div>
  );
}

export default App;
