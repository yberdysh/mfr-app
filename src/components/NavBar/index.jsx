import React from 'react';
import './index.scss';

function NavBar() {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-brand">MyApp</div>
        <div className="navbar-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
          <button className="action-button">Sign Up</button>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
