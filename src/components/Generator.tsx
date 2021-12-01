import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import styles from "./Generator.module.css";

import { RootState } from "../store/store";

import { layer1Data } from "../assets/data/Layer1Data";
import { layer2Data } from "../assets/data/Layer2Data";
import { layer3MaleData, layer3FemaleData } from "../assets/data/Layer3Data";
import { layer4Data } from "../assets/data/Layer4Data";
import { layer5Data } from "../assets/data/Layer5Data";

import watermark from "../assets/images/layers/layer-07-domain.png";
import randomizeBtn from "../assets/images/buttons/randomize-button.svg";
import { layer6Data } from "../assets/data/Layer6Data";

interface Props {
  setRefresh: Dispatch<SetStateAction<number>>;
}

const Generator = ({ setRefresh }: Props) => {
  const row2Index = useSelector((state: RootState) => state.row2);
  const row3Index = useSelector((state: RootState) => state.row3);
  const gender = useSelector((state: RootState) => state.gender);

  const [bgSource, setBgSource] = useState("");
  const [bgAlt, setBgAlt] = useState("");

  const [skinSource, setSkinSource] = useState("");
  const [skinAlt, setSkinAlt] = useState("");

  const [mouthSource, setMouthSource] = useState("");
  const [mouthAlt, setMouthAlt] = useState("");

  const [hairSource, setHairSource] = useState("");
  const [hairAlt, setHairAlt] = useState("");

  const [clothesSource, setClothesSource] = useState("");
  const [clothesAlt, setClothesAlt] = useState("");

  const [accessoireSource, setAccessoireSource] = useState("");
  const [accessoireAlt, setAccessoireAlt] = useState("");

  const layer3Data = gender === "male" ? layer3MaleData : layer3FemaleData;

  useEffect(() => {
    setBgSource(layer1Data[row2Index[0]].source);
    setBgAlt(layer1Data[row2Index[0]].alt);

    setSkinSource(layer2Data[row2Index[1]].source);
    setSkinAlt(layer2Data[row2Index[1]].alt);

    setMouthSource(layer3Data[row2Index[2]].source);
    setMouthAlt(layer3Data[row2Index[2]].alt);

    setHairSource(layer4Data[row2Index[3]][row3Index[0]].source);
    setHairAlt(layer4Data[row2Index[3]][row3Index[0]].alt);

    setClothesSource(layer5Data[row2Index[4]][row3Index[1]].source);
    setClothesAlt(layer5Data[row2Index[4]][row3Index[1]].alt);

    setAccessoireSource(layer6Data[row2Index[5]][row3Index[2]].source);
    setAccessoireAlt(layer6Data[row2Index[5]][row3Index[2]].alt);
  }, [gender, row2Index, row3Index]);

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
        src={mouthSource}
        alt={mouthAlt}
        className={`${styles.overlay} ${styles.dimension}`}
      />
      <img
        src={hairSource}
        alt={hairAlt}
        className={`${styles.overlay} ${styles.dimension}`}
      />
      <img
        src={clothesSource}
        alt={clothesAlt}
        className={`${styles.overlay} ${styles.dimension}`}
      />
      <img
        src={accessoireSource}
        alt={accessoireAlt}
        className={`${styles.overlay} ${styles.dimension}`}
      />
      <img
        src={watermark}
        alt="watermark"
        className={`${styles.overlay} ${styles.dimension}`}
      />
      <img
        src={randomizeBtn}
        alt="randomize button"
        className={styles.randomBtn}
        onClick={() => setRefresh((val) => (val += 1))}
      />
    </div>
  );
};

export default Generator;
