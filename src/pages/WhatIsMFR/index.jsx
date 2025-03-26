import "./index.scss";
import skeleton from "../../assets/skeleton.png";
import Review from "../../components/Review";
import Conditions from "../../components/Conditions";
import FaqSection from "../../components/FaqSection";
import Section from "../../components/Section";
import ListSection from "../../components/ListSection";
import { useNavigate } from "react-router-dom";
import Carousel from "../../components/Carousel";
import ArrowIcon from "../../assets/arrow-icon.png";

function WhatIsMFR() {
  const navigate = useNavigate();

  function handleBooking() {
    navigate("/booking");
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
                  <h2 className="first-section__title">What is Fascia?</h2>
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
                  <h2 className="first-section__title">What is MFR?</h2>
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
            },
            {
              image: skeleton,
              imageAlt: "Practical example of restrictions on human body",
              // imageCaption:
              //   "A practical example of fascial restrictions at play and how overcompensating for pain leads to more restrictions and compromises posture",
              imageTall: true,
            },
          ]}
        />
        <button
          className="wimfr-content__review-section__button"
          onClick={handleBooking}
        >
          Book a Session
        </button>
        {/* <Review content="The pain I’ve been living with in my neck and shoulder for 10 years is gone. I’m amazed." />
        <Review
          content="I was genuinely baffled by how much my body seemed to react. 
        It made me feel much lighter and even has a strangely meditative effect 
        on your thoughts and emotions."
        /> */}
        <Conditions />

        <FaqSection />
        <ListSection
          title="IMAGINE YOURSELF"
          content={
            <div>
              <ul>
                <li>
                  <img src={ArrowIcon} alt="arrow icon" />
                  <span>Without chronic or unexplained pain</span>
                </li>
                <li>
                  <img src={ArrowIcon} alt="arrow icon" />
                  <span>Feeling free in your body</span>
                </li>
                <li>
                  <img src={ArrowIcon} alt="arrow icon" />
                  <span>Healing without the surgery that was recommended</span>
                </li>
                <li>
                  <img src={ArrowIcon} alt="arrow icon" />
                  <span>Being a more patient parent and partner</span>
                </li>
                <li>
                  <img src={ArrowIcon} alt="arrow icon" />
                  <span>Feeling limitless and full of boundless energy</span>
                </li>
                <li>
                  <img src={ArrowIcon} alt="arrow icon" />
                  <span>Your athletic performance at its most optimal</span>
                </li>
                <li>
                  <img src={ArrowIcon} alt="arrow icon" />
                  <span>Feeling connected, not dissociated</span>
                </li>
                <li>
                  <img src={ArrowIcon} alt="arrow icon" />
                  <span>
                    Playing with your dog, kids, or grandkids on the floor
                  </span>
                </li>
                <li>
                  <img src={ArrowIcon} alt="arrow icon" />
                  <span>Doing hobbies and activities you love</span>
                </li>
                <li>
                  <img src={ArrowIcon} alt="arrow icon" />
                  <span>Dissolving stuckness in your life</span>
                </li>
                <li>
                  <img src={ArrowIcon} alt="arrow icon" />
                  <span>
                    Traveling anywhere in the world without pain or stiffness
                  </span>
                </li>
                <li>
                  <img src={ArrowIcon} alt="arrow icon" />
                  <span>
                    Having a connected and radiant transition into motherhood
                  </span>
                </li>
                <li>
                  <img src={ArrowIcon} alt="arrow icon" />
                  <span>
                    Finally letting go of shame, grief, fear, and despair
                  </span>
                </li>
                <li>
                  <img src={ArrowIcon} alt="arrow icon" />
                  <span>Your athletic performance at its most optimal</span>
                </li>
                <li>
                  <img src={ArrowIcon} alt="arrow icon" />
                  <span>Feeling the freedom of endless possibilities</span>
                </li>
                <li>
                  <img src={ArrowIcon} alt="arrow icon" />
                  <span>Thriving, not just living</span>
                </li>
              </ul>
              <button
                className="wimfr-content__review-section__button"
                onClick={handleBooking}
              >
                Book Now
              </button>
            </div>
          }
        />
        <div className="wimfr-content__review-section">
          <Carousel
            isReviews
            carouselItems={[
              {
                content:
                  "My soul felt lighter leaving the session. I left feeling less weight on my shoulders and heart.",
              },
              {
                content:
                  "Prior to working with Yevgeniya, I could'nt lift my arm past 90 degrees. After a few sessions, I can raise my arm above my head like I used to. I'm amazed!",
              },
              {
                content:
                  "I was genuinely baffled by how much my body seemed to react.It made me feel much lighter and even has a strangely meditative effect on your thoughts and emotions.",
              },
            ]}
          />

          {/* <button
            className="wimfr-content__review-section__button"
            onClick={handleBooking}
          >
            Book a Session
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default WhatIsMFR;
