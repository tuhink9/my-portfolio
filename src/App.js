import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Pages/Footer/Footer';
import Navbar from './Pages/Header/Navbar';
import Home from './Pages/Home/Home';

import Services from './Pages/Services/Services';
import About from './Pages/About/About';
import Experiences from './Pages/Experiences/Experiences';
import Works from './Pages/Works/Works';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <div className="App relative">
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
            <Services></Services>
            <Experiences></Experiences>
            <Works></Works>
            <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
