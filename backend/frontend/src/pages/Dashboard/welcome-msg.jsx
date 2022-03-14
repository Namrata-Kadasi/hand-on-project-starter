import React from "react";
import styles from "./dashboard.module.css";
import DashBoardIcon from "../../utils/DashBoardIcon.png";
function WelcomeBox() {
  return (
    <div className={styles.welcomebox}>
    <img src={DashBoardIcon} className={styles.DashBoardIcon}/>
<h2 className={styles.welcometext}>Welcome to your Dashboard</h2>
<p className={styles.welcomedescription}>Your uploaded APIs will be displayed here once you login to your account </p>
    </div>
  );
}

export default WelcomeBox;
