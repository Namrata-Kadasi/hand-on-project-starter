import React from "react";
import Header from "./header.jsx";
import WelcomeBox from "./welcome-msg.jsx";
import LoginCard from "./LoginCard.jsx";
import styles from "./dashboard.module.css";


function Dashboard() {
  return (
    <div className={styles.Dashboard}>
    <Header />
    <WelcomeBox />
    <LoginCard />
    </div>
  );
}

export default Dashboard;
