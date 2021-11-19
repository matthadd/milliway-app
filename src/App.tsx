import styles from "./App.module.css";
import Generator from "./components/Generator";
import Row1 from "./components/Row1";

import titleSVG from "./assets/images/pictures/make-your-own-milliway-citizen.svg";
import buttonSVG from "./assets/images/buttons/download.svg";

const App = () => {
  return (
    <div className={styles.App}>
      <Generator />
      <div className={styles.container}>
        <img src={titleSVG} alt="title svg" className={styles.title} />
        <div className={styles.rowsContainer}>
          <Row1 />
          <Row1 />
          <Row1 />
        </div>
        <div className={styles.downloadContainer}>
          <a href="#">
            <img
              src={buttonSVG}
              alt="download button"
              className={styles.button}
            />
          </a>
          <p>Download your own Miliway as a .png</p>
        </div>
      </div>
    </div>
  );
};

export default App;
