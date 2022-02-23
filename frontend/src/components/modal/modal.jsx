import React from "react";
import styles from "./modal.module.css";
import PropTypes from "prop-types";

function Modal({setOpenModal}) {
  return (
    <div className={styles.fullcontainer}>
    <div className={styles.modalcontainer} onClick={()=>{setOpenModal(false)}}/>
    <div className={styles.modalcard}>
    <p className={styles.addnewapi}>Add New API</p>
    <input type="text" placeholder="API Name" className={styles.inputtext}/>
<input type="text" placeholder="API End Point" className={styles.inputtext}/>
<textarea  placeholder="Description of API" cols="50" rows="6" className={styles.description}/>
<button className={styles.addbutton}>Add API</button>
      </div>
    </div>
  );
}
Modal.propTypes={
  setOpenModal: PropTypes.bool
}

export default Modal;
