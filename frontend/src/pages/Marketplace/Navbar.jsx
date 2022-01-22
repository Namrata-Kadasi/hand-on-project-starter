import React from "react";
import styles from "./marketplace.module.css"
import Cuvettelogo from "../../utils/cuvette logo.svg"

function Navbar() {
  return (
    <nav>
      <img alt="cuvette-logo" className={styles.logo} src={Cuvettelogo} />
      <button type="button" name="button">Login / Signup</button>
    </nav>
  );
}

export default Navbar;
