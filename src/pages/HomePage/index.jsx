import "./index.scss";
import treatment from "../../assets/treatment-room.jpeg";

function HomePage() {
  return (
    <div className="home-page">
      <div className="home-content">
        <div className="banner">
          <img className="banner-image" src={treatment} alt="treatment room" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
