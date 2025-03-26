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
                    I’m a John F Barnes Myofascial Release Therapist, and I help
                    people like you feel free in their body, heart, and mind. I
                    specialize in treating chronic and unexplained pain or
                    emotional trauma.
                  </p>

                  <p>
                    Oftentimes, I pick up the cases that have been deemed
                    hopeless, where nothing has worked in the past. I restore
                    hope and bring ease into dis-ease. Together we restore your
                    body's natural ability to heal itself.
                  </p>

                  <p>
                    As a result, we unlock your body’s potential and you feel
                    limitless.
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
          sections={[
            {
              content: (
                <div>
                  <p>
                    Not too long ago, I was walking around in a body carrying
                    around baggage– years of accumulated stuff of everything I’d
                    be through. I felt chronically fatigued. Anxious, rageful,
                    depressed. Things weren’t moving right- an injury here, a
                    chronic pain there, a loss of range of motion over there. I
                    felt stuck- physically and emotionally.
                  </p>
                  <p>
                    I thought this was part of the normal process of just
                    getting older. Of having carried and breastfed two babies.
                    Of normal hormonal and postpartum stuff. Of gravity taking
                    me down. Of this, of that, the list goes on and on.
                  </p>
                  <p>
                    What’s worse is that nothing really seemed to help- doctor
                    scans were inconclusive, massage provided temporary relief,
                    and PT didn’t make a difference– plus most of the time I
                    blamed myself for being too lazy to do the homework. But
                    everyone goes through it, right?
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
                    I’m here to tell you it doesn’t have to be that way.
                    Discovering myofascial release changed my entire life and
                    career trajectory. I was shocked when my first MFR session
                    resolved a chronic knee pain and postpartum rage– both of
                    which I’d been feeling for a year at that point. So I kept
                    going for treatment- each session feeling more free.
                  </p>
                  <p>
                    And I've also learned that trauma doesn't have to be
                    something you live with and learn to cope with while putting
                    on a brave face. I didn't know that it could actually leave
                    your body, but it can.{" "}
                  </p>
                  <p>
                    It is now my greatest mission to ease human suffering in the
                    physical and emotional body. The less we are suffering, the
                    more we are living in the energy of love, kindness, joy, and
                    the more awakened we become. As a result, the whole world
                    changes.{" "}
                  </p>
                  <p>
                    The better it gets, the better it gets. What if healing
                    isn’t about doing anything, but about undoing what you’d
                    been through that has gotten stuck in your body? What if you
                    could be limitless?
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
