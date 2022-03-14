import React from "react";
import styles from "./marketplace.module.css"
import APIimg from "../../utils/APIimg.svg"

function ApiCard({apiList}) {
  return(
    <div className={styles.container}>
      {apiList.map((val, key)=>{
        return (
          <main className={styles.grid}  key={key}>
          <article className={styles.gridelement} onClick={()=>{window.open(val.apiendpoint)}}>
          <img src={APIimg} />
    <h3 className={styles.Apiname}>{val.apiname}</h3>
    <p className={styles.Apidescription}>{val.apidescription}</p>
          </article>
          </main>
      )}
    )}
    </div>
  )
  }

  export default ApiCard;
