import "./index.scss";
import premfr from "../../assets/premfr.jpeg";
import postmfr from "../../assets/postmfr.jpeg";
import ladyFascia from "../../assets/lady-fascia.jpeg";
import { useEffect } from "react";
import Section from "../../components/Section";

function AboutPage() {
  return (
    <div className="about-page">
      <div className="about-content">
        <h1>Hi, I’m Yevgeniya - AKA Lady Fascia</h1>
        <Section
          sections={[
            {
              image: ladyFascia,
              imageAlt: "Lady Fascia",
            },
            {
              content: (
                <div>
                  <p>
                    I’m a Myofascial Release Therapist, and I help people like
                    you feel free in their body, heart, and mind. I specialize
                    in treating chronic and unexplained pain or emotional
                    trauma.
                  </p>

                  <p>
                    Often, I take on cases that have been deemed hopeless, where
                    nothing has worked in the past. I restore hope and bring
                    ease to dis-ease. Together we awaken your body's natural
                    ability to heal itself.
                  </p>

                  <p>
                    As a result, we unlock your body’s potential — so you can
                    feel limitless.
                  </p>
                </div>
              ),
              buttons: [
                {
                  text: "Book a Session",
                  link: "/booking",
                  type: "yellow",
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
                <div>
                  <p>
                    Not too long ago, I was walking around in a body carrying
                    around <i>baggage</i> — years of accumulated <i>stuff</i> of
                    everything I’d been through. I felt chronically fatigued.
                    Anxious, rageful, depressed. Things weren’t moving right- an
                    injury here, chronic pain there, a loss of range of motion
                    somewhere else. I felt <i>stuck</i> — physically and
                    emotionally.
                  </p>
                  <p>
                    I thought this was part of the normal process of just
                    getting older. Of carrying and breastfeeding two babies. Of
                    normal hormonal and postpartum stuff. Of gravity taking me
                    down. Of this, of that, the list went on and on.
                  </p>
                  <p>
                    What’s worse is that <i>nothing really seemed to help </i> —
                    doctor scans were inconclusive, massage provided temporary
                    relief, and PT didn’t make a difference– plus, most of the
                    time, I blamed myself for being too lazy to do the homework.
                    But everyone goes through it, right?
                  </p>
                  <p style={{ fontStyle: "italic" }}>Right..?</p>
                </div>
              ),
              buttons: [
                {
                  text: "Learn about MFR",
                  link: "/what-is-mfr",
                  type: "yellow",
                },
                {
                  text: "Book a Session",
                  link: "/booking",
                  type: "yellow",
                },
              ],
            },
            {
              image: premfr,
              imageAlt: "Me before I discovered MFR",
              imageCaption:
                "This is a real photo of me in Physical Therapy struggling with range of motion in my shoulder and failing to make progress - my hands were not able to get any closer than this!",
            },
          ]}
        />

        <Section
          sections={[
            {
              image: postmfr,
              imageAlt: "Me after I discovered MFR",
              imageCaption:
                "Today, my hands are able to touch and my shoulder is free all thanks to myofascial release!",
            },
            {
              content: (
                <div>
                  <p>
                    I’m here to tell you <i>it doesn’t have to be that way.</i>
                    Discovering Myofascial Release changed my entire life and
                    career trajectory. I was shocked when my first MFR session
                    resolved a chronic knee pain and postpartum rage– both of
                    which I’d been feeling for a year at that point. So I kept
                    going fir treatment. With each session, I felt more free.
                  </p>
                  <p>
                    I also learned that trauma isn’t something you have to live
                    with or simply cope with while putting on a brave face. I
                    didn't know that it could actually{" "}
                    <i>leave your body for good</i>, but it can.{" "}
                  </p>
                  <p>
                    It is now my greatest mission to ease human suffering in the
                    physical and emotional body. The less we suffer, the more we
                    live in the energy of love, kindness, and joy. The more
                    awakened we become. As a result, the whole world changes.{" "}
                  </p>
                  <p>
                    The better it gets, the better it gets. What if healing
                    isn’t about <i>doing</i> anything, but about <i>undoing </i>
                    what you’d been through that has gotten stuck in your body?
                    Every injury. Every hurt. Every experience you weren't able
                    to meet without resistance. We are all meant to be
                    limitless.
                  </p>
                  <p>Ready to feel that freedom?</p>
                </div>
              ),
              buttons: [
                {
                  text: "What is MFR?",
                  link: "/what-is-mfr",
                  type: "yellow",
                },
                {
                  text: "Book a Session",
                  link: "/booking",
                  type: "yellow",
                },
              ],
            },
          ]}
        />
      </div>
    </div>
  );
}

export default AboutPage;
