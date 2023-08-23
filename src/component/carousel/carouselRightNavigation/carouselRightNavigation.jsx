import React, { useEffect, useState } from "react";
import { ReactComponent as RightArrow } from "../../../assets/RightArrow.svg";
import { useSwiper } from "swiper/react";
import styles from "../carousel.module.css";
const CarouselLeftNavigation = () => {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper.isEnd);
  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsEnd(swiper.isEnd);
    });
  }, []);
  return (
    <div className={styles.rightNavigation}>
      {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
    </div>
  );
};

export default CarouselLeftNavigation;
