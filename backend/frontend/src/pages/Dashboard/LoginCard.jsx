import React, {useState} from "react";
import styles from "./dashboard.module.css"
import Axios from "axios";
import { useNavigate } from "react-router";

function LoginCard() {
const navigate = useNavigate();

  const [emailReg,setemailReg]= useState('');
  const [passwordReg,setpasswordReg]= useState('');

  const register =(event) =>{
    event.preventDefault();
    Axios.post("/login",{
      email:emailReg,
      password:passwordReg
    }).then((response)=>{
      console.log(response);
      if(response.data.status===200){
navigate('/');
}else{
  alert(response.data.description);
}
    });
  };
  return (

    <div className={styles.cardholder}>
      <div className={styles.Card}>
<p>Login to your account</p>
<input type="email" className="Email Address"  placeholder="Email Address"
onChange={(e) => {
  setemailReg(e.target.value);
}}
/>
<input type="password" className="Password"  placeholder="Password"
onChange={(e) => {
  setpasswordReg(e.target.value);
}}
 />
<button type="submit" name="button" onClick={register} >Login / Signup</button>
      </div>
      </div>

  );
}

export default LoginCard;
