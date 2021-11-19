import { useState } from "react";

import styles from "./App.module.css";
import Generator from "./components/Generator";
import Row1 from "./components/Row1";

import titleSVG from "./assets/images/pictures/make-your-own-milliway-citizen.svg";
import buttonSVG from "./assets/images/buttons/download.svg";

const App = () => {
  const [row1Selection, setRow1Selection] = useState(0);

  const downloadHandler = () => {
    console.log("DOWNLOAD");
  };

  return (
    <main className={styles.App}>
      <Generator />
      <div className={styles.container}>
        <img src={titleSVG} alt="title svg" className={styles.title} />
        <div className={styles.rowsContainer}>
          <Row1 selection={row1Selection} setSelection={setRow1Selection} />
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
