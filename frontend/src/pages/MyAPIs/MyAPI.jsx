import React,{useState} from "react";
import Navbar from "../Marketplace/Navbar.jsx";
import Modal from "../../components/modal/modal.jsx";
import styles from "./myapi.module.css";
import Apicard from "./crudapi.jsx";

function MyAPI() {
  const [modalopen,setmodalopen]=useState(false);
  return (
    <div className={styles.holder}>
    {modalopen &&(
      <Modal setOpenModal={setmodalopen}/>
    )}
    <Navbar setOpenModal={setmodalopen}/>
    <h2 className={styles.allapi}>Your Uploaded APIs</h2>
    <Apicard  ModalOpen={modalopen}/>
    </div>
  );
}

export default MyAPI;
