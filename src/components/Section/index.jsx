import './index.scss';
import SectionContent from '../SectionContent';
import lazyLoad from '../../utils/lazyload';

function Section({ sections, ratio }) {
  const sectionRef = lazyLoad();

  function setRatioWidth() {
    switch (ratio) {
      case '2:1':
        return 'two-thirds';
      default:
        return 'default';
    }
  }

  const ratioData = setRatioWidth();

  return (
    <div className="section" ref={sectionRef} data-ratio={ratioData}>
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
