import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";

function NavBar() {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

  useEffect(() => {
    const nav = document.getElementById("nav");

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > 41) {
        if (prevScrollPos > currentScrollPos) {
          if (nav) nav.style.top = "0";
        } else {
          if (nav) nav.style.top = "-110px";
        }
      } else {
        if (nav) nav.style.top = "0";
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  // Adjust content height depending on the nav bar height
  const adjustContentMarginTop = () => {
    const navBar = document.getElementById("nav");
    const content = document.getElementById("page-content");

    if (navBar && content) {
      content.style.marginTop = `${navBar.offsetHeight}px`;
    }
  };

  // useEffect to adjust the page content spacing during resizing
  useEffect(() => {
    adjustContentMarginTop();

    window.addEventListener("resize", adjustContentMarginTop);
    return () => {
      window.removeEventListener("resize", adjustContentMarginTop);
    };
  }, []);

  function handleBooking() {
    // booking logic goes here...
  }

  return (
    <div className="navbar-container" id="nav">
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/">Myofascial Awakening</Link>
        </div>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/what-is-mfr">What is MFR</Link>
          <a href="#contact">Contact</a>
          <button className="action-button" onClick={handleBooking}>
            Book Now
          </button>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
