import React from "react";
import { Routes, Route } from 'react-router-dom';

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Wochenmarkten from "./pages/Wochenmärkten";
import Speisekarte from "./pages/Speisekarte";

import Menu from "./Components/Menu";


function App() {
  return (
    <div className="App">
      <Menu />

      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Wochenmarkten" element={<Wochenmarkten />} />
          <Route path="/Speisekarte" element={<Speisekarte />} />
       </Routes>
    </div>
      
  );
}

export default App;
