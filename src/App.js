import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Pages/Footer/Footer';
import Navbar from './Pages/Header/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer>
      <Routes>
        <Route to="/about" element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
