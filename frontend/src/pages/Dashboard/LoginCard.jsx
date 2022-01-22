import React from "react";
import styles from "./dashboard.module.css"

function LoginCard() {
  return (
    <div className={styles.cardholder}>
      <div className={styles.Card}>
<p>Login to your account</p>
<input type="email" className="Email Address"  placeHolder="Email Address" required />
<input type="password" className="Password"  placeHolder="Password" required />
<button type="submit" name="button">Login / Signup</button>
      </div>
      </div>
  );
}

export default LoginCard;
