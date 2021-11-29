import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import styles from "./Generator.module.css";

import { RootState } from "../store/store";

import skin from "../assets/images/layers/layer-02-skin/layer-02-skin-001.png";
import mouth from "../assets/images/layers/layer-03-mouth/layer-03-mouth-001.png";

import { layer1Data } from "../assets/data/Layer1Data";

const Generator = () => {
  const row2Index = useSelector((state: RootState) => state.row2);

  const [bgSource, setBgSource] = useState("");
  const [bgAlt, setBgAlt] = useState("");

  useEffect(() => {
    console.log(layer1Data[row2Index[0]].source);

    setBgSource(layer1Data[row2Index[0]].source);
    setBgAlt(layer1Data[row2Index[0]].alt);
  }, [row2Index]);

  return (
    <div>
      <img
        src={bgSource}
        alt={bgAlt}
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
