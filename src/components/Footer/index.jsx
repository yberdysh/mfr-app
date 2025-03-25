import "./index.scss";
import logo from "../../assets/logo.png";
import mailIcon from "../../assets/mail-icon.png";
import locationIcon from "../../assets/location-icon-2.png";
import phoneIcon from "../../assets/phone-icon-2.png";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  const navigate = useNavigate();
  function handleLogo() {
    navigate("/");
  }

  return (
    <div className="footer-container" id="footer">
      <div className="footer">
        <div className="footer__first-part">
          <Logo />
          <p>
            Powered by Lady Fascia- your local myofascial release therapist and
            conscious homebirth doula serving the Lehigh Valley: Allentown,
            Bethlehem, Easton, Quakertown, Emmaus, etc.
          </p>
        </div>
        <div className="footer__content">
          <div className="footer__navigation">
            <div className="footer__navigation__header">Navigation</div>
            <Link className="footer__navigation__nav" to="/">
              Home
            </Link>
            <Link className="footer__navigation__nav" to="/about">
              About
            </Link>
            <Link className="footer__navigation__nav" to="/what-is-mfr">
              What is MFR
            </Link>
            <Link className="footer__navigation__nav" to="/contact">
              Contact
            </Link>
            <Link className="footer__navigation__nav" to="/booking">
              Book Now
            </Link>
          </div>
          <div className="footer__contact">
            <div className="footer__contact__header">Get in Touch</div>
            <div className="footer__contact__contact-method" data-larger-icon>
              <img className="contact-img" src={mailIcon} alt="Email Icon" />
              <div className="contact-label">
                LadyFascia@myofascialawakening.com
              </div>
            </div>
            <div className="footer__contact__contact-method">
              <img className="contact-img" src={phoneIcon} alt="Phone Icon" />
              <div className="contact-label">484-929-3680</div>
            </div>
            <div className="footer__contact__contact-method">
              <img
                className="contact-img"
                src={locationIcon}
                alt="Location Icon"
              />
              <div className="contact-label">Bethlehem, PA</div>
            </div>
          </div>
          <div className="footer__other">
            <div className="footer__other__header">Something Else?</div>
            {/* TODO: replace with links */}
            <div className="footer__other__link">Doula Services</div>
            {/* <div className="footer__other__link">Enlightenment Blog</div> */}
            <div className="footer__other__link">Learn about Lady Fascia</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
