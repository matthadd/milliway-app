import { useDispatch, useSelector } from "react-redux";

import styles from "./Row.module.css";

import { RootState } from "../store/store";
import { setRow3 } from "../store/reducers";

import { option4Data } from "../assets/data/Row3Opt4Data";
// import { option5Data } from "../assets/data/Row3Opt5Data";
// import { option6Data } from "../assets/data/Row3Opt6Data";
import { emptyData } from "../assets/data/EmptyData";
import {
  femaleHairColorsData,
  maleHairColorsData,
} from "../assets/data/Row2HairData";

type imgArray = { source: string; alt: string }[][];

const Row3 = () => {
  const dispatch = useDispatch();
  const row1Index = useSelector((state: RootState) => state.row1);
  const row2Index = useSelector((state: RootState) => state.row2);
  const selection = useSelector((state: RootState) => state.row3);
  const gender = useSelector((state: RootState) => state.gender);

  let data: imgArray = emptyData;
  let dataIndex: number;

  switch (row1Index) {
    case 3:
      const hairColorsData =
        gender === "male" ? maleHairColorsData : femaleHairColorsData;
      console.log(hairColorsData);

      data = Array.from(hairColorsData, (element) =>
        Array.from(element, (index) => option4Data[index - 1])
      );

      dataIndex = row2Index[3];
      break;

    // case 4:
    //   data = option5Data;
    //   break;

    // case 5:
    //   data = option6Data;
    //   break;

    default:
      data = emptyData;
      dataIndex = 0;
      break;
  }

  const handleIndexChange = (idx: number) => {
    let updatedState = [...selection];
    updatedState[0] = idx;
    dispatch(setRow3(updatedState));
  };

  return (
    <div className={styles.container}>
      {data[dataIndex].map((imgItem, idx) => {
        let borderStyle = selection[0] === idx ? styles.selected : "";

        if (imgItem.alt === "empty") {
          return (
            <div className={styles.squareContainer} key={idx}>
              <img
                src={imgItem.source}
                alt={imgItem.alt}
                className={`${styles.square} ${styles.placeholder}`}
              />
            </div>
          );
        } else {
          return (
            <div
              className={styles.squareContainer}
              onClick={() => handleIndexChange(idx)}
              key={idx}
            >
              <img
                src={imgItem.source}
                alt={imgItem.alt}
                className={`${styles.square} ${borderStyle}`}
              />
            </div>
          );
        }
      })}
    </div>
  );
};

export default Row3;
