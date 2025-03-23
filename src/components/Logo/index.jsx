import logo from "../../assets/logo.png";
import "./index.scss";
import { Link } from "react-router-dom";

function Logo(clickFunction) {
  return (
    <div className="logo">
      <Link to="/" onClick={() => clickFunction()}>
        <img src={logo} className="logo__image" alt="Lady Fascia Logo" />
        <div className="logo__text">
          <span>Myofascial </span>
          <span>Awakening</span>
        </div>
      </Link>
    </div>
  );
}

export default Logo;
