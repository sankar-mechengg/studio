import React, { useEffect, useState } from "react";
import styles from "../assets/styles/ScrollProgress.module.css"; // Adjust the path as necessary

function ScrollProgress() {
  const [scroll, setScroll] = useState(0);

  const onScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    setScroll(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={styles.progress} style={{ width: `${scroll}%` }}></div>
  );
}

export default ScrollProgress;
