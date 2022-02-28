import React,{useState} from "react";
import Navbar from "./Navbar.jsx";
import styles from "./marketplace.module.css";
import Appbanner from "./app banner.jsx";
import ApiCard from "./apicard.jsx";
import Modal from "../../components/modal/modal.jsx";

function Marketplace({apiList}) {
  const [modalopen,setmodalopen]=useState(false);

  return (
    <div className={styles.holder}>
    {modalopen &&(
      <Modal setOpenModal={setmodalopen}/>
    )}
    <Navbar
    setOpenModal={setmodalopen}/>
    <Appbanner />
    <h2 className={styles.allapi}>All APIs</h2>
    <ApiCard apiList={apiList}/>
    </div>
  );
}

export default Marketplace;
