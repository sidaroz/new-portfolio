import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import emailjs from "emailjs-com";

function Contact({ innerRef }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_z9wwotg",
      "template_1j7xwkh",
      form.current,
      "s9gKCVJ2nBCcqbqlp"
    );

    e.target.reset();
  };
  return (
    <section id="contact" ref={innerRef}>
      <h5>Get In Touch</h5>
      <h2 className="contact__h2">.contact()</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>sidarozbek96@gmail.com</h5>
            <a
              href="mailto:sidarozbek96@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
