import React from "react";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={styles.NavBar}>
      <img 
        className={styles.Logo} 
        alt="logo" 
        src="./img/logo.png"
      ></img>
      <img
        className={styles.Hamburger}
        alt="hamburger"
        src="./img/hamburger.png"
      ></img>
    </div>
  );
};

export default Nav;
