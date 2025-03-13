import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

function NavBar() {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-brand">Myofascial Awakening</div>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
          <button className="action-button">Book Now</button>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
