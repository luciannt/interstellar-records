import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles/Nav.module.scss";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/records">Shop all</Link>
      </div>
    </nav>
  );
};

export default Nav;
