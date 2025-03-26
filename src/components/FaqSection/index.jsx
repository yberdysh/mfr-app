import "./index.scss";
import lazyLoad from "../../utils/lazyload";
import Accordion from "../Accordion";
import mfrRelease from "../../assets/homepage-image-5.jpg";

function FaqSection() {
  const sectionRef = lazyLoad();

  const faqArray = [
    {
      title: "How should I prepare for a session?",
      content:
        "The less prepared you are, the better. Come with an open mind. Don’t wear lotions or oils. Wear loose clothing or shorts/underwear and sports bra. Take down your walls, don’t suppress, and just allow your body to do what it needs to heal.",
    },
    {
      title: "What's the difference between massage and MFR?",
      content:
        "Massage uses lotion or oil and follows a structured routine, primarily working on muscles with continuous movement. While it can provide temporary relief, it doesn’t apply the sustained pressure needed to provide a complete release. MFR, on the other hand, focuses only on the areas that need attention, using gentle, sustained pressure without lotion or oil. This allows for a deeper release in the tissues. Although we don't touch every area during a session, you will be surpirsed how much long-lasting change you feel throughout your entire body. This is because fascia is all connected, so when we release one area, it affects the whole body.",
    },
    {
      title: "What will I feel during an MFR session? ",
      content:
        "Everyone experiences MFR differently. You may feel warmth, pulsation, energy flowing, or a connection to another part of your body. You may feel your body moving around as it intuitively moves to get unstuck and reintegrates itself. If you allow yourself, you may feel emotions come up. You may feel incredible relief and sense of complete release.You may also not feel much during a session other than deep relaxation as the fascia is quietly releasing. ",
    },
    {
      title: "Is it painful?",
      content:
        "MFR is intended to meet your body where it’s at. MFR therapists are trained to feel your body’s barriers and not push past them. Instead we hold at the barrier while your body opens and allows deep healing to occur. Layer by layer, each barrier slowly dissolves.",
    },
    {
      title: "Am I going to end up emotional in my session?",
      content:
        "Maybe. Not necessarily. If you are not typically emotionally open, you will not suddenly become emotional during a session. Remember that you always have a choice and no one will force you through an emotional barrier that you’re not ready to cross. That being said, I do recommend not suppressing emotions during a session since feeling will help the healing process.",
    },
    {
      title: "What will I feel like afterward?",
      content:
        "You may feel lighter, or like you have more space in your body. You may end up taller as your posture improves. You may experience more range of motion, freedom of movement. You may feel yourself releasing emotionally later when you feel safe to do so. In some cases, a “healing crisis” may occur. This is a slight exacerbation of symptoms as your body is healing or as you notice new pains uncovered as old pains are released.",
    },
    {
      title: "Is this energy work?",
      content:
        "MFR is a hands-on modality and works with the physical body through touch. It is not technically classified as energy work, as its effects are rooted in tangible, measurable changes in the fascial system. However, even though MFR focuses on releasing physical restrictions, the body is deeply interconnected and bodywork of any kind can have an energetic component. This is because science is now catching up and showing that emotions and memory are stored in the body's tissues.",
    },
    {
      title: "Do you take insurance?",
      content:
        "No, because insurance companies often have strict guidelines dicating the number of sessions and the type of treatment you can receive. This can be limiting to your healing process. I want to give you the best care possible and not be limited by insurance companies. You may be able to use an FSA/HSA card, or ask a doctor to refer you for MFR, and try submitting a claim afterward",
    },
    {
      title: "How many sessions will I need?",
      content:
        "Every body is unique, and healing takes time. Factors like how long you’ve had your condition and past trauma affect the process, which isn’t always linear. Many clients continue beyond their initial concern because of the profound benefits of myofascial release. There are always deeper layers to explore. I recommend starting with a series of sessions to see how your body responds.",
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
