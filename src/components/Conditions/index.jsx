import "./index.scss";
import check from "../../assets/check.png";
import lazyLoad from "../../utils/lazyload";
import { useNavigate } from "react-router-dom";

function Conditions() {
  const sectionRef = lazyLoad();
  const navigate = useNavigate();

  function handleBooking() {
    navigate("/booking");
  }

  const conditionsArr = [
    "Fibromyalgia",
    "Back Pain",
    "Carpal Tunnel",
    "Chronic Pain",
    "Scoliosis",
    "Depression",
    "Frozen Shoulder",
    "Plantar Fasciitis",
    "Migraines",
    "Scarring",
    "Hip Pain",
    "PTSD",
    "Breathing Issues",
    "Fertility",
    "Poor Range of Motion",
    "Whiplash",
    "Jaw Pain",
    "Sciatica",
    "Gut Issues",
    "Anxiety",
    "Pre + Post Travel",
    "Pre + Post Surgery",
    "Anger",
    "Pregnancy",
    "Post Cancer Treatment",
    "Sports Injuries",
    "Birth Trauma",
    "Miscarriage",
    "Poor Posture",
    "Irregular Cycles",
    "Sleep Disturbances",
    "Breech Babies",
  ];

  return (
    <div className="conditions" ref={sectionRef}>
      <h2>CONDITIONS TREATED</h2>
      <div className="conditions__list">
        {conditionsArr.map((condition, index) => (
          <div className="condition" key={index}>
            <img src={check} alt="Checkmark" />
            <div className="condition__text">{condition}</div>
          </div>
        ))}
      </div>
      <div className="conditions__and-more">And more...</div>
      {/* <button className="conditions__button" onClick={handleBooking}>
        Book Now
      </button> */}
    </div>
  );
}

export default Conditions;
