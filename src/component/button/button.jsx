import React from "react";
import styles from "../button/button.module.css";

const button = ({ children }) => {
  return <div className={styles.button}>{children}</div>;
};

export default button;
