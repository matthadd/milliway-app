import "./Generator.css";

import background from "../assets/images/layers/layer-01-backgrounds/layer-01-background-001.png";

const Generator = () => {
  return (
    <div>
      <img
        src={background}
        alt="light blue background"
        className="dimensions"
      />
    </div>
  );
};

export default Generator;
