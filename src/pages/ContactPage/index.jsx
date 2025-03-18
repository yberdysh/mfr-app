import "./index.scss";
import React, { useState } from "react";

function ContactPage() {
  const [name, setName] = useState(""); // Add state for name
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:ladyfascia@myofascialawakening.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}%0A%0AFrom: ${encodeURIComponent(
      name
    )} (${encodeURIComponent(email)})`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="contact">
      <div className="contact-content">
        <h1>Get in Touch!</h1>

        <form className="email-form" onSubmit={handleSubmit}>
          <div className="email-form__field">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)} // Update name state
              required
            />
          </div>
          <div className="email-form__field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="email-form__field">
            <label htmlFor="subject">Message Subject</label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <div className="email-form__field">
            <label htmlFor="body">Message</label>
            <textarea
              id="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="email-form__button">
            Send Email
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
