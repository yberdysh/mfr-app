import "./index.scss";
import treatment from "../../assets/treatment-room.jpeg";
import Section from "../../components/Section";
import image1 from "../../assets/homepage-image-1.jpeg";
import image2 from "../../assets/homepage-image-2.jpeg";
import image4 from "../../assets/homepage-image-4.jpg";
import { useNavigate } from "react-router-dom";
import Carousel from "../../components/Carousel";

function HomePage() {
  function handleBooking() {
    navigate("/booking");
  }

  return (
    <div className="home-page">
      <div className="home-content__banner">
        <img
          className="home-content__banner__image"
          src={treatment}
          alt="treatment room"
        />
        <div className="home-content__banner__overlay">
          <h1 className="home-content__banner__text">
            It's time to free yourself of pain and trauma, and awaken your
            potential
          </h1>
          <button
            className="home-content__banner__button"
            onClick={handleBooking}
          >
            Book Now
          </button>
        </div>
      </div>

      <div className="home-content">
        <Section
          sections={[
            {
              content: (
                <div className="home-content__welcome">
                  Welcome! I’m Yevgeniya- aka Lady Fascia
                </div>
              ),
            },
          ]}
        />

        <Section
          mobileReverseOrder
          sections={[
            {
              content: (
                <div className="home-content__section">
                  <p>
                    I help people like you dissolve pain, stuckness, and trauma
                    to feel free again.
                  </p>
                  <p>Do you struggle with...</p>
                  <ul>
                    <li>
                      chronic pain, vague symptoms, and being medically
                      dismissed by doctors?
                    </li>
                    <li>
                      not feeling like yourself after an illness, accident,
                      surgery, or trauma?
                    </li>
                    <li>
                      your body not moving well and feel like you’re “just
                      getting old?”
                    </li>
                    <li>
                      feeling that something is still missing after trying PT
                      and chiropractic — or being told your only option is
                      surgery?
                    </li>
                  </ul>
                </div>
              ),
              buttons: [
                {
                  text: "Book Now",
                  link: "/booking",
                  type: "blue",
                },
              ],
            },
            {
              image: image1,
              imageAlt: "Lady Fascia",
              id: "lady-fascia",
            },
          ]}
        />

        <Section
          sections={[
            {
              image: image4,
              imageAlt: "Man using MFR",
            },
            {
              content: (
                <div className="home-content__section">
                  <p>
                    I’ve been there — I know what it’s like to accept pain as
                    the new norm. That’s why, as an MFR therapist, my mission is
                    to ease your burden no matter how long you’ve been
                    suffering. Even if you feel hopeless and you’ve heard it all
                    before. <i>Especially</i> if that’s the case for you.
                  </p>
                  <p>
                    By the way, MFR helps release both physical and emotional
                    pain too. That’s because emotions aren't just in the mind —
                    they live in the body.{" "}
                  </p>
                  <p>
                    If you feel like trauma is holding you back and you can’t
                    let go of the past, book an appointment.
                  </p>
                </div>
              ),
              buttons: [
                {
                  text: "Read my Story",
                  link: "/about",
                  type: "blue",
                },
                {
                  text: "What is MFR",
                  link: "/what-is-mfr",
                  type: "blue",
                },
              ],
            },
          ]}
        />

        <Section
          mobileReverseOrder
          sections={[
            {
              content: (
                <div className="home-content__section">
                  <p>Still unsure if MFR is for you? Give it a try if...</p>
                  <ul>
                    <li>
                      You're experiencing pain or discomfort anywhere in your
                      body.
                    </li>
                    <li>
                      You're tired of being dismissed by doctors, recommended
                      treatments you don't want, or nothing seems to be working.
                    </li>
                    <li>
                      You feel like you can’t shake off your past or are
                      struggling emotionally.
                    </li>
                    <li>
                      You feel fine but just want to accelerate to the next
                      level and unleash your highest potential.
                    </li>
                  </ul>
                </div>
              ),
              buttons: [
                {
                  text: "Book Now",
                  link: "/booking",
                  type: "blue",
                },
              ],
            },
            {
              image: image2,
              imageAlt: "Woman using MFR",
            },
          ]}
        />

        <Section
          sections={[
            {
              content: (
                <div className="home-content__welcome">
                  <h1>What People Are Saying</h1>
                  <Carousel
                    isReviews
                    carouselItems={[
                      {
                        content:
                          "I feel so incredibly lucky that I found myofascial release and especially Yevgeniya. I had some stuckness in my arm, neck, and shoulder that I had been dealing with for 12 years and she helped me release it. I have been looking for this type of relief for so long!",
                      },
                      {
                        content:
                          "Yevgeniya has been helping me along with my fertility journey. I had so much scarring in my womb most likely due to the c-section that I had with my first child. She’s helped me clear it out, along with some emotions that I didn’t know were there. I’m feeling free in my body, and my back has never felt better.",
                      },
                      {
                        content:
                          "Yevgeniya is one of the most compassionate people that I have ever met. She truly has a gift for bodywork, but her gifts go way beyond that. She knows how to hold space and exactly the right things to say when you’re going through tough stuff on her table. This has been more effective than therapy for me, and the world needs healers like her.",
                      },
                    ]}
                  />
                </div>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
}

export default HomePage;
