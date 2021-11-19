import { Dispatch, SetStateAction } from "react";

import styles from "./Row.module.css";

import { row1Data } from "../assets/data/Row1Data";

interface Props {
  selection: number;
  setSelection: Dispatch<SetStateAction<number>>;
}

const Row1 = ({ selection, setSelection }: Props) => {
  const clickHandler = (idx: number) => {
    setSelection(idx);
  };

  return (
    <div className={styles.container}>
      {row1Data.map((imgItem, idx) => {
        let borderStyle = selection === idx ? styles.selected : "";
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
