import React, { useRef, useState } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import emailjs from "emailjs-com";
import lottie from "lottie-web";
import EmailDone from "../../assets/email-completed.json";
import gsap from "gsap";
import { Circ } from "gsap/gsap-core";

function Contact({ innerRef }) {
  const form = useRef();
  const t1 = new gsap.timeline({ defaults: { ease: Circ.easeOut } });
  const animationContainer = document.querySelector(".email__lottie");
  const container = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs.sendForm(
    //   "service_z9wwotg",
    //   "template_1j7xwkh",
    //   form.current,
    //   "s9gKCVJ2nBCcqbqlp"
    // );

    t1.play();
    t1.to(".email__form", { y: 40, opacity: 0, stagger: 0.05 });
    t1.to(".contact__option", { y: 40, opacity: 0 }, "-=.8");
    setTimeout(() => {
      animationContainer.classList.remove("hidden");
      lottie.loadAnimation({
        container: container.current,
        loop: false,
        autoplay: true,
        animationData: EmailDone,
      });
    }, 800);
    setTimeout(() => {
      animationContainer.classList.add("hidden");
      lottie.destroy();
    }, 4000);
    t1.to(".email__form", { y: -40, opacity: 1 }, "+=3");
    t1.to(".contact__option", { y: -40, opacity: 1 }, "-=.3");
    e.target.reset();
  };
  t1.paused(true);

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
        <form ref={form} onSubmit={sendEmail} className="email__form">
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
          <button type="submit" className="btn btn-primary send__email-btn">
            Send Message
          </button>
        </form>
        <div className="email__lottie hidden" ref={container}></div>
      </div>
    </section>
  );
}

export default Contact;
