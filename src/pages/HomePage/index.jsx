import "./index.scss";
import treatment from "../../assets/treatment-room.jpeg";
import Section from "../../components/Section";
import image1 from "../../assets/homepage-image-1.jpeg";
import image2 from "../../assets/homepage-image-2.jpeg";
// import image3 from "../../assets/homepage-image-3.jpeg";
import image4 from "../../assets/mfr-example.jpeg";

import Carousel from "../../components/Carousel";

function HomePage() {
  return (
    <div className="home-page">
      <div className="home-content">
        <div className="home-content__banner">
          <img
            className="home-content__banner__image"
            src={treatment}
            alt="treatment room"
          />
          <h1 className="home-content__banner__text">
            It’s time to free yourself of pain and trauma, and awaken your
            potential
          </h1>
        </div>

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
          sections={[
            {
              image: image1,
              imageAlt: "Lady Fascia",
              id: "lady-fascia",
            },
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
                      chronic pain, vagues symptoms, and have been medically
                      dismissed by doctors?
                    </li>
                    <li>
                      not feeling yourself after an illness, accident, surgery,
                      or trauma?
                    </li>
                    <li>being told your only option is surgery?</li>
                    <li>
                      your body not moving well and feel like you’re “just
                      getting old?”
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
          ]}
        />

        <Section
          sections={[
            {
              content: (
                <div className="home-content__section">
                  <p>
                    I’ve been there—I know what it’s like to accept pain as the
                    new norm. That’s why, as an MFR therapist, it’s my mission
                    to ease your burden no matter how long you’ve been
                    suffering. Even if you feel hopeless and you’ve heard it all
                    before. Especially if that’s the case for you.
                  </p>
                  <p>
                    By the way, MFR works to release both physical and emotional
                    pain too. That’s because emotions are in the body, not the
                    mind.{" "}
                  </p>
                  <p>
                    If you feel like you can’t let go of your past and have
                    trauma holding you back, book an appointment.
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
            {
              image: image2,
              imageAlt: "Woman using MFR",
            },
          ]}
        />

        <Section
          sections={[
            {
              image: image4,
              imageAlt: "Woman using MFR",
            },
            {
              content: (
                <div className="home-content__section">
                  <p>Still unsure if it’s for you?</p>
                  <p>
                    Even if nothing is currently hurting, MFR can help you excel
                    and unlock your highest potential.
                  </p>
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
