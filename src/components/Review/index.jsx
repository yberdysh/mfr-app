import "./index.scss";
import stars from "../../assets/stars.png";

function Review({ content }) {
  return (
    <div className="review">
      <p>{`"${content}"`}</p>
      <img src={stars} alt="5 Stars" />
    </div>
  );
}

export default Review;
