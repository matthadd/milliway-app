import styles from "./Generator.module.css";

import background from "../assets/images/layers/layer-01-backgrounds/layer-01-background-001.png";

const Generator = () => {
  return (
    <div>
      <img
        src={background}
        alt="light blue background"
        className={styles.dimension}
      />
    </div>
  );
};

export default Generator;
