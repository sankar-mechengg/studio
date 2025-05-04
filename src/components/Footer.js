import React from "react";
import styles from "../assets/styles/Footer.module.css"; // Adjust the path as necessary
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.socials}>
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
        <p className={styles.text}>© {year} Sankar B. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
