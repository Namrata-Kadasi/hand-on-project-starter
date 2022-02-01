import React from "react";
import styles from "./bgremover.module.css";
import BgRemoverImg from "../../utils/bgremoverimg.svg";

function LeftBox() {
  return (
    <div className={styles.leftbox}>
    <div className={styles.msgHolder}>
<h2 className={styles.lefttext}>Remove image background</h2>
<p className={styles.leftdescription}>100% automatic and free </p>
<img src={BgRemoverImg} className={styles.bgremoverimg} />
    </div>
    </div>
  );
}

export default LeftBox;
