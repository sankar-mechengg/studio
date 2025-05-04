import React, { useEffect } from "react";
import styles from "../assets/styles/Home.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

// Import image assets
import sankarProfilePic from "../assets/images/Profile/sankar_prof_pic.png";
import sliderImages from "../components/data/dataImageSliderHome.js";

function Home() {
  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <ParallaxProvider>
      <Parallax y={[-20, 20]} tagOuter="div">
        <section className={styles.homeSection}>
          {/* Background overlay */}
          <div className={styles.backdrop}></div>

          {/* Profile content */}
          <div className={`${styles.container} container`}>
            <div className={styles.profileSection}>
              {/* Profile Image */}
              <div className={styles.profileImage}>
                <img src={sankarProfilePic} alt="Sankar Balasubramanian" />
              </div>

              {/* Profile Text */}
              <div className={styles.profileText}>
                <h1 data-aos="fade-up">Sankar Balasubramanian</h1>
                <h3 data-aos="fade-up" data-aos-delay="100">
                  Design Researcher | XRAI Developer | Mechanical Engineer
                </h3>
                <p data-aos="fade-up" data-aos-delay="200">
                  I am a passionate design researcher deeply involved in
                  Computational Product Design, AI, and Extended Reality (XRAI).
                  Exploring human-computer interaction and generative design
                  systems to transform the future of product ideation.
                </p>

                {/* Social Links */}
                <div
                  className={styles.socialLinks}
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <a
                    href="https://www.linkedin.com/in/sankar4/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/sankar-mechengg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.behance.net/sankar8"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Behance
                  </a>
                  <a
                    href="https://scholar.google.com/citations?user=hDZt_PIAAAAJ&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Scholar
                  </a>
                </div>

                {/* Contact Button */}
                <a
                  href="/contact"
                  className={styles.contactButton}
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>

          {/* Image Slider */}
          {/* Uncomment the following block to enable the slider */}
          {/*
          <div className={styles.sliderWrapper}>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className={styles.mySwiper}
            >
              {sliderImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <img src={image.src} alt={image.alt} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          */}
        </section>
      </Parallax>
    </ParallaxProvider>
  );
}

export default Home;
