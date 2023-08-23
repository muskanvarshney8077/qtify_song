import React from "react";
import { CircularProgress } from "@mui/material";
import Card from "../card/card";
import styles from "../section/section.module.css";
import Carousel from "../carousel/carousel";
import { useState } from "react";

const Section = ({ title, data, type }) => {
  const [caraToggle, setCaraToggle] = useState(true);
  const handleToggle = () => {
    setCaraToggle(!caraToggle);
  };
  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggle} onClick={handleToggle}>
          {caraToggle ? "Show All" : "Collapse All"}
        </h4>
      </div>
      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardWrapper}>
          {!caraToggle ? (
            <div className={styles.wrapper}>
              {data.map((ele) => (
                <Card type={type} data={ele} key={ele.id} />
              ))}
            </div>
          ) : (
            <>
              <Carousel
                data={data}
                renderCardComponent={(item) => <Card data={item} type={type} />}
              />
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Section;
