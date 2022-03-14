import React,{useState} from "react";
import Navbar from "../Marketplace/Navbar.jsx";
import Modal from "../../components/modal/modal.jsx";
import styles from "./myapi.module.css";
import CrudApi from "./crudapi.jsx";

function MyAPI({setApiList,apiList}) {
  const [modalopen,setmodalopen]=useState(false);
  const [editList,setEditList] = useState(false);
  const [id,setId] = useState(0);
  const [prevapiname,setPrevApiName] = useState("");
  const [prevapiendpoint,setPrevApiEndpoint] = useState("");
  const [prevapidescription,setPrevApiDescription] = useState("");
  return (
    <div className={styles.holder}>
    {modalopen &&(
      <Modal
      id={id}
      setEditList={setEditList}
      editList={editList}
      setOpenModal={setmodalopen}
      prevapiname={prevapiname}
      prevapiendpoint={prevapiendpoint}
      prevapidescription={prevapidescription}/>
    )}
    <Navbar setOpenModal={setmodalopen}/>
    <h2 className={styles.allapi}>Your Uploaded APIs</h2>
    <CrudApi
    setApiList={setApiList}
    apiList={apiList}
    setPrevApiName={setPrevApiName}
    setPrevApiEndpoint={setPrevApiEndpoint}
    setPrevApiDescription={setPrevApiDescription}
    setId={setId}
    setOpenModal={setmodalopen}
    setEditList={setEditList}
    ModalOpen={modalopen}/>
    </div>
  );
}

export default MyAPI;
