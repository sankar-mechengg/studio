import React, { useEffect, useState } from "react";
import styles from "../assets/styles/PublicationsPatents.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

function PublicationsPatents() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [filter, setFilter] = useState("all");

  const publications = [
    {
      title: "Interactive VR Environment for Mental Wellness (SereneVR)",
      authors: "Sankar B, et al.",
      venue: "IEEE Transactions on Haptics, 2025",
      type: "journal",
      link: "#",
    },
    {
      title: "GAITMATE: Wearable Locomotion for VR",
      authors: "Sankar B, et al.",
      venue: "ACM CHI Conference, 2025",
      type: "conference",
      link: "#",
    },
    {
      title: "ZenVR: Immersive Relaxation Techniques",
      authors: "Sankar B, et al.",
      venue: "IEEE VR 2024",
      type: "conference",
      link: "#",
    },
    {
      title: "Portable Insulin Delivery System",
      authors: "Sankar B, et al.",
      venue: "Journal of Medical Devices, 2023",
      type: "journal",
      link: "#",
    },
    {
      title: "Foldable Helmet for Motorcyclists",
      authors: "Sankar B, et al.",
      venue: "Design Engineering Conference, 2023",
      type: "conference",
      link: "#",
    },
  ];

  const patents = [
    {
      title: "Portable Insulin Unit",
      authors: "Sankar B",
      venue: "Indian Patent Application No. 202341XXXX",
      link: "#",
    },
    {
      title: "GAITMATE: VR Locomotion Device",
      authors: "Sankar B",
      venue: "Indian Patent Application No. 202441XXXX",
      link: "#",
    },
    {
      title: "Foldable Helmet Design",
      authors: "Sankar B",
      venue: "Design Patent Application No. D2023XXXX",
      link: "#",
    },
  ];

  const handleFilter = (type) => {
    setFilter(type);
  };

  return (
    <div className={styles.page}>
      <div className={styles.backdrop}></div>

      <section className={styles.container}>
        <h2 className={styles.title} data-aos="fade-up">
          Publications & Patents
        </h2>
        <p className={styles.subtitle} data-aos="fade-up" data-aos-delay="100">
          A curated list of my research contributions and innovations.
        </p>

        {/* Filter Buttons */}
        <div className={styles.filters} data-aos="fade-up" data-aos-delay="200">
          <button
            className={`${styles.filterButton} ${
              filter === "all" ? styles.active : ""
            }`}
            onClick={() => handleFilter("all")}
          >
            All
          </button>
          <button
            className={`${styles.filterButton} ${
              filter === "journal" ? styles.active : ""
            }`}
            onClick={() => handleFilter("journal")}
          >
            Journals
          </button>
          <button
            className={`${styles.filterButton} ${
              filter === "conference" ? styles.active : ""
            }`}
            onClick={() => handleFilter("conference")}
          >
            Conferences
          </button>
          <button
            className={`${styles.filterButton} ${
              filter === "patent" ? styles.active : ""
            }`}
            onClick={() => handleFilter("patent")}
          >
            Patents
          </button>
        </div>

        {/* Publications */}
        <div className={styles.grid}>
          {(filter === "all" ||
            filter === "journal" ||
            filter === "conference") &&
            publications
              .filter((pub) => filter === "all" || pub.type === filter)
              .map((pub, index) => (
                <div
                  key={index}
                  className={styles.card}
                  data-aos="zoom-in"
                  data-aos-delay={`${index * 100}`}
                >
                  <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>{pub.title}</h3>
                    <p className={styles.cardAuthors}>{pub.authors}</p>
                    <p className={styles.cardVenue}>{pub.venue}</p>
                    {pub.link && (
                      <a
                        href={pub.link}
                        className={styles.cardButton}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Publication
                      </a>
                    )}
                  </div>
                </div>
              ))}

          {/* Patents */}
          {(filter === "all" || filter === "patent") &&
            patents.map((patent, index) => (
              <div
                key={index}
                className={styles.card}
                data-aos="zoom-in"
                data-aos-delay={`${index * 100}`}
              >
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{patent.title}</h3>
                  <p className={styles.cardAuthors}>{patent.authors}</p>
                  <p className={styles.cardVenue}>{patent.venue}</p>
                  {patent.link && (
                    <a
                      href={patent.link}
                      className={styles.cardButton}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Patent
                    </a>
                  )}
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}

export default PublicationsPatents;
