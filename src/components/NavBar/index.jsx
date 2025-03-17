import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.scss";

function NavBar() {
  // Adjust content height depending on the nav bar height
  const adjustContentMarginTop = () => {
    const navBar = document.getElementById("nav");
    const content = document.getElementById("page-content");

    console.log("nav: ", nav, "content", content);

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
          <a href="#services">What is MFR?</a>
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
