import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import ClassMap from './components/classMap/ClassMap';
import Form from './components/forma/Form';
import "./App.css";
// import { BrowserRouter as  Router,Routes, Route,Link } from "react-router-dom";
// import Home from './components/Pages/Home';
// import About from "./components/Pages/About";
// import Contact from './components/Pages/Contact';
// import {DataContext} from "./components/context/DataContext";
function App() {
  // const {darkFun} = useContext(DataContext);
  return (
    <div className="App">
      {/* <ClassMap /> */}
      <Form />
      {/* <Router>
          <nav>
              <Link to="/">Home</Link>
              <Link to="/about">about</Link>
              <Link to="/contact">contact</Link>
              <div className="range">
                <input type="checkbox" name="" id=""  onChange={darkFun}/>
                <div className="circle"></div>
              </div>
          </nav>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
      </Router> */}
    </div>
  );
}

export default App;
