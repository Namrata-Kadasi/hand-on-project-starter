import React from "react";
import styles from "./dashboard.module.css"
import Cuvettelogo from "../../utils/cuvette logo.svg"

function Header() {
  return (
    <nav>
      <img alt="cuvette-logo" className={styles.logo} src={Cuvettelogo} />
    </nav>
  );
}

export default Header;
