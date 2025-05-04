import React, { useEffect } from "react";
import styles from "../assets/styles/SkillsCertifications.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function SkillsCertifications() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const skills = [
    { name: "Unity & C#", level: 90 },
    { name: "OpenGL & C++", level: 85 },
    { name: "Python & OpenCV", level: 88 },
    { name: "Figma & Blender", level: 80 },
    { name: "Solidworks & Fusion 360", level: 92 },
    { name: "Matlab", level: 85 },
  ];

  const tools = [
    "Git",
    "Gravity Sketch",
    "ShapesXR",
    "Sketchbook Pro",
    "Processing",
    "Rhino",
    "Photoshop",
    "Tableau",
    "Meshroom",
  ];

  const certificates = [
    "/assets/images/cert1.png",
    "/assets/images/cert2.png",
    "/assets/images/cert3.png",
    "/assets/images/cert4.png",
    "/assets/images/cert5.png",
  ];

  return (
    <div className={styles.skillsPage}>
      <div className={styles.backdrop}></div>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle} data-aos="fade-up">
            Skills & Certifications
          </h2>
          <p
            className={styles.sectionSubtitle}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            My technical skillset and certifications
          </p>

          {/* ========== Skills ========== */}
          <div className={styles.skillsGrid}>
            {skills.map((skill, index) => (
              <div
                key={index}
                className={styles.skillItem}
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <div className={styles.skillHeader}>
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className={styles.skillBar}>
                  <div
                    className={styles.skillFill}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* ========== Tools & Software ========== */}
          <h3 className={styles.subSectionTitle} data-aos="fade-up">
            Tools & Software
          </h3>
          <div className={styles.toolsGrid}>
            {tools.map((tool, index) => (
              <span
                key={index}
                className={styles.toolBadge}
                data-aos="zoom-in"
                data-aos-delay={`${index * 100}`}
              >
                {tool}
              </span>
            ))}
          </div>

          {/* ========== Certificates Carousel ========== */}
          <h3 className={styles.subSectionTitle} data-aos="fade-up">
            Certificates
          </h3>
          <Swiper
            spaceBetween={30}
            slidesPerView={2}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className={styles.certSwiper}
          >
            {certificates.map((cert, index) => (
              <SwiperSlide key={index}>
                <img
                  src={cert}
                  alt={`Certificate ${index + 1}`}
                  className={styles.certImage}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
}

export default SkillsCertifications;
