import React from "react";
import styles from "./myapi.module.css"
import APIimg from "../../utils/APIimg.svg"
import {FaTrash, FaEdit} from "react-icons/fa"

function Apicard({ModalOpen}) {
  return (
    <div className={styles.container}>
      <main className={styles.grid}>
      <article className={styles.gridelement}>
      {!ModalOpen && (
        <div className={styles.iconbox}>
  <button type="button" className={styles.crudbutton1}><FaTrash size="1.5em"/></button>
  <button type="button" className={styles.crudbutton2}><FaEdit size="1.5em"/></button>
      </div>
      )
      }
      <img src={APIimg} />

<h3 className={styles.Apiname}>Background remove</h3>
<p className={styles.Apidescription}>The description of the API in quick brief and we will truncate it here</p>
      </article>
      <article className={styles.gridelement}>
      {!ModalOpen && (
        <div className={styles.iconbox}>
  <button type="button" className={styles.crudbutton1}><FaTrash size="1.5em"/></button>
  <button type="button" className={styles.crudbutton2}><FaEdit size="1.5em"/></button>
      </div>
      )
      }
<img src={APIimg} />
<h3 className={styles.Apiname}>Background remove</h3>
<p className={styles.Apidescription}>The description of the API in quick brief and we will truncate it here...</p>
      </article>
      <article className={styles.gridelement}>
      {!ModalOpen && (
        <div className={styles.iconbox}>
  <button type="button" className={styles.crudbutton1}><FaTrash size="1.5em"/></button>
  <button type="button" className={styles.crudbutton2}><FaEdit size="1.5em"/></button>
      </div>
      )
      }
<img src={APIimg} />
<h3 className={styles.Apiname}>Background remove</h3>
<p className={styles.Apidescription}>The description of the API in quick brief and we will truncate it here...</p>
      </article>
      <article className={styles.gridelement}>
      {!ModalOpen && (
        <div className={styles.iconbox}>
  <button type="button" className={styles.crudbutton1}><FaTrash size="1.5em"/></button>
  <button type="button" className={styles.crudbutton2}><FaEdit size="1.5em"/></button>
      </div>
      )
      }
<img src={APIimg} />
<h3 className={styles.Apiname}>Background remove</h3>
<p className={styles.Apidescription}>The description of the API in quick brief and we will truncate it here...</p>
      </article>
      <article className={styles.gridelement}>
      {!ModalOpen && (
        <div className={styles.iconbox}>
  <button type="button" className={styles.crudbutton1}><FaTrash size="1.5em"/></button>
  <button type="button" className={styles.crudbutton2}><FaEdit size="1.5em"/></button>
      </div>
      )
      }
<img src={APIimg} />
<h3 className={styles.Apiname}>Background remove</h3>
<p className={styles.Apidescription}>The description of the API in quick brief and we will truncate it here...</p>
      </article>
      <article className={styles.gridelement}>
      {!ModalOpen && (
        <div className={styles.iconbox}>
  <button type="button" className={styles.crudbutton1}><FaTrash size="1.5em"/></button>
  <button type="button" className={styles.crudbutton2}><FaEdit size="1.5em"/></button>
      </div>
      )
      }
<img src={APIimg} />
<h3 className={styles.Apiname}>Background remove</h3>
<p className={styles.Apidescription}>The description of the API in quick brief and we will truncate it here...</p>
      </article>
      </main>
    </div>
  );
}

export default Apicard;
