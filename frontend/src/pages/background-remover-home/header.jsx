import React from "react";
import Cuvettelogo from "../../utils/cuvette logo.svg";
import styles from "./bgremover.module.css";

function Header() {
  return (
    <nav>
      <img alt="cuvette-logo" className={styles.logo} src={Cuvettelogo} />
    </nav>
  );
}

export default Header;
