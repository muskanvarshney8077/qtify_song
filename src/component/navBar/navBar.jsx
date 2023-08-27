import React from "react";
import Button from "../button/button";
import Logo from "../logo/logo";
import styles from "../navBar/navBar.module.css";
import Search from "../search/search";
import SearchBar from "../searchbar/searchbar";

const navBar = ({ data }) => {
  return (
    <nav className={styles.navBar}>
      <Logo />
      {/* <SearchBar placeholder="Search a song of your choice" data={data} /> */}
      <Search data={data} />
      <Button children="Give Feedback" />
    </nav>
  );
};

export default navBar;
