import React from "react";
import styles from "./myapi.module.css"
import APIimg from "../../utils/APIimg.svg"
import {FaTrash, FaEdit} from "react-icons/fa";
import Axios from "axios";

function CrudApi({apiList,setPrevApiName,setPrevApiEndpoint,setPrevApiDescription,setId,setOpenModal,setEditList,ModalOpen}) {

const deleteApi = (id)=>{
  Axios.delete(`/crud/${id}`)
}

return(
  <div className={styles.container}>
    {apiList.map((val, key)=>{
      return (
        <main className={styles.grid}  key={key}>
        <article className={styles.gridelement} onClick={()=>{window.open(val.apiendpoint)}}>
        {!ModalOpen &&(
          <div className={styles.iconbox}>
    <button type="button" className={styles.crudbutton1} onClick={(event)=>{deleteApi(val._id); event.stopPropagation()}}><FaTrash size="1.5em"/></button>
    <button type="button" className={styles.crudbutton2}
    onClick={(event)=>
      {
      event.stopPropagation()
      setEditList(true);
      setOpenModal(true);
      setId(val._id);
      setPrevApiName(val.apiname);
      setPrevApiEndpoint(val.apiendpoint);
      setPrevApiDescription(val.apidescription)}}><FaEdit size="1.5em"/></button>
        </div>
        )
        }
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

export default CrudApi;
