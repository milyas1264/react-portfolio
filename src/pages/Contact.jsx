import { useState } from "react";

function Contact() {
  // Form ke input fields ka data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Successful validation ka status
  const [submitted, setSubmitted] = useState(false);

  // Input change hone par state update
  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setSubmitted(false);
  }

  // Form submit hone par
  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);

    // Filhal form data console mein check karenge
    console.log("Form Data:", formData);
  }

  return (
    <main className="contact-section">
      <p className="eyebrow">LET'S CONNECT</p>
      <h2>Contact Me</h2>

      <p className="section-description">
        Have a website project or an opportunity to discuss? I'd be happy to
        hear from you.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        {/* Name field */}
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        {/* Email field */}
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        {/* Message field */}
        <label htmlFor="message">Your Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Write your message..."
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
          minLength="10"
        />

        <button type="submit" className="primary-button">
          Submit Message ↗
        </button>

        {/* Success message */}
        {submitted && (
          <p className="success-message">
            Your form passed validation successfully!
          </p>
        )}
      </form>
    </main>
  );
}

export default Contact;
