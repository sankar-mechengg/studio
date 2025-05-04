import React, { useEffect, useState } from "react";
import styles from "../assets/styles/About.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // State for academic accordions
  const [activeAcademic, setActiveAcademic] = useState(null);
  const [activeWork, setActiveWork] = useState(null);

  const toggleAcademic = (index) => {
    setActiveAcademic(activeAcademic === index ? null : index);
  };

  const toggleWork = (index) => {
    setActiveWork(activeWork === index ? null : index);
  };

  // Academic data
  const academicData = [
    {
      title: "Ph.D. in Product Design & XR",
      details:
        "Indian Institute of Science (IISc), Bangalore | 2020 - Present | GEMINI: An Active Ideation System using Creative Machines | CGPA: 8.30/10",
    },
    {
      title: "M.E. in Engineering Design",
      details:
        "Government College of Engineering, Tirunelveli | 2015 - 2017 | Prosopis Juliflora Fibres for Fibreglass Boat Hull | CGPA: 9.34/10",
    },
    {
      title: "MBA in Professional Management (Part-Time)",
      details:
        "M.S. University, Tirunelveli | 2015 - 2017 | Management Studies",
    },
    {
      title: "B.E. in Mechanical Engineering",
      details:
        "Government College of Engineering, Tirunelveli | 2010 - 2014 | Helical Coil Heat Exchanger Analysis | CGPA: 8.91/10",
    },
  ];

  // Work experience data
  const workData = [
    {
      title: "Assistant Professor",
      details:
        "Thiagarajar College of Engineering, Madurai | 2017 - 2020 | Courses: Machine Design, Product Development, FEA",
    },
    {
      title: "Teaching Assistant",
      details:
        "Indian Institute of Science (IISc), Bangalore | 2023 - 2024 | Courses: Mechanism Design, AI Assisted Programming",
    },
    {
      title: "Summer Faculty Research Fellow",
      details:
        "IIT Delhi | May 2018 - July 2018 | Microwave Processing of Metal Matrix Composites",
    },
  ];

  return (
    <div className={styles.aboutPage}>
      <div className={styles.backdrop}></div>

      {/* ========== ABOUT SECTION ========== */}
      <section className={styles.aboutSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle} data-aos="fade-up">
            About Me
          </h2>
          <p
            className={styles.sectionSubtitle}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Design Researcher | Mechanical Engineer | XRAI Developer
          </p>

          <div className={styles.aboutContent}>
            {/* Left Text */}
            <div className={styles.aboutText} data-aos="fade-right">
              <p>
                I am a passionate researcher with expertise in design thinking,
                XR applications, and computational product design. Currently
                pursuing my doctoral studies at IISc Bangalore, I am exploring
                new dimensions of human-computer interaction through creative
                technologies.
              </p>

              {/* Achievements List */}
              <ul className={styles.achievements}>
                <li>Ph.D. Scholar at IISc Bangalore</li>
                <li>International Publications & Patents</li>
                <li>Hackathon Winner: IEEE SSH24, Pravega, ITTCP</li>
                <li>Founder: Team Eureka, Electric Mobility Club</li>
              </ul>
            </div>

            {/* Right Image */}
            <div className={styles.aboutImage} data-aos="fade-left">
              <img src="/assets/images/about.jpg" alt="About Sankar" />
            </div>
          </div>
        </div>
      </section>

      {/* ========== ACADEMIC QUALIFICATIONS SECTION ========== */}
      <section className={styles.expandSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle} data-aos="fade-up">
            Academic Qualifications
          </h2>

          {academicData.map((item, index) => (
            <div
              key={index}
              className={styles.expandItem}
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <div
                className={styles.expandHeader}
                onClick={() => toggleAcademic(index)}
              >
                <span className={styles.expandTitle}>{item.title}</span>
                <span className={styles.expandIcon}>
                  {activeAcademic === index ? "−" : "+"}
                </span>
              </div>
              {activeAcademic === index && (
                <div className={styles.expandContent}>
                  <p>{item.details}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ========== WORK EXPERIENCE SECTION ========== */}
      <section className={styles.expandSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle} data-aos="fade-up">
            Work Experience
          </h2>

          {workData.map((item, index) => (
            <div
              key={index}
              className={styles.expandItem}
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <div
                className={styles.expandHeader}
                onClick={() => toggleWork(index)}
              >
                <span className={styles.expandTitle}>{item.title}</span>
                <span className={styles.expandIcon}>
                  {activeWork === index ? "−" : "+"}
                </span>
              </div>
              {activeWork === index && (
                <div className={styles.expandContent}>
                  <p>{item.details}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ========== TESTIMONIALS SECTION ========== */}
      <section className={styles.testimonialsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle} data-aos="fade-up">
            Testimonials
          </h2>
          <p
            className={styles.sectionSubtitle}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            What people say about me
          </p>

          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className={styles.mySwiper}
          >
            {/* Testimonial slides (add more as needed) */}
            <SwiperSlide>
              <div className={styles.testimonialCard}>
                <img
                  src="/assets/images/testimonial1.jpg"
                  alt="Mathangi"
                  className={styles.testimonialImage}
                />
                <div className={styles.testimonialText}>
                  <h3>Mathangi Krishnan</h3>
                  <p>
                    "Sankar is an exceptional mentor who always brings clarity
                    to complex projects and has a unique vision for design
                    research."
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.testimonialCard}>
                <img
                  src="/assets/images/testimonial2.jpg"
                  alt="Sanchari"
                  className={styles.testimonialImage}
                />
                <div className={styles.testimonialText}>
                  <h3>Sanchari Mondal</h3>
                  <p>
                    "Working with Sankar was an enlightening experience. His
                    dedication and passion for research are inspiring."
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.testimonialCard}>
                <img
                  src="/assets/images/testimonial3.jpg"
                  alt="Charan"
                  className={styles.testimonialImage}
                />
                <div className={styles.testimonialText}>
                  <h3>Charan</h3>
                  <p>
                    "An open-minded, energetic individual with fresh ideas and
                    excellent team collaboration skills."
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  );
}

export default About;
