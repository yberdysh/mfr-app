import './index.scss';
import skeleton from '../../assets/skeleton.png';
import Review from '../../components/Review';
import Conditions from '../../components/Conditions';
import FaqSection from '../../components/FaqSection';
import Section from '../../components/Section';

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
                    MFR is a gentle hands-on bodywork approach where the
                    therapist applies sustained pressure to the body in order to
                    release fascial restrictions. Your fascia is the connective
                    tissue web throughout your body touching every muscle, bone,
                    and organ. Through the pizoelectric effect, we can tap into
                    the ground substance and collagenous barrier of this 3D
                    matrix, and relieve the 2,000 lbs of crushing pressure on
                    pain-sensitive structures.
                  </p>
                  <h3>What is Fascia?</h3>
                  <p>
                    MFR is meant to be experienced. You will not get a good
                    understanding of how MFR feels through google searching or
                    reading about it – it may just lead you, gentle reader, into
                    more confusion and pull you away from trying it out for
                    yourself.
                  </p>
                </div>
              ),
              buttons: [
                {
                  text: 'Book a Session',
                  link: 'www.google.com',
                  type: 'yellow',
                },
              ],
            },
            {
              image: skeleton,
              imageAlt: 'Practical example of restrictions on human body',
              imageCaption:
                'A practical example of fascial restrictions at play and how overcompensating for pain leads to more restrictions and compromises posture',
              imageTall: true,
            },
          ]}
        />
        <Section
          sections={[
            {
              content: (
                <div style={{ maxWidth: '700px' }}>
                  <h3 style={{ textAlign: 'center' }}>
                    So then…what does MFR actually feel like during a session?
                  </h3>
                  <p>
                    MFR feels like magic. You may feel deeply relaxed and fall
                    asleep. You may feel your body moving around as it
                    intuitively moves to get unstuck and reintegrates itself.
                    You may feel yourself getting unblocked or energy moving
                    within you in real time. If you allow yourself, you may feel
                    emotions come up. You may feel an incredible relief and
                    sense of complete release as a pain you’ve had for a decade
                    disintegrates under the therapist’s hands. Or, it may feel
                    uneventful as fascia is quietly releasing, and you’ll find
                    some affects afterward.
                  </p>
                </div>
              ),
            },
          ]}
        />
        <Review
          content="I was genuinely baffled by how much my body seemed to react. 
        It made me feel much lighter and even has a strangely meditative effect 
        on your thoughts and emotions."
        />
        <Conditions />
        <FaqSection />
        <div className="wimfr-content__review-section">
          <Review content="My soul felt lighter leaving the session. I left feeling less weight on my shoulders and heart." />
          <Review content="The pain I’ve been lliving with in my neck and shoulder for 10 years is gone. I’m amazed." />
          <button
            className="wimfr-page__review-section__button"
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
