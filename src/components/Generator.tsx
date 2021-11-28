import styles from "./Generator.module.css";

import background from "../assets/images/layers/layer-01-backgrounds/layer-01-background-001.png";
import skin from "../assets/images/layers/layer-02-skin/layer-02-skin-001.png";
import mouth from "../assets/images/layers/layer-03-mouth/layer-03-mouth-001.png";

const Generator = () => {
  return (
    <div>
      <img
        src={background}
        alt="light blue background"
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
