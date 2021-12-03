import { useDispatch, useSelector } from "react-redux";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

import "swiper/swiper-bundle.min.css";
import styles from "./Row.module.css";

import { RootState } from "../store/store";
import { setRow2 } from "../store/reducers";

import { bgData } from "../assets/data/Row2BGData";
import { skinData } from "../assets/data/Row2SkinData";
import { femaleMouthData, maleMouthData } from "../assets/data/Row2MouthData";
import { femaleHairData, maleHairData } from "../assets/data/Row2HairData";
import {
  femaleClothesData,
  maleClothesData,
} from "../assets/data/Row2ClothesData";
import { accessoiresData } from "../assets/data/Row2AccessoiresData";

const Row2 = () => {
  const dispatch = useDispatch();

  const row1Index = useSelector((state: RootState) => state.row1);
  const selection = useSelector((state: RootState) => state.row2);
  const gender = useSelector((state: RootState) => state.gender);

  let data;
  switch (row1Index) {
    case 0:
      data = bgData;
      break;

    case 1:
      data = skinData;
      break;

    case 2:
      data = gender === "male" ? maleMouthData : femaleMouthData;
      break;

    case 3:
      data = gender === "male" ? maleHairData : femaleHairData;
      break;

    case 4:
      data = gender === "male" ? maleClothesData : femaleClothesData;
      break;

    case 5:
      data = accessoiresData;
      break;

    default:
      data = bgData;
      break;
  }

  const clickHandler = (idx: number) => {
    let updatedState = [...selection];
    updatedState[row1Index] = idx;
    dispatch(setRow2(updatedState));
  };

  let swiperLength = data.length > 5 ? 5 : data.length;

  return (
    <div className={styles.container}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={12}
        slidesPerView={swiperLength}
        navigation
      >
        {data.map((imgItem, idx) => {
          let borderStyle = selection[row1Index] === idx ? styles.selected : "";
          return (
            <SwiperSlide>
              <div
                className={styles.squareContainer}
                onClick={() => clickHandler(idx)}
                key={idx}
              >
                <img
                  src={imgItem.source}
                  alt={imgItem.alt}
                  className={`${styles.square} ${borderStyle}`}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Row2;
