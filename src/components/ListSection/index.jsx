import "./index.scss";
import lazyLoad from "../../utils/lazyload";

function ListSection({ title, content }) {
  const sectionRef = lazyLoad();

  return (
    <div className="list-section" ref={sectionRef}>
      <h2 className="list-section__title">{title}</h2>
      <div className="list-section__content">{content}</div>
    </div>
  );
}

export default ListSection;
