import React from "react";
import styles from "./bgremover.module.css"
import Cuvettelogo from "../../utils/cuvette logo.svg";
import { useNavigate } from "react-router";

function Header() {
 const navigate = useNavigate();
  return (
    <nav>
      <img alt="cuvette-logo" className={styles.logo} src={Cuvettelogo} onClick={()=>{navigate("/")}}/>
    </nav>
  );
}

export default Header;
