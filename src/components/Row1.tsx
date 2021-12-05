import { useDispatch, useSelector } from "react-redux";

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

import "./swiper-custom.css";
import styles from "./Row.module.css";

import { setRow1 } from "../store/reducers";
import { RootState } from "../store/store";

import { row1Data } from "../assets/data/Row1Data";

const Row1 = () => {
  const dispatch = useDispatch();
  const row1Selection = useSelector((state: RootState) => state.row1);

  const clickHandler = (idx: number) => {
    dispatch(setRow1(idx));
  };

  return (
    <div className={styles.container}>
      <Swiper
        modules={[Navigation]}
        slidesPerView={8}
        spaceBetween={1}
        navigation
      >
        {row1Data.map((imgItem, idx) => {
          let borderStyle = row1Selection === idx ? styles.selected : "";
          return (
            <SwiperSlide>
              <img
                src={imgItem.source}
                alt={imgItem.alt}
                className={`${styles.square} ${borderStyle}`}
                onClick={() => clickHandler(idx)}
                key={idx}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Row1;
