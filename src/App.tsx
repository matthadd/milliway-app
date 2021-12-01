import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./App.module.css";

import { RootState } from "./store/store";
import { setGender, setRow2, setRow3 } from "./store/reducers";

import Generator from "./components/Generator";
import Row1 from "./components/Row1";
import Row2 from "./components/Row2";
import Row3 from "./components/Row3";

import titleSVG from "./assets/images/pictures/make-your-own-milliway-citizen.svg";
import buttonSVG from "./assets/images/buttons/download.svg";
import female from "./assets/images/pictures/generator-female-picture.png";
import male from "./assets/images/pictures/generator-male-picture.png";

import { bgDataLength } from "./assets/data/Row2BGData";
import { skinDataLength } from "./assets/data/Row2SkinData";
import {
  femaleMouthDataLength,
  maleMouthDataLength,
} from "./assets/data/Row2MouthData";
import {
  femaleHairDataLength,
  maleHairDataLength,
} from "./assets/data/Row2HairData";

const App = () => {
  const dispatch = useDispatch();
  const [refresh, setRefresh] = useState(0);

  const [modalIsOpen, setIsOpen] = useState(true);

  const gender = useSelector((state: RootState) => state.gender);
  const row2 = useSelector((state: RootState) => state.row2);

  const mouthDataLength =
    gender === "male" ? maleMouthDataLength : femaleMouthDataLength;
  const hairDataLength =
    gender === "male" ? maleHairDataLength : femaleHairDataLength;

  let hairLength = hairDataLength.length;
  let row3HairColorLength = hairDataLength[row2[3]];

  const closeModal = () => {
    setIsOpen(false);
  };

  const chooseFemale = () => {
    dispatch(setGender("female"));
    closeModal();
  };

  const chooseMale = () => {
    dispatch(setGender("male"));
    closeModal();
  };

  const downloadHandler = () => {
    console.log(row2);
  };

  useEffect(() => {
    let randomRow2 = [
      Math.floor(Math.random() * bgDataLength),
      Math.floor(Math.random() * skinDataLength),
      Math.floor(Math.random() * mouthDataLength),
      Math.floor(Math.random() * hairLength),
      0,
      0,
    ];

    let randomRow3 = [Math.floor(Math.random() * row3HairColorLength), 0, 0];
    dispatch(setRow2(randomRow2));
    dispatch(setRow3(randomRow3));
  }, [dispatch, hairLength, mouthDataLength, refresh, row3HairColorLength]);

  let showModal = modalIsOpen ? "" : styles.modalClose;

  return (
    <main className={styles.App}>
      <div className={`${styles.modal} ${showModal}`}>
        <img
          className={styles.gender}
          src={female}
          alt="female"
          onClick={chooseFemale}
        />
        <img
          className={styles.gender}
          src={male}
          alt="male"
          onClick={chooseMale}
        />
      </div>
      <div className={`${styles.placeholder} ${showModal}`} />
      <Generator setRefresh={setRefresh} />
      <div className={styles.container}>
        <img src={titleSVG} alt="title svg" className={styles.title} />
        <div className={styles.rowsContainer}>
          <Row1 />
          <Row2 />
          <Row3 />
        </div>
        <div className={styles.downloadContainer}>
          <div onClick={downloadHandler} className={styles.button}>
            <img src={buttonSVG} alt="download button" />
          </div>
          <p>Download your own Miliway as a .png</p>
        </div>
      </div>
    </main>
  );
};

export default App;
