import "./index.scss";
import lazyLoad from "../../utils/lazyload";
import Accordion from "../Accordion";
import mfrRelease from "../../assets/mfr-example.jpeg";

function FaqSection() {
  const sectionRef = lazyLoad();

  const faqArray = [
    {
      title: "Is MFR energy work?",
      content:
        "MFR is a hands-on modality and works with the physical body through touch, so it is not classified as energy work. There is more and more science coming out in recent times to support the role that fascia plays in pathology. That being said, even physical bodywork does tend to have a component of “energy.” This is because science has recently shown that emotions are stored in the body, not in the mind– and in fact tissue has memory.",
    },
    {
      title: "What will I feel during an MFR session? ",
      content:
        "MFR feels like magic. You may feel deeply relaxed and fall asleep. You may feel your body moving around as it intuitively moves to get unstuck and reintegrates itself. You may feel yourself getting unblocked or energy moving within you in real time. If you allow yourself, you may feel emotions come up. You may feel an incredible relief and sense of complete release as a pain you’ve had for a decade disintegrates under the therapist’s hands. Or, it may feel uneventful as fascia is quietly releasing, and you’ll find some affects afterward. ",
    },
    {
      title: "Do you take insurance?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      title: "How many sessions will I need?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      title: "Am I going to end up emotional in my session?",
      content:
        "Maybe. Not necessarily. If you are not typically emotionally open, you will not suddenly become emotional during a session. Remember that you always have a choice and no one will force you through an emotional barrier that you’re not ready to cross. That being said, I do recommend you not suppress emotions during a session since feeling will help the healing process.",
    },
    {
      title: "How should I prepare for a session?",
      content:
        "The less prepared you are, the better. Come with an open mind. Don’t wear lotions or oils. Wear loose clothing or shorts/underwear and sports bra. Take down your walls, don’t suppress, and just allow your body to do what it needs to heal.",
    },
    {
      title: "What will I feel like afterward?",
      content:
        "You may feel lighter, or like you have more space in your body. You may end up taller as your posture improves. In some cases, a “healing crisis” may occur. This is a slight exacerbation of symptoms as your body is healing or as you notice new pains uncovered as old pains are released. More range of motion, freedom of movement.",
    },
    {
      title: "Is it painful?",
      content:
        "MFR is intended to meet your body where it’s at. MFR therapists are trained to feel your body’s barriers and not push past them. Instead we hold at the barrier while your body opens and allows deep healing to occur. Layer by layer, each barrier slowly dissolves.",
    },
  ];

  return (
    <div className="faq-section" ref={sectionRef}>
      <h2>Other FAQ</h2>
      <div className="faq-section__content">
        <div className="faq-section__content__questions">
          {faqArray.map(({ title, content }, id) => (
            <Accordion key={id} title={title} content={content} />
          ))}
        </div>
        <div className="faq-section__content__image">
          <img src={mfrRelease} alt="MFR release" />
        </div>
      </div>
    </div>
  );
}

export default FaqSection;
