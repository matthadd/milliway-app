import styles from "./Generator.module.css";

import skin from "../assets/images/layers/layer-02-skin/layer-02-skin-001.png";
import mouth from "../assets/images/layers/layer-03-mouth/layer-03-mouth-001.png";

import { layer1Data } from "../assets/data/Layer1Data";
import { useEffect, useRef } from "react";

interface Props {
  row2Index: number[];
  row3Index: number[];
}

const Generator = ({ row2Index, row3Index }: Props) => {
  let bgSource = useRef("");
  let bgAlt = useRef("");

  useEffect(() => {
    bgSource.current = layer1Data[row2Index[0]].source;
    bgAlt.current = layer1Data[row2Index[0]].alt;
  }, [row2Index]);

  return (
    <div>
      <img
        src={bgSource.current}
        alt={bgAlt.current}
        className={`${styles.bg} ${styles.dimension}`}
      />
      <img
        src={skin}
        alt="skin 1"
        className={`${styles.overlay} ${styles.dimension}`}
      />
      <img
        src={mouth}
        alt="mouth 1"
        className={`${styles.overlay} ${styles.dimension}`}
      />
    </div>
  );
};

export default Generator;
