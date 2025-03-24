import "./index.scss";
import { useNavigate } from "react-router-dom";

function SectionContent({
  content,
  image,
  imageAlt,
  imageCaption,
  buttons,
  imageTall,
  imageId,
}) {
  const navigate = useNavigate();

  function buttonHandler(link) {
    console.log("link: ", link);
    navigate(link);
  }

  return (
    <div className="section-content">
      {image && (
        <div className="section-content__image-container">
          <img
            className="section-content__image"
            src={image}
            alt={imageAlt}
            data-tall={imageTall}
            id={imageId}
          />
          {imageCaption && (
            <div className="section-content__caption-container">
              <div className="section-content__caption-container__caption">
                {imageCaption}
              </div>
            </div>
          )}
        </div>
      )}
      {content && <div className="section-content__content">{content}</div>}
      {buttons && (
        <div className="section-content__buttons">
          {buttons.map((button, index) => (
            <button
              key={index}
              onClick={() => buttonHandler(button.link)}
              data-color={button.type}
            >
              {button.text}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default SectionContent;
