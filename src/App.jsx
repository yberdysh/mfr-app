import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Navbar from "./components/NavBar";
import WhatIsMFR from "./pages/WhatIsMFR";
import ScrollToTop from "./utils/scrollToTop";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop>
        <div id="page-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/what-is-mfr" element={<WhatIsMFR />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
