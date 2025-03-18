import "./index.scss";
import SectionContent from "../SectionContent";
import lazyLoad from "../../utils/lazyload";

function Section({ sections }) {
  const sectionRef = lazyLoad();

  return (
    <div className="section" ref={sectionRef}>
      {sections.map((section, id) => (
        <SectionContent
          key={id}
          content={section.content}
          image={section.image}
          imageAlt={section.imageAlt}
          imageCaption={section.imageCaption}
          buttons={section.buttons}
          imageTall={section.imageTall}
        />
      ))}
    </div>
  );
}

export default Section;
