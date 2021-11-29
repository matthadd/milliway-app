import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import styles from "./Generator.module.css";

import { RootState } from "../store/store";

import mouth from "../assets/images/layers/layer-03-mouth/layer-03-mouth-001.png";

import { layer1Data } from "../assets/data/Layer1Data";
import { layer2Data } from "../assets/data/Layer2Data";

const Generator = () => {
  const row2Index = useSelector((state: RootState) => state.row2);

  const [bgSource, setBgSource] = useState("");
  const [bgAlt, setBgAlt] = useState("");

  const [skinSource, setSkinSource] = useState("");
  const [skinAlt, setSkinAlt] = useState("");

  useEffect(() => {
    setBgSource(layer1Data[row2Index[0]].source);
    setBgAlt(layer1Data[row2Index[0]].alt);

    setSkinSource(layer2Data[row2Index[1]].source);
    setSkinAlt(layer2Data[row2Index[1]].alt);
  }, [row2Index]);

  return (
    <div>
      <img
        src={bgSource}
        alt={bgAlt}
        className={`${styles.bg} ${styles.dimension}`}
      />
      <img
        src={skinSource}
        alt={skinAlt}
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
