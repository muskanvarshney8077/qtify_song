import React from "react";
import styles from "../searchbar/searchbar.module.css";
import { ReactComponent as SearchIcon } from "../../assets/SearchIcon.svg";

const searchbar = ({ placeholder, data }) => {
  return (
    <>
      <form className={styles.wrapper}>
        <input className={styles.search} placeholder={placeholder} />
        <button className={styles.searchButton} type="submit">
          <SearchIcon />
        </button>
      </form>
    </>
  );
};

export default searchbar;
