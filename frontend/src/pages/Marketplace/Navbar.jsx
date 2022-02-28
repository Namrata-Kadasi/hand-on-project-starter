import React,{useState} from "react";
import styles from "./marketplace.module.css";
import Cuvettelogo from "../../utils/cuvette logo.svg";
import { useNavigate } from "react-router";
import Axios from "axios";
import PropTypes from "prop-types";

function Navbar({setOpenModal}) {

const [loginStatus,setloginStatus]= useState(false);

  Axios.get("http://localhost:5000/login").then((response)=>{
    setloginStatus(response.data);
});

  const navigate = useNavigate();

  return (
    <nav>
    <img alt="cuvette-logo" className={styles.logo} src={Cuvettelogo} onClick={()=>{navigate("/")}} />

    {(!loginStatus)?
<button type="button" name="button" onClick={ ()=>{navigate('/login')}}>Login / Signup</button>
    :
    <div className={styles.Navlinks}>
    <navLink className={styles.navelements} onClick={()=>{navigate("/MyAPI")}}>My APIs</navLink>
    <navLink className={styles.navelements} onClick={()=>{navigate("/MyAccount")}}>My Account</navLink>
      <button type="button" name="button" onClick={ ()=>{setOpenModal(true)}}>+New API</button>
    </div>
  }
    </nav>
  );
}

Navbar.propTypes={
  setOpenModal: PropTypes.bool
}

export default Navbar;
