import React, { useRef, useEffect } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import emailjs from "emailjs-com";
import lottie from "lottie-web";
import EmailDone from "../../assets/email-completed.json";
import gsap, { Power3 } from "gsap";
import { Circ } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Contact({ innerRef }) {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    // gsap.from("#contact", {
    //   duration: 1,
    //   y: "100",
    //   opacity: 0,
    //   ease: "ease-in",
    //   scrollTrigger: {
    //     trigger: "#contact",
    //     start: "top 90%",
    //     end: "bottom 20%",
    //     toggleActions: "restart complete complete reset",
    //   },
    // });

    gsap.set("#contact", { y: 100, opacity: 0 });
    ScrollTrigger.batch("#contact", {
      start: "top 70%",
      end: "bottom 20%",
      onEnter: () =>
        gsap.to("#contact", {
          opacity: 1,
          autoAlpha: 1,
          y: 0,
          ease: "ease-in",
          overwrite: true,
        }),
      onLeaveBack: () =>
        gsap.to("#contact", {
          opacity: 0,
          autoAlpha: 1,
          y: 100,
          overwrite: true,
        }),
    });
  }, []);
  const form = useRef();
  const t1 = new gsap.timeline({ defaults: { ease: Circ.easeOut } });
  const animationContainer = document.querySelector(".email__lottie");
  const container = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_z9wwotg",
      "template_1j7xwkh",
      form.current,
      "s9gKCVJ2nBCcqbqlp"
    );

    t1.play();
    t1.to(".email__form", {
      y: 40,
      opacity: 0,
      stagger: 0.05,
      ease: Power3.easeOut,
    });
    t1.to(
      ".contact__option",
      { y: 40, opacity: 0, ease: Power3.easeOut },
      "-=.8"
    );
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
    t1.fromTo(".email__form", { y: 40 }, { y: 0, opacity: 1 }, "+=3");
    t1.fromTo(".contact__option", { y: 40 }, { y: 0, opacity: 1 }, "-=.3");
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
