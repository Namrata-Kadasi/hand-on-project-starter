import React from "react";
import styles from "./marketplace.module.css"
import Dp from "../../utils/app dp.svg"
import { useNavigate } from "react-router";

function Appbanner() {
  const navigate = useNavigate();
  return (
    <div className={styles.divone}>
<img alt="app dp" className={styles.apppic} src={Dp} />
<div className={styles.semicircle} />
<div className={styles.bannercontent}>
<h2 className={styles.Appnamebanner}>BACKGROUND IMAGE REMOVER</h2>
<p className={styles.bannerdescription}>100% automatic and free</p>
</div>
  <button className={styles.viewappbutton} type="button" name="button" onClick={ ()=>{navigate('/BgRemoverAppHome')}}>View app</button>
</div>
  );
}

export default Appbanner;
