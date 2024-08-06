import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Education from './components/Education';
import Project from './components/Project';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Router>
        <Header />
        {/* <div className="container"> */}
        <Routes>
          <Route exact path="/My-Portfolio" element={<Home/>} />
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/education' element={<Education/>}/>
          <Route exact path='/project' element={<Project/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
        </Routes>
        {/* </div> */}
        <Footer/>
        </Router>    
    </>
  );
}

export default App;
