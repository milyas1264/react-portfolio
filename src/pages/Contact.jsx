import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setStatus("");
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: "New message from portfolio",
      message: formData.message,
    };

    try {
      await emailjs.send(
        "service_r221qkn",
        "template_amwud4c",
        templateParams,
        "Ly3OYRpcODxLPSQ7D",
      );

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
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
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
          minLength={3}
          maxLength={50}
        />

        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
          maxLength={50}
        />

        <label htmlFor="message">Your Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Write your message..."
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
          minLength={10}
          maxLength={1000}
        />
        <p className="character-count">
          {formData.message.length}/1000 characters
        </p>

        <button type="submit" className="primary-button" disabled={loading}>
          {loading ? "Sending..." : "Submit Message ↗"}
        </button>

        {status === "success" && (
          <p className="success-message">
            Your message has been sent successfully!
          </p>
        )}

        {status === "error" && (
          <p className="error-message">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </main>
  );
}

export default Contact;
