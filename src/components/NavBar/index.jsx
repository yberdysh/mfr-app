import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import { BREAKPOINTS } from "../../utils/getBreakpoint";

function NavBar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

  // Makes navbar go away when you scroll down, and reappear when you scroll up
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
    setIsMobileNavOpen(false);
  }

  function toggleMobileNav() {
    if (window.innerWidth > BREAKPOINTS.TABLET) {
      setIsMobileNavOpen(false);
    } else {
      setIsMobileNavOpen(!isMobileNavOpen);
    }
  }

  return (
    <div className="navbar-container" id="nav">
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/" onClick={() => setIsMobileNavOpen(false)}>
            Myofascial Awakening
          </Link>
        </div>
        <div className="navbar-links" data-is-active={isMobileNavOpen}>
          <Link
            className="navbar-links__link"
            onClick={() => setIsMobileNavOpen(false)}
            to="/"
          >
            Home
          </Link>
          <Link
            className="navbar-links__link"
            onClick={() => setIsMobileNavOpen(false)}
            to="/about"
          >
            About
          </Link>
          <Link
            className="navbar-links__link"
            onClick={() => setIsMobileNavOpen(false)}
            to="/what-is-mfr"
          >
            What is MFR
          </Link>
          <Link
            className="navbar-links__link"
            onClick={() => setIsMobileNavOpen(false)}
            to="/contact"
          >
            Contact
          </Link>
          <button className="action-button" onClick={handleBooking}>
            Book Now
          </button>
        </div>
        <div
          className="navbar__mobile-menu"
          onClick={toggleMobileNav}
          data-is-active={isMobileNavOpen}
        >
          <span className="mobile-menu-icon"></span>
          <span className="mobile-menu-icon"></span>
          <span className="mobile-menu-icon"></span>
          <span className="mobile-menu-icon"></span>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
