import React from "react";
import styles from "../heroSection/heroSection.module.css";
import HeroSectionLogo from "../../../assets/HeroSectionLogo.png";

const heroSection = ({ content1, content2 }) => {
  return (
    <>
      <section className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.content1}>{content1}</div>
          <div className={styles.content2}>{content2}</div>
        </div>

        <img
          className={styles.image}
          src={HeroSectionLogo}
          alt="herosectionlogo"
        />
      </section>
    </>
  );
};

export default heroSection;
