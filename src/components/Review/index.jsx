import "./index.scss";
import stars from "../../assets/stars.png";

function Review({ content }) {
  return (
    <div className="review">
      <p className="review__text">{`"${content}"`}</p>
      <img className="review__image" src={stars} alt="5 Stars" />
    </div>
  );
}

export default Review;
