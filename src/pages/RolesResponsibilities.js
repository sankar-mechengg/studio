import React, { useEffect } from "react";
import styles from "../assets/styles/RolesResponsibilities.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

function RolesResponsibilities() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const roles = [
    {
      title: "Life Member",
      organization: "Association for Designers of India (ADI)",
      id: "",
      image: "/assets/images/adi.jpg",
      description:
        "Promoting design excellence and innovation across industries.",
      link: "#",
    },
    {
      title: "Student Member",
      organization: "ACM (Association for Computing Machinery)",
      id: "(1734505)",
      image: "/assets/images/acm.jpg",
      description:
        "Global community advancing computing as a science & profession.",
      link: "#",
    },
    {
      title: "Student Member",
      organization: "AMM (Association for Machines and Mechanisms)",
      id: "(A20240027)",
      image: "/assets/images/amm.jpg",
      description: "Dedicated to the promotion of mechanisms and machines.",
      link: "#",
    },
    {
      title: "Associate Member",
      organization: "The Design Society",
      id: "(DS02828)",
      image: "/assets/images/design_society.jpg",
      description:
        "Advancing design research, education, and practice worldwide.",
      link: "#",
    },
    {
      title: "Student Member",
      organization: "Design Research Society",
      id: "",
      image: "/assets/images/drs.jpg",
      description: "Supporting design research and community engagement.",
      link: "#",
    },
    {
      title: "IEEE Member",
      organization: "IEEE",
      id: "(99648614)",
      image: "/assets/images/ieee.jpg",
      description: "World’s largest technical professional organization.",
      link: "#",
    },
    {
      title: "Founder",
      organization: "Team Eureka - Electric Mobility Design Club",
      id: "",
      image: "/assets/images/team_eureka.jpg",
      description:
        "Fostering innovation in electric mobility and sustainable design.",
      link: "#",
    },
    {
      title: "Secretary",
      organization: "College Science Club (GCE)",
      id: "",
      image: "/assets/images/science_club.jpg",
      description: "Organizing science events and fostering curiosity.",
      link: "#",
    },
    {
      title: "Editor-In-Chief",
      organization: "College Magazine (GCE)",
      id: "",
      image: "/assets/images/magazine.jpg",
      description: "Leading editorial team for creative publications.",
      link: "#",
    },
  ];

  return (
    <div className={styles.page}>
      <div className={styles.backdrop}></div>

      <section className={styles.container}>
        <h2 className={styles.title} data-aos="fade-up">
          Roles & Responsibilities
        </h2>
        <p className={styles.subtitle} data-aos="fade-up" data-aos-delay="100">
          Memberships and leadership roles I hold.
        </p>

        <div className={styles.grid}>
          {roles.map((role, index) => (
            <div
              key={index}
              className={`${styles.card} ${styles.flipCard}`}
              data-aos="zoom-in"
              data-aos-delay={`${index * 100}`}
            >
              <div className={styles.flipInner}>
                {/* Front Side */}
                <div className={`${styles.cardFront}`}>
                  <img
                    src={role.image}
                    alt={role.organization}
                    className={styles.cardImage}
                  />
                  <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>{role.title}</h3>
                    <p className={styles.cardOrg}>{role.organization}</p>
                    {role.id && <p className={styles.cardId}>{role.id}</p>}
                  </div>
                </div>

                {/* Back Side */}
                <div className={`${styles.cardBack}`}>
                  <div className={styles.cardContentBack}>
                    <p className={styles.cardDescription}>{role.description}</p>
                    <a
                      href={role.link}
                      className={styles.cardButton}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Explore
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default RolesResponsibilities;
