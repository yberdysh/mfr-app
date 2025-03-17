import "./index.scss";
import { useEffect, useRef } from "react";

function PageSection({
  background,
  subtitle,
  title,
  content,
  buttons,
  image,
  imageAlt,
  flipped,
  imageCaption,
}) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  function buttonHandler(link) {
    // do the thing
  }
  // Remove below for real site
  const testImg =
    "https://media.canva.com/v2/image-resize/format:JPG/height:1600/quality:92/uri:ifs%3A%2F%2F%2F58cb6943-d71b-4459-95d2-b5dcf4c3e5e3/watermark:F/width:1066?csig=AAAAAAAAAAAAAAAAAAAAAHKX6lWQ5Qj1TVp02UodtH8g4DEUEtSil2b7EeySy05g&exp=1742191874&osig=AAAAAAAAAAAAAAAAAAAAANOGj9cp6u1c7yBwIDaSStUBbwEbVSRJk9SiRSWVOuZ-&signer=media-rpc&x-canva-quality=screen_2x";

  return (
    <div
      className="page-section"
      style={{ backgroundColor: background ? background : "transparent" }}
      ref={sectionRef}
    >
      <div className="page-section__container" data-flipped={flipped}>
        <div className="page-section__image-container">
          <img
            src={image ? image : testImg}
            className="page-section__image-container__image"
            alt={imageAlt}
          />
          {imageCaption && (
            <div className="page-section__image-container__caption-container">
              <div className="page-section__image-container__caption-container__caption">
                {imageCaption}
              </div>
            </div>
          )}
        </div>

        <div className="page-section__text-container">
          {title && (
            <h1 className="page-section__text-container__title">{title}</h1>
          )}
          {subtitle && (
            <h2 className="page-section__text-container__subtitle">
              {subtitle}
            </h2>
          )}
          <div className="page-section__text-container__content">{content}</div>
          {buttons && (
            <div className="page-section__text-container__button-container">
              {buttons.map((button, index) => (
                <button key={index} onClick={buttonHandler(button.link)}>
                  {button.text}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PageSection;
