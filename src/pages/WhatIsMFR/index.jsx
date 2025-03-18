import "./index.scss";
import skeleton from "../../assets/skeleton.png";
import Review from "../../components/Review";
import Conditions from "../../components/Conditions";
import FaqSection from "../../components/FaqSection";
import Section from "../../components/Section";
import ListSection from "../../components/ListSection";

function WhatIsMFR() {
  function handleBooking() {
    //booking logic goes here...
  }

  return (
    <div className="wimfr-page">
      <div className="wimfr-content">
        <Section
          ratio="2:1"
          sections={[
            {
              content: (
                <div>
                  <h3>What is Fascia?</h3>
                  <p>
                    Fascia is the 3D web of connective tissue that surrounds
                    every bone, muscle, and organ in your body. It is both
                    protective and adaptive. It holds your organs in place and
                    responds to any stress that you experience. It tightens as a
                    result of trauma, injury, poor posture, and lack of
                    movement. Often the root cause of chronic pain, fascia also
                    stores tissue memory and emotions from unresolved
                    experiences.
                  </p>
                  <h3>What is MFR?</h3>
                  <p>
                    Myofascial release therapy is a hands-on bodywork that
                    effectively dissolves any blockers or restrictions in your
                    body, both physical and emotional. I as the therapist do
                    this through first assessing your posture and restrictions,
                    and then applying intentional and sustained pressure to
                    release them.
                  </p>
                  <p>
                    MFR gets your body free and moving again after injury,
                    illness, or poor posture. It helps you break free of trauma
                    and let go of difficult emotions. It gets you unstuck when
                    you’re feeling stuck in life or in your body. The best way
                    to understand it is to experience it for yourself.
                  </p>
                  <p>
                    What if healing is about removing everything that’s holding
                    you back and letting your body do the rest?
                    <p>Ready to let go and heal? </p>
                  </p>
                </div>
              ),
              buttons: [
                {
                  text: "Book a Session",
                  link: "www.google.com",
                  type: "yellow",
                },
              ],
            },
            {
              image: skeleton,
              imageAlt: "Practical example of restrictions on human body",
              imageCaption:
                "A practical example of fascial restrictions at play and how overcompensating for pain leads to more restrictions and compromises posture",
              imageTall: true,
            },
          ]}
        />
        <Review content="The pain I’ve been living with in my neck and shoulder for 10 years is gone. I’m amazed." />
        <Review
          content="I was genuinely baffled by how much my body seemed to react. 
        It made me feel much lighter and even has a strangely meditative effect 
        on your thoughts and emotions."
        />
        <ListSection
          title="Imagine Yourself"
          content={
            <ul>
              <li>Without chronic or unexplained pain</li>
              <li>Feeling free in your body</li>
              <li>Being a more patient parent and partner</li>
              <li>Feeling limitless and full of boundless energy</li>
              <li>Your athletic performance at its most optimal</li>
              <li>Feeling connected, not dissociated</li>
              <li>Playing with your dog, kids, or grandkids on the floor</li>
              <li>Doing hobbies and activities you love</li>
              <li>Dissolving stuckness in your life</li>
              <li>Traveling anywhere in the world without pain or stiffness</li>
              <li>Having a connected and radiant transition into motherhood</li>
              <li>Finally letting go of shame, grief, fear, and despair</li>
              <li>Your athletic performance at its most optimal</li>
              <li>
                Feeling the freedom, hope, and excitement of endless
                possibilities
              </li>
              <li>Thriving, not just living</li>
            </ul>
          }
        />
        <Conditions />
        <FaqSection />
        <div className="wimfr-content__review-section">
          <Review content="My soul felt lighter leaving the session. I left feeling less weight on my shoulders and heart." />
          <Review content="The pain I’ve been living with in my neck and shoulder for 10 years is gone. I’m amazed." />
          <button
            className="wimfr-content__review-section__button"
            onClick={handleBooking}
          >
            Book a Session
          </button>
        </div>
      </div>
    </div>
  );
}

export default WhatIsMFR;
