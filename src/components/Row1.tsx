import styles from "./Row1.module.css";

import background from "../assets/images/options/row-1-options/row-1-option-01-background.jpg";
import skin from "../assets/images/options/row-1-options/row-1-option-02-skin.png";
import mouth from "../assets/images/options/row-1-options/row-1-option-03-mouth.png";
import hair from "../assets/images/options/row-1-options/row-1-option-04-hair.png";
import shirt from "../assets/images/options/row-1-options/row-1-option-05-shirt.png";
import outerwear from "../assets/images/options/row-1-options/row-1-option-06-outerwear.png";
import accessoires from "../assets/images/options/row-1-options/row-1-option-07-accessoires.png";

const Row1 = () => {
  return (
    <div className={styles.container}>
      <a href="#" className="squareLink">
        <img
          src={background}
          alt="background option"
          className={styles.square}
        />
      </a>

      <a href="#" className="squareLink">
        <img src={skin} alt="skin option" className={styles.square} />
      </a>

      <a href="#" className="squareLink">
        <img src={mouth} alt="mouth option" className={styles.square} />
      </a>

      <a href="#" className="squareLink">
        <img src={hair} alt="hair option" className={styles.square} />
      </a>

      <a href="#" className="squareLink">
        <img src={shirt} alt="shirt option" className={styles.square} />
      </a>

      <a href="#" className="squareLink">
        <img src={outerwear} alt="outerwear option" className={styles.square} />
      </a>

      <a href="#" className={styles.squareLink}>
        <img
          src={accessoires}
          alt="accessoire option"
          className={styles.square}
        />
      </a>
    </div>
  );
};

export default Row1;
