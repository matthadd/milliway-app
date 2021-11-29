import { useDispatch, useSelector } from "react-redux";

import styles from "./Row.module.css";

import { RootState } from "../store/store";
import { setRow3 } from "../store/reducers";

import { option4Data } from "../assets/data/Row3Opt4Data";
import { option5Data } from "../assets/data/Row3Opt5Data";
import { option6Data } from "../assets/data/Row3Opt6Data";
import { emptyData } from "../assets/data/EmptyData";

const Row3 = () => {
  const dispatch = useDispatch();
  const row1Index = useSelector((state: RootState) => state.row1);
  const selection = useSelector((state: RootState) => state.row3);

  let data;
  switch (row1Index) {
    case 3:
      data = option4Data;
      break;

    case 4:
      data = option5Data;
      break;

    case 5:
      data = option6Data;
      break;

    default:
      data = emptyData;
      break;
  }

  const handleIndexChange = (idx: number) => {
    let updatedState = [...selection];
    updatedState[row1Index - 3] = idx;
    dispatch(setRow3(updatedState));
  };

  return (
    <div className={styles.container}>
      {data.map((imgItem, idx) => {
        let borderStyle =
          selection[row1Index - 3] === idx
            ? styles.selected
            : imgItem.alt === "empty"
            ? styles.placeholder
            : "";
        return imgItem.alt === "empty" ? (
          <div className={styles.squareContainer} key={idx}>
            <div className={`${styles.square} ${borderStyle}`}></div>
          </div>
        ) : (
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
      })}
    </div>
  );
};

export default Row3;
