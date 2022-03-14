import React from "react";
import Header from "./header.jsx";
import LeftBox from "./Leftbox.jsx";
import UploadPicCard from "./card.jsx";
import styles from "./bgremover.module.css";

function BgRemoverAppHome() {
  return (
    <div className={styles.BgRemoverAppHome}>
      < Header />
      < LeftBox />
      < UploadPicCard />
    </div>
  );
}

export default BgRemoverAppHome;
