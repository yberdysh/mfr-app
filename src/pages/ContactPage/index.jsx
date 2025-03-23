import "./index.scss";
import React, { useState } from "react";

function ContactPage() {
  const [name, setName] = useState(""); // Add state for name
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      message,
    };

    try {
      const response = await fetch(
        "https://lady-fascia-gmail-server.onrender.com/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("Message sent successfully!");
      } else {
        alert(
          "Something went wrong. Please try again later or email ladyfascia@myofascialawakening.com."
        );
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert(
        "Something went wrong. Please try again later or email ladyfascia@myofascialawakening.com."
      );
    }
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
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
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
