import mouth1 from "../images/options/row-2-options/row-2-option-03/row-2-option-03-001.png";
import mouth2 from "../images/options/row-2-options/row-2-option-03/row-2-option-03-002.png";
import mouth3 from "../images/options/row-2-options/row-2-option-03/row-2-option-03-003.png";
import mouth4 from "../images/options/row-2-options/row-2-option-03/row-2-option-03-004.png";
import mouth5 from "../images/options/row-2-options/row-2-option-03/row-2-option-03-005.png";
import mouth6 from "../images/options/row-2-options/row-2-option-03/row-2-option-03-006.png";
import mouth7 from "../images/options/row-2-options/row-2-option-03/row-2-option-03-007.png";

const mouthData = [
  {
    source: mouth1,
    alt: "grin",
    gender: "neutral",
  },
  {
    source: mouth2,
    alt: "smile",
    gender: "neutral",
  },

  {
    source: mouth3,
    alt: "frown",
    gender: "neutral",
  },

  {
    source: mouth4,
    alt: "teeth out",
    gender: "neutral",
  },

  {
    source: mouth5,
    alt: "beard",
    gender: "male",
  },

  {
    source: mouth6,
    alt: "mustache grin",
    gender: "male",
  },
  {
    source: mouth7,
    alt: "kiss",
    gender: "female",
  },
];

export const femaleMouthData = mouthData.filter(
  (element) => element.gender === "female" || element.gender === "neutral"
);

export const femaleDataLength = femaleMouthData.length;

export const maleMouthData = mouthData.filter(
  (element) => element.gender === "male" || element.gender === "neutral"
);

export const maleDataLength = maleMouthData.length;
