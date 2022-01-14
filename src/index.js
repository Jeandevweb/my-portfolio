import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Contact from './Components/Contact/Contact'
import Skills from './Components/Skills/Skills'
import Works from './Components/Works/Works'


ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/works" element={<Works/>}/>
      <Route path="/contact" element={<Contact />}/>
    </Routes>
  </Router>
  ,
  document.getElementById('root')
);


