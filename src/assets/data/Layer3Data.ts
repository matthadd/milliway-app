import mouth1 from "../images/layers/layer-03-mouth/layer-03-mouth-001.png";
import mouth2 from "../images/layers/layer-03-mouth/layer-03-mouth-002.png";
import mouth3 from "../images/layers/layer-03-mouth/layer-03-mouth-003.png";
import mouth4 from "../images/layers/layer-03-mouth/layer-03-mouth-004.png";
import mouth5 from "../images/layers/layer-03-mouth/layer-03-mouth-005.png";
import mouth6 from "../images/layers/layer-03-mouth/layer-03-mouth-006.png";
import mouth7 from "../images/layers/layer-03-mouth/layer-03-mouth-007.png";

const layer3Data = [
  {
    source: mouth1,
    alt: "mouth 1",
    gender: "neutral",
  },
  {
    source: mouth2,
    alt: "mouth 2",
    gender: "neutral",
  },
  {
    source: mouth3,
    alt: "mouth 3",
    gender: "neutral",
  },
  {
    source: mouth4,
    alt: "mouth 4",
    gender: "neutral",
  },
  {
    source: mouth5,
    alt: "mouth 5",
    gender: "male",
  },
  {
    source: mouth6,
    alt: "mouth 6",
    gender: "male",
  },
  {
    source: mouth7,
    alt: "mouth 7",
    gender: "female",
  },
];

export const layer3MaleData = layer3Data.filter(
  (element) => element.gender === "male" || element.gender === "neutral"
);

export const layer3FemaleData = layer3Data.filter(
  (element) => element.gender === "female" || element.gender === "neutral"
);
