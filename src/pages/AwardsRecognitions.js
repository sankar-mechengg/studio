import React, { useEffect, useState } from "react";
import styles from "../assets/styles/AwardsRecognitions.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Modal Component
function Modal({ award, onClose }) {
  if (!award) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <img
          src={award.image}
          alt={award.title}
          className={styles.modalImage}
        />
        <h3 className={styles.modalTitle}>{award.title}</h3>
        <p className={styles.modalDescription}>{award.description}</p>
        <button className={styles.modalButton} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

function AwardsRecognition() {
  const [selectedAward, setSelectedAward] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const awards = [
    {
      title: "First Prize - NPCI Pravega Hackathon 2025",
      description: "For SereneVR, IISc Bangalore",
      image: "/assets/images/pravega.jpg",
      badge: "🥇",
    },
    {
      title: "Runner-up - Idea Pitch Hackathon",
      description: "For GAITMATE, HIVE Conclave 2025, IIT Mandi",
      image: "/assets/images/hive.jpg",
      badge: "🥈",
    },
    {
      title: "Best Performance, Innovation & Coding - IEEE SSH 2024",
      description: "For ZenVR, Awarded in multiple categories.",
      image: "/assets/images/ieee_ssh.jpg",
      badge: "🏅",
    },
    {
      title: "Second Position - NVIDIA Art Restoration Hackathon",
      description: "For DDCNN, ICETCI 2023.",
      image: "/assets/images/nvidia.jpg",
      badge: "🥈",
    },
    {
      title: "National Level First Prize - ITTCP 2021",
      description: "For Portable Insulin Unit, Siemens Healthineers.",
      image: "/assets/images/ittcp.jpg",
      badge: "🥇",
    },
    {
      title: "Best Poster Award - IUCEE EPICS Conference",
      description: "For Foldable Helmet, Hyderabad.",
      image: "/assets/images/iucee.jpg",
      badge: "🏅",
    },
    {
      title: "Elite Academician",
      description: "Conferred by DST and Texas Instruments.",
      image: "/assets/images/elite_academician.jpg",
    },
    {
      title: "University First Rank Holder & Best Outgoing Student",
      description: "Postgraduate (PG).",
      image: "/assets/images/university_first.jpg",
      badge: "🥇",
    },
    {
      title: "University Eleventh Rank Holder",
      description: "Undergraduate (UG).",
      image: "/assets/images/university_rank.jpg",
    },
    {
      title: "GATE-ME Merit Scholarship",
      description: "2015–2017.",
      image: "/assets/images/gate_me.jpg",
    },
    {
      title: "Central Sector Merit Scholarship",
      description: "For graduate studies.",
      image: "/assets/images/central_sector.jpg",
    },
  ];

  return (
    <div className={styles.page}>
      <div className={styles.backdrop}></div>

      <section className={styles.container}>
        <h2 className={styles.title} data-aos="fade-up">
          Achievements & Awards & Recognition
        </h2>
        <p className={styles.subtitle} data-aos="fade-up" data-aos-delay="100">
          Highlights of awards, recognitions, and achievements.
        </p>

        <div className={styles.grid}>
          {awards.map((award, index) => (
            <div
              key={index}
              className={`${styles.card} ${styles.flipCard}`}
              data-aos="zoom-in"
              data-aos-delay={`${index * 100}`}
              onClick={() => setSelectedAward(award)}
            >
              <div className={styles.flipInner}>
                {/* Front Side */}
                <div className={styles.cardFront}>
                  {award.badge && (
                    <div className={styles.badge}>{award.badge}</div>
                  )}
                  <img
                    src={award.image}
                    alt={award.title}
                    className={styles.cardImage}
                  />
                  <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>{award.title}</h3>
                  </div>
                </div>

                {/* Back Side */}
                <div className={styles.cardBack}>
                  <div className={styles.cardContentBack}>
                    <p className={styles.cardDescription}>
                      {award.description}
                    </p>
                    <p className={styles.cardMore}>Click to view more</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal Popup */}
      <Modal award={selectedAward} onClose={() => setSelectedAward(null)} />
    </div>
  );
}

export default AwardsRecognition;
