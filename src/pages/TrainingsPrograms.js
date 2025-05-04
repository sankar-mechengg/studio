import React, { useEffect } from "react";
import styles from "../assets/styles/TrainingsPrograms.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Icon mapping for each section
const iconMap = {
  "Eminent Resource Person": "🧑‍🏫",
  "Summer Faculty Research Program (SFRF)": "🏫",
  "Faculty Development & Short-Term Courses": "🎓",
  "Certifications & Recognitions": "🏅",
};

function TrainingsPrograms() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const trainingSections = [
    {
      title: "Eminent Resource Person",
      items: [
        {
          workshop: "Engineering Design",
          location: "iHub, IIT Mandi",
          outcome:
            "Participants from industries learnt the process of Engineering Design.",
          image: "/assets/images/training1.jpg",
        },
        {
          workshop: "A Crash Course in Product Design",
          location: "IIT Mandi",
          outcome:
            "Eight Teams of 4 students each conceptualized and created mock-up prototypes for design problems.",
          image: "/assets/images/training2.jpg",
        },
        {
          workshop: "AR-based Mobile App Development using Unity",
          location: "RIPPLES, Open Day 2024, IISc Bangalore",
          outcome: "Participants were taught to develop a Pokemon-Go AR App.",
          image: "/assets/images/training3.jpg",
        },
        {
          workshop: "Creative Learning using AR and VR",
          location: "Santhanam Vidhyalaya Senior Secondary School, Trichy",
          outcome:
            "Teachers were trained to develop AR apps for creative classroom education.",
          image: "/assets/images/training4.jpg",
        },
      ],
    },
    {
      title: "Summer Faculty Research Program (SFRF)",
      items: [
        {
          workshop:
            "Microwave Processing of Metal Matrix Composites using Comsol",
          location: "IIT Delhi",
          outcome: "Project-based research on numerical simulation.",
          image: "/assets/images/summer_research.jpg",
        },
      ],
    },
    {
      title: "Faculty Development & Short-Term Courses",
      items: [
        {
          workshop: "Design Thinking Course",
          location: "EPICS, Purdue University",
          outcome: "Explored the principles of design thinking.",
          image: "/assets/images/design_thinking.jpg",
        },
        {
          workshop: "Python Programming Course",
          location: "NPTEL",
          outcome: "Topped the course and received certification.",
          image: "/assets/images/python_course.jpg",
        },
      ],
    },
    {
      title: "Certifications & Recognitions",
      items: [
        {
          workshop: "Distinguished Paper Awards",
          outcome: "iCoRD’ 23, PLMSS ’23, IPRoMM ’24",
          image: "/assets/images/paper_award.jpg",
        },
        {
          workshop: "Certified Solidworks Professional (CSWP)",
          outcome: "Dassault Systems",
          image: "/assets/images/solidworks.jpg",
        },
        {
          workshop: "Freehand Outline and Model Drawing",
          outcome: "DOTE, Tamilnadu",
          image: "/assets/images/drawing_cert.jpg",
        },
        {
          workshop: "First Prize in Essay Competition",
          outcome: "Ministry of Shipping, India",
          image: "/assets/images/essay_prize.jpg",
        },
        {
          workshop: "Fellowship Grant for PG Project",
          outcome:
            "Tamilnadu State Council for Science and Technology (TNSCST)",
          image: "/assets/images/fellowship.jpg",
        },
      ],
    },
  ];

  return (
    <div className={styles.page}>
      <div className={styles.backdrop}></div>

      <section className={styles.container}>
        <h2 className={styles.title} data-aos="fade-up">
          Trainings & Programs
        </h2>
        <p className={styles.subtitle} data-aos="fade-up" data-aos-delay="100">
          Workshops, research programs, and certifications I have been part of.
        </p>

        {trainingSections.map((section, index) => (
          <div
            key={index}
            className={styles.section}
            data-aos="fade-up"
            data-aos-delay={`${index * 150}`}
          >
            <div className={styles.sectionHeader}>
              <span className={styles.icon}>{iconMap[section.title]}</span>
              <h3 className={styles.sectionTitle}>{section.title}</h3>
            </div>

            <div className={styles.timeline}>
              {section.items.map((item, idx) => (
                <div key={idx} className={styles.timelineItem}>
                  <div className={styles.timelineDot}>
                    {iconMap[section.title]}
                  </div>
                  <div className={styles.timelineContent}>
                    <img
                      src={item.image}
                      alt={item.workshop}
                      className={styles.timelineImage}
                    />
                    <div>
                      <h4 className={styles.workshop}>{item.workshop}</h4>
                      {item.location && (
                        <p className={styles.location}>
                          <strong>Location:</strong> {item.location}
                        </p>
                      )}
                      <p className={styles.outcome}>
                        <strong>Outcome:</strong> {item.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default TrainingsPrograms;
