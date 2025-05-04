import React, { useEffect, useState } from "react";
import styles from "../assets/styles/Contact.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully! (Integration pending)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className={styles.page}>
      <div className={styles.backdrop}></div>

      <section className={styles.container}>
        <h2 className={styles.title} data-aos="fade-up">
          Get in Touch
        </h2>
        <p className={styles.subtitle} data-aos="fade-up" data-aos-delay="100">
          Feel free to reach out for collaborations or just a friendly hello!
        </p>

        <div className={styles.contentWrapper}>
          {/* Contact Form */}
          <form
            className={styles.form}
            onSubmit={handleSubmit}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className={styles.input}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className={styles.input}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className={styles.textarea}
            ></textarea>
            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>

          {/* Social Links */}
          <div
            className={styles.socials}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h3>Connect with me</h3>
            <div className={styles.icons}>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.icon}
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.icon}
              >
                <FaGithub />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.icon}
              >
                <FaTwitter />
              </a>
              <a href="mailto:your-email@example.com" className={styles.icon}>
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
