import React from "react";
import Navbar from "./Navbar.jsx";
import styles from "./marketplace.module.css";
import Appbanner from "./app banner.jsx";
import Apicard from "./api card.jsx";
import { useLocation } from "react-router-dom";

function Marketplace() {
  let loggedin =false;
    const location = useLocation();
console.log(location.status);
    if(location.status==="true"){
      loggedin=true;
    }

  return (
    <div className={styles.holder}>
    <Navbar userActive={loggedin} />
    <Appbanner />
    <h2 className={styles.allapi}>All APIs</h2>
    <Apicard />
    </div>
  );
}

export default Marketplace;
