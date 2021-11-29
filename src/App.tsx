import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import styles from "./App.module.css";

import { setGender, setRow2, setRow3 } from "./store/reducers";

import Generator from "./components/Generator";
import Row1 from "./components/Row1";
import Row2 from "./components/Row2";
import Row3 from "./components/Row3";

import titleSVG from "./assets/images/pictures/make-your-own-milliway-citizen.svg";
import buttonSVG from "./assets/images/buttons/download.svg";
import female from "./assets/images/pictures/generator-female-picture.png";
import male from "./assets/images/pictures/generator-male-picture.png";

const App = () => {
  const dispatch = useDispatch();

  const [modalIsOpen, setIsOpen] = useState(true);

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
    console.log("test");
  };

  useEffect(() => {
    let randomRow2 = [
      Math.floor(Math.random() * 7),
      Math.floor(Math.random() * 6),
      Math.floor(Math.random() * 6),
      Math.floor(Math.random() * 2),
      0,
    ];

    let randomRow3 = [Math.floor(Math.random() * 4), 0, 0];
    dispatch(setRow2(randomRow2));
    dispatch(setRow3(randomRow3));
  }, [dispatch]);

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
      <Generator />
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
