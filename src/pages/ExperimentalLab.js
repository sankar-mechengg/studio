import React, { useEffect } from "react";
import styles from "../assets/styles/ExperimentalLab.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import labApplications from "../components/data/dataLabApplications.js";

function ExperimentalLab() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleAppClick = (app) => {
    if (app.link !== "#") {
      window.open(app.link, "_blank");
    } else {
      alert(
        `This is a prototype demo of ${app.name}. More features coming soon!`
      );
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.backdrop}></div>

      <section className={styles.container}>
        <h2 className={styles.title} data-aos="fade-up">
          Experimental Lab
        </h2>
        <p className={styles.subtitle} data-aos="fade-up" data-aos-delay="100">
          Explore and interact with my latest prototypes and applications.
        </p>

        <div className={styles.grid}>
          {labApplications.map((app, index) => (
            <div
              key={app.id}
              className={styles.card}
              data-aos="zoom-in"
              data-aos-delay={`${index * 100}`}
              onClick={() => handleAppClick(app)}
            >
              <div className={styles.statusBadge}>{app.status}</div>
              <img
                src={app.image}
                alt={app.name}
                className={styles.cardImage}
              />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{app.name}</h3>
                <p className={styles.cardDescription}>{app.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ExperimentalLab;
