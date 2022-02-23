import React from "react";
import styles from "./marketplace.module.css"
import APIimg from "../../utils/APIimg.svg"

function Apicard() {
  return (
    <div className={styles.container}>
      <main className={styles.grid}>
      <article className={styles.gridelement}>
<img src={APIimg} />
<h3 className={styles.Apiname}>Background remove</h3>
<p className={styles.Apidescription}>The description of the API in quick brief and we will truncate it here</p>
      </article>
      <article className={styles.gridelement}>
<img src={APIimg} />
<h3 className={styles.Apiname}>Background remove</h3>
<p className={styles.Apidescription}>The description of the API in quick brief and we will truncate it here...</p>
      </article>
      <article className={styles.gridelement}>
<img src={APIimg} />
<h3 className={styles.Apiname}>Background remove</h3>
<p className={styles.Apidescription}>The description of the API in quick brief and we will truncate it here...</p>
      </article>
      <article className={styles.gridelement}>
<img src={APIimg} />
<h3 className={styles.Apiname}>Background remove</h3>
<p className={styles.Apidescription}>The description of the API in quick brief and we will truncate it here...</p>
      </article>
      <article className={styles.gridelement}>
<img src={APIimg} />
<h3 className={styles.Apiname}>Background remove</h3>
<p className={styles.Apidescription}>The description of the API in quick brief and we will truncate it here...</p>
      </article>
      <article className={styles.gridelement}>
<img src={APIimg} />
<h3 className={styles.Apiname}>Background remove</h3>
<p className={styles.Apidescription}>The description of the API in quick brief and we will truncate it here...</p>
      </article>
      </main>
    </div>
  );
}

export default Apicard;
