import React, {useState} from "react";
import styles from "./modal.module.css";
import PropTypes from "prop-types";
import Axios from "axios";

function Modal({prevapiname,prevapiendpoint,prevapidescription,id,setEditList,editList,setOpenModal}) {

  const [apiname, setApiName] = useState(prevapiname);
  const [apiendpoint, setApiEndpoint] = useState(prevapiendpoint);
  const [apidescription, setApiDescription] = useState(prevapidescription);

  const toggleedit =()=>{
      setEditList(false);
      setOpenModal(false);
  }

  const changeList = () =>{
    if(editList){
      Axios.put(`${process.env.REACT_BACKEND_URL}/crud/update`,{
      id:id,
      newapiname:apiname,
      newapiendpoint:apiendpoint,
      newapidescription:apidescription
      }).then((response)=>{
      if(response.data.status===200){
      alert(response.data.description);
      setOpenModal(false);
      }else{
      alert(response.data.description);
    }});
    }else{
      Axios.post(`${process.env.REACT_BACKEND_URL}/crud/create`,{
      apiname:apiname,
      apiendpoint:apiendpoint,
      apidescription:apidescription
      }).then((response)=>{
      if(response.data.status===200){
      alert(response.data.description);
      setOpenModal(false);
      }else{
      alert(response.data.description);
    }});
    }
}

  return (
    <div className={styles.fullcontainer}>
    <div className={styles.modalcontainer} onClick={()=>{toggleedit()}}/>
    {editList
        ?
        <div className={styles.modalcard}>
        <p className={styles.addnewapi}>Edit API</p>
        <input type="text" defaultValue={prevapiname} className={styles.inputtext}
        onChange={(event)=>{setApiName(event.target.value);}}/>
       <input type="text" defaultValue={prevapiendpoint} className={styles.inputtext}
        onChange={(event)=>{setApiEndpoint(event.target.value);}}/>
       <textarea  defaultValue={prevapidescription} cols="50" rows="6"  className={styles.description}
        onChange={(event)=>{setApiDescription(event.target.value);}}/>
        <button className={styles.addbutton} onClick={()=>{changeList()}}>Edit API</button>
        </div>
        :
        <div className={styles.modalcard}>
        <p className={styles.addnewapi}>Add New API</p>
        <input type="text" placeholder="API Name" className={styles.inputtext}
        onChange={(event)=>{setApiName(event.target.value);}}/>
        <input type="text" placeholder="API End Point" className={styles.inputtext}
        onChange={(event)=>{setApiEndpoint(event.target.value);}}/>
        <textarea  placeholder="Description of API" cols="50" rows="6" className={styles.description}
        onChange={(event)=>{setApiDescription(event.target.value);}}/>
        <button className={styles.addbutton} onClick={()=>{changeList()}}>Add API</button>
        </div>
    }
      </div>
  );
}
Modal.propTypes={
  setEditList: PropTypes.bool,
  editList: PropTypes.bool,
  setOpenModal: PropTypes.bool
}

export default Modal;
