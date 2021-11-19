import { Dispatch, SetStateAction } from "react";
import styles from "./Row.module.css";

import { skinData } from "../assets/data/Row2SkinData";
import { mouthData } from "../assets/data/Row2MouthData";
import { hairData } from "../assets/data/Row2HairData";
import { clothesData } from "../assets/data/Row2ClothesData";
import { accessoiresData } from "../assets/data/Row2AccessoiresData";

interface Props {
  row1Index: number;
  selection: number;
  setSelection: Dispatch<SetStateAction<number>>;
}

const Row2 = ({ row1Index, selection, setSelection }: Props) => {
  let data;
  switch (row1Index) {
    case 1:
      data = skinData;
      break;

    case 2:
      data = mouthData;
      break;

    case 3:
      data = hairData;
      break;

    case 4:
      data = clothesData;
      break;

    case 5:
      data = accessoiresData;
      break;

    default:
      data = skinData;
      break;
  }

  const clickHandler = (idx: number) => {
    setSelection(idx);
  };

  return (
    <div className={styles.container}>
      {data.map((imgItem, idx) => {
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

export default Row2;
