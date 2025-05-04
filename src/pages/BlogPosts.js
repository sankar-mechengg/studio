import React, { useEffect } from "react";
import styles from "../assets/styles/BlogPosts.module.css";
import { useParams, useNavigate } from "react-router-dom";
import blogPosts from "../components/data/dataBlogPosts.js";
import AOS from "aos";
import "aos/dist/aos.css";

function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <div className={styles.notFound}>Post not found.</div>;
  }

  return (
    <div className={styles.page}>
      <div className={styles.backdrop}></div>

      <section className={styles.container} data-aos="fade-up">
        <button className={styles.backButton} onClick={() => navigate("/blog")}>
          ← Back to Blog
        </button>

        <img src={post.image} alt={post.title} className={styles.coverImage} />
        <h1 className={styles.title}>{post.title}</h1>

        <div className={styles.tags}>
          {post.tags.map((tag, idx) => (
            <span key={idx} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>

        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </section>
    </div>
  );
}

export default BlogPost;
