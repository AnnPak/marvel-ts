import React from "react";
import styles from "./app-header.module.scss";

const AppHeader = () => {
  return (
    <header className={styles.headerTitle}>
      <h1>
        <a href={process.env.PUBLIC_URL}>MARVEL</a>
        <p>information portal</p>
      </h1>
    </header>
  );
};

export default AppHeader;
