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
        <Section
          sections={[
            {
              image: ladyFascia,
              imageAlt: "Lady Fascia",
            },
            {
              content: (
                <div>
                  <h1>Hi, I’m Yevgeniya, Also Known as Lady Fascia</h1>
                  <p>
                    I’m a Myofascial Release Therapist, and I help people like
                    you feel free in their bodies and minds. I specialize in
                    treating chronic pain, postpartum issues, and emotional
                    trauma. I’m here to help you unlock your body’s potential
                    and feel limitless.
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
                    be through. I felt tired. Worn down. Anxious, rageful,
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
                  link: "www.google.com",
                  type: "yellow",
                },
                {
                  text: "Book a Session",
                  link: "www.google.com",
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
                  <p>Spoiler alert- I unlocked my shoulder and so much more.</p>
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
                  link: "www.google.com",
                  type: "yellow",
                },
                {
                  text: "Book a Session",
                  link: "www.google.com",
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
