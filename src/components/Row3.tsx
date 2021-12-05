import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

import "./swiper-custom.css";
import styles from "./Row.module.css";

import { RootState } from "../store/store";
import { setRow3 } from "../store/reducers";

import { option4Data } from "../assets/data/Row3Opt4Data";
import { option5Data } from "../assets/data/Row3Opt5Data";
import { option6Data } from "../assets/data/Row3Opt6Data";
import { emptyData } from "../assets/data/EmptyData";
import {
  femaleHairColorsData,
  maleHairColorsData,
} from "../assets/data/Row2HairData";
import {
  femaleClothesColorsData,
  maleClothesColorsData,
} from "../assets/data/Row2ClothesData";
import { accessoiresColorsData } from "../assets/data/Row2AccessoiresData";

const Row3 = () => {
  const dispatch = useDispatch();
  const row1Index = useSelector((state: RootState) => state.row1);
  const row2Index = useSelector((state: RootState) => state.row2);
  const selection = useSelector((state: RootState) => state.row3);
  const gender = useSelector((state: RootState) => state.gender);

  let data = emptyData;
  let dataIndex: number;

  switch (row1Index) {
    case 3:
      const hairColorsData =
        gender === "male" ? maleHairColorsData : femaleHairColorsData;

      data = Array.from(hairColorsData, (element) =>
        Array.from(element, (index) => option4Data[index - 1])
      );

      dataIndex = row2Index[3];
      break;

    case 4:
      const clothesColorsData =
        gender === "male" ? maleClothesColorsData : femaleClothesColorsData;
      data = Array.from(clothesColorsData, (element) =>
        Array.from(element, (index) => option5Data[index - 1])
      );

      data.forEach((element) => {
        if (element.length === 0) {
          element.push(emptyData[0][0]);
        }
      });

      dataIndex = row2Index[4];

      break;

    case 5:
      data = Array.from(accessoiresColorsData, (element) =>
        Array.from(element, (index) => option6Data[index - 1])
      );

      data.forEach((element) => {
        if (element.length === 0) {
          element.push(emptyData[0][0]);
        }
      });

      dataIndex = row2Index[5];
      break;

    default:
      data = emptyData;
      dataIndex = 0;
      break;
  }

  useEffect(() => {
    let updatedState = [...selection];
    updatedState[row1Index - 3] = 0;
    dispatch(setRow3(updatedState));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, row2Index]);

  const handleIndexChange = (idx: number) => {
    let updatedState = [...selection];
    updatedState[row1Index - 3] = idx;
    dispatch(setRow3(updatedState));
  };

  return (
    <div className={styles.container}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={1}
        slidesPerView={8}
        navigation
      >
        {data[dataIndex].map((imgItem, idx) => {
          let borderStyle =
            selection[row1Index - 3] === idx ? styles.selected : "";

          let placeholderStyle =
            imgItem.alt === "empty" ? styles.placeholder : "";

          return (
            <SwiperSlide>
              <div
                className={styles.squareContainer}
                onClick={() => handleIndexChange(idx)}
                key={idx}
              >
                <img
                  src={imgItem.source}
                  alt={imgItem.alt}
                  className={`${styles.square} ${borderStyle} ${placeholderStyle}`}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Row3;
