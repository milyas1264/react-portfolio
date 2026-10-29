function Contact() {
  // Contact page par visitor ko rabta karne ka tareeqa denge.
  return (
    <main className="placeholder-section" id="contact">
      <p className="eyebrow">LET'S CONNECT</p>
      <h2>Contact Me</h2>

      <p>
        Have a website project or an opportunity to discuss? I'd be happy to
        hear from you.
      </p>

      {/* Email link visitor ka email application kholta hai */}
      <a
        className="primary-button"
        href="mailto:your-email@example.com"
        style={{ marginTop: "24px" }}
      >
        Email Me ↗
      </a>
    </main>
  );
}

export default Contact;
