import emailjs from "emailjs-com";

import React, { useRef, useState } from "react";

import "./contacts.scss";

import { AiOutlineMail } from "react-icons/ai";
import { FaTelegramPlane, FaViber } from "react-icons/fa";

const Contacts = () => {
  const form = useRef();
  const [btnMessage, setBtnMessage] = useState("Send message");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2culcq7",
        "template_rcv17d4",
        form.current,
        "Rfy45T8SQz3mesueU"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setBtnMessage("Your message has been sent");
    setTimeout(() => setBtnMessage("Send message"), 3000);

    e.target.reset();
  };

  return (
    <section id="contacts">
      <h5>Hire Me</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>spivakovarsen@gmail.com</h5>
            <a href="mailto:spivakovarsen@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <FaTelegramPlane className="contact__option-icon" />
            <h4>Telegram</h4>
            <h5>@Spivakov92</h5>
            <a href="https://telegram.me/Spivakov92" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <FaViber className="contact__option-icon" />
            <h4>Viber</h4>
            <h5>063 97 63 281</h5>
            <a href="viber://chat?number=%2B380639763281" target="_blank">
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your name" />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea
            name="message"
            rows="5"
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            {btnMessage}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
