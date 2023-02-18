import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./app-header.module.scss";

const AppHeader = () => {
  return (
    <header className={styles.headerTitle}>
      <h1>
        <a className="" href="/">
          MARVEL
        </a>
        <p>information portal</p>
      </h1>

      <nav className={styles.appMenu}>
        <ul>
          <li className={styles.navLink}>Characters</li>/
          <li className={styles.navLink}>Comics</li>
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
