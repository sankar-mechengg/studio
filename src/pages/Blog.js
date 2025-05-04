import React, { useEffect } from "react";
import styles from "../assets/styles/Blog.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import blogPosts from "../components/data/dataBlogPosts.js";

function Blog() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleReadMore = (id) => {
    navigate(`/blog/${id}`);
  };

  return (
    <div className={styles.page}>
      <div className={styles.backdrop}></div>

      <section className={styles.container}>
        <h2 className={styles.title} data-aos="fade-up">
          My Blog
        </h2>
        <p className={styles.subtitle} data-aos="fade-up" data-aos-delay="100">
          Thoughts, insights, and stories from my journey.
        </p>

        <div className={styles.grid}>
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              className={styles.card}
              data-aos="zoom-in"
              data-aos-delay={`${index * 100}`}
            >
              <img
                src={post.image}
                alt={post.title}
                className={styles.cardImage}
              />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{post.title}</h3>
                <p className={styles.cardSummary}>{post.summary}</p>
                <div className={styles.tags}>
                  {post.tags.map((tag, idx) => (
                    <span key={idx} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  className={styles.cardButton}
                  onClick={() => handleReadMore(post.id)}
                >
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Blog;
