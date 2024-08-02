import React from 'react';
import { Link } from 'react-router-dom';
import { highlightBackground, unhighlightBackground } from '../assets/scripts/main.js';
import ProgressBar from "react-scroll-progress-bar";

const Navbar = () => (
    <>
        <nav className="navbar navbar-expand-sm bg-warning navbar-light mb-3">

        <div className="container-fluid">
            <Link className="navbar-brand" to="/">321Origami</Link>
            <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link" to="/" onMouseOver={highlightBackground} onFocus={highlightBackground} onMouseOut={unhighlightBackground} onBlur={unhighlightBackground}>Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/designs" onMouseOver={highlightBackground} onFocus={highlightBackground} onMouseOut={unhighlightBackground} onBlur={unhighlightBackground}>Designs</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/history" onMouseOver={highlightBackground} onFocus={highlightBackground} onMouseOut={unhighlightBackground} onBlur={unhighlightBackground}>History</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/resources" onMouseOver={highlightBackground} onFocus={highlightBackground} onMouseOut={unhighlightBackground} onBlur={unhighlightBackground}>Resources</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/contact" onMouseOver={highlightBackground} onFocus={highlightBackground} onMouseOut={unhighlightBackground} onBlur={unhighlightBackground}>Contact</Link>
            </li>
            </ul>
        </div>
        </nav>
        <ProgressBar />
    </>
    
  );
  
  export default Navbar;
