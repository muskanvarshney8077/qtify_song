import React from "react";
import styles from "./heroSection.module.css";
import HeroSectionLogo from "../../assets/HeroSectionLogo.png";

const heroSection = ({ content1, content2 }) => {
  return (
    <>
      <section className={styles.wrapper}>
        <div>
          <h1>{content1}</h1>
          <h1>{content2}</h1>
        </div>
        <img
          className={styles.image}
          src={HeroSectionLogo}
          alt="herosectionlogo"
          width={212}
        />
      </section>
    </>
  );
};

export default heroSection;
