import React from "react";
import cardimage from "../../assets/cardimage.png";
import styles from "../card/card.module.css";
const card = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.subwrapper}>
          <img src={cardimage} alt="cardimage" className={styles.cardimage} />
          <button className={styles.button}>
            <p className={styles.buttonText}>100 follows</p>
          </button>
        </div>
        <p className={styles.text}> New Bollywood</p>
      </div>
    </>
  );
};

export default card;
