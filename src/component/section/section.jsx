import React, { useEffect, useMemo, useRef, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import Card from "../card/card";
import styles from "../section/section.module.css";
import Carousel from "../carousel/carousel";

import BasicTabs from "../basicTabs/basicTabs";

const Section = ({
  title,
  data,
  type,
  filteredData = null,
  filteredDataValues = [],
  toggle = false,
  handleToggle = null,
  value = "",
  handleChange = null,
}) => {
  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {!toggle ? "Show All" : "Collapse All"}
        </h4>
      </div>
      {type === "songs" ? (
        <BasicTabs value={value} handleChange={handleChange} />
      ) : null}
      {data?.length === 0 ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <div className={styles.cardWrapper}>
          {toggle ? (
            <div className={styles.wrapper}>
              {filteredDataValues.map((ele) => (
                <Card type={type} data={ele} key={ele.id} />
              ))}
            </div>
          ) : (
            <Carousel
              data={filteredDataValues}
              renderCardComponent={(item) => (
                <Card key={item.id} data={item} type={type} />
              )}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Section;
