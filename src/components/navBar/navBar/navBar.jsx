import React from "react";
import Button from "../button/button";
import Logo from "../logo/logo";
import styles from "../navBar/navBar.module.css";
import SearchBar from "../searchbar/searchbar";
const navBar = () => {
  return (
    <nav className={styles.navBar}>
      <Logo />
      <SearchBar />
      <Button children="Give Feedback" />
    </nav>
  );
};

export default navBar;
