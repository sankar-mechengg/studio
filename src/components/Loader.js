import React from "react";
import styles from "../assets/styles/Loader.module.css"; // Adjust the path as necessary

function Loader() {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.spinner}></div>
    </div>
  );
}

export default Loader;
