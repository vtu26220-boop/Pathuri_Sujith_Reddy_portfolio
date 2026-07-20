import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <section className="section contact-section" id="contact">

      <div className="wide-container">

        <div className="section-heading">
          <h2>
            Get in <span>Touch</span>
          </h2>

          <div className="heading-line"></div>
        </div>

        <div className="contact-layout">

          <ContactInfo />

          <ContactForm />

        </div>

      </div>

    </section>
  );
}

export default Contact;