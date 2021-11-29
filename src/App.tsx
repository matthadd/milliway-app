import styles from "./App.module.css";

import Generator from "./components/Generator";
import Row1 from "./components/Row1";
import Row2 from "./components/Row2";
import Row3 from "./components/Row3";

import titleSVG from "./assets/images/pictures/make-your-own-milliway-citizen.svg";
import buttonSVG from "./assets/images/buttons/download.svg";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setRow2 } from "./store/reducers";

const App = () => {
  const dispatch = useDispatch();

  const downloadHandler = () => {
    console.log("test");
  };

  useEffect(() => {
    let randomRow2 = [
      Math.floor(Math.random() * 7),
      Math.floor(Math.random() * 6),
      Math.floor(Math.random() * 6),
      0,
      0,
    ];
    dispatch(setRow2(randomRow2));
  }, [dispatch]);

  return (
    <main className={styles.App}>
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
