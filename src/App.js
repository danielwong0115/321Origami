import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Designs from './pages/Designs';
import History from './pages/History';
import Resources from './pages/Resources';
import Contact from './pages/Contact';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index" element={<Home />} />
        <Route path="/designs" element={<Designs />} />
        <Route path="/history" element={<History />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );

}

export default App;
