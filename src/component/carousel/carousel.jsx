import React, { useEffect } from "react";
import "swiper/css";
import styles from "./carousel.module.css";
import { Navigation } from "swiper/modules";
import { Swiper, useSwiper, SwiperSlide } from "swiper/react";
import CarouselLeftNavigation from "./carouselLeftNavigation/carouselLeftNavigation";
import CarouselRightNavigation from "./carouselRightNavigation/carouselRightNavigation";
const Controls = ({ data }) => {
  const swiper = useSwiper();
  console.log(swiper);
  useEffect(() => {
    swiper.slideTo(0);
  }, [data]);
  return <></>;
};
const Carousel = ({ data, renderCardComponent }) => {
  return (
    <div className={styles.wrapper}>
      <Swiper
        initialSlide={0}
        modules={{ Navigation }}
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove
      >
        <Controls data={data} />
        <CarouselLeftNavigation />
        <CarouselRightNavigation />
        {data.map((item) => (
          <SwiperSlide>{renderCardComponent(item)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
