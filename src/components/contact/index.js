import { useRef } from "react";
import { useIntersection } from "react-use";
import mail from "../../assets/mail.svg";

function Contact() {
  const sectionRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });
  return (
    <section ref={sectionRef} id="contact" className="contact">
      <div className="contact-container">
        <header className="contact-header">
          <h2>Get In Touch</h2>
        </header>
        <div
          className={
            intersection && intersection.intersectionRatio < 0.1
              ? "contact-content"
              : "contact-content show-element"
          }
        >
          <div className="form-container">
            <form action="">
              <input required placeholder="Full Name" type="text" />
              <input required placeholder="Email" type="email" />
              <textarea
                placeholder="Message"
                name="message"
                cols="30"
                rows="7"
              ></textarea>
              <button>Say Hi</button>
            </form>
          </div>
          <div className="contact-img">
            <h3>
              Currently looking for new opportunities and my inbox is always
              open.
            </h3>
            <img src={mail} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
