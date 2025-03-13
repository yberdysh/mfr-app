import './index.scss';
import treatment from '../../assets/treatment-room.jpeg';

function HomePage() {
  return (
    <div className="home-page">
      {/* <h1>Home Page</h1> */}
      <div className="banner">
        <img className="banner-image" src={treatment} alt="treatment room" />
      </div>
    </div>
  );
}

export default HomePage;
