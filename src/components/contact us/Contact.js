import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2gkvrid",
        "template_qoxinvy",
        form.current,
        "user_CeP5JbAgJY9AGNMNPBDoG"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="main-say">
      <div className="say-right">
        <span className="say-title">Let's Connect & Give Your Projects?</span>
        <p className="say-par">
        ⭐I’d love to hear from you !!!
          <br /><br/>
          whether you want to learn more about my services, want to collaborate
          on a project, Like what you see? Have a project you’d like to talk
          about? <br /><br/>
          Want to ask a personal question? conect with form or my personal
          email.
        
        </p>
      </div>
      <div className="say-left">
        <form ref={form} onSubmit={sendEmail}>
          <div className="padder">
            <label className="con-label">
              {" "}
              Your Name
              <input type="text" name="user_name" required />
            </label>

            <br />
            <label className="con-label">
              Your Email
              <input type="email" name="user_email" required />
            </label>
            <label className="con-label">
              Message
              <textarea name="message" rows="5" required></textarea>
            </label>
          </div>
          <button className="con-btn">Connect With Me</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
