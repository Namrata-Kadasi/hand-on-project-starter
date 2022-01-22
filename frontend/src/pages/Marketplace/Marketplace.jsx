import React from "react";
import Navbar from "./Navbar.jsx";
import styles from "./marketplace.module.css";
import Appbanner from "./app banner.jsx";
import Apicard from "./api card.jsx";

function Marketplace() {
  return (
    <div className={styles.holder}>
    <Navbar />
    <Appbanner />
    <h2 className={styles.allapi}>All APIs</h2>
    <Apicard />
    </div>
  );
}

export default Marketplace;
