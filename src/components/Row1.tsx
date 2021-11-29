import { useDispatch, useSelector } from "react-redux";

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
      {row1Data.map((imgItem, idx) => {
        let borderStyle = row1Selection === idx ? styles.selected : "";
        return (
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
        );
      })}
    </div>
  );
};

export default Row1;
