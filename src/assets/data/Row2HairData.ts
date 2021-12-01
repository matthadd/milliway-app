import hair1 from "../images/options/row-2-options/row-2-option-04/row-2-option-04-001.png";
import hair2 from "../images/options/row-2-options/row-2-option-04/row-2-option-04-002.png";
// import hair3 from "../images/options/row-2-options/row-2-option-04/row-2-option-04-003.png";
import hair4 from "../images/options/row-2-options/row-2-option-04/row-2-option-04-004.png";
import hair5 from "../images/options/row-2-options/row-2-option-04/row-2-option-04-005.png";
// import hair6 from "../images/options/row-2-options/row-2-option-04/row-2-option-04-006.png";

const hairData = [
  {
    source: hair1,
    alt: "simple clean",
    availableColors: [3, 6, 7, 8],
    gender: "male",
  },
  {
    source: hair2,
    alt: "elvis",
    availableColors: [3, 6, 7, 8],
    gender: "male",
  },

  // {
  //   source: hair3,
  //   alt: "middle",
  //   availableColors: [3, 6, 7, 8],
  //   gender: "male",
  // },

  {
    source: hair4,
    alt: "woman short",
    availableColors: [3, 6, 7, 8],
    gender: "female",
  },

  {
    source: hair5,
    alt: "woman long",
    availableColors: [3, 6, 7, 8],
    gender: "female",
  },

  // {
  //   source: hair6,
  //   alt: "woman fancy",
  //   availableColors: [3, 6, 7, 8],
  //   gender: "female",
  // },
];

export const femaleHairData = hairData.filter(
  (element) => element.gender === "female" || element.gender === "neutral"
);

export const femaleHairDataLength = Array.from(
  femaleHairData,
  (element) => element.availableColors.length
);

export const maleHairData = hairData.filter(
  (element) => element.gender === "male" || element.gender === "neutral"
);

export const maleHairDataLength = Array.from(
  maleHairData,
  (element) => element.availableColors.length
);

export const femaleHairColorsData = Array.from(
  femaleHairData,
  (element) => element.availableColors
);

export const maleHairColorsData = Array.from(
  maleHairData,
  (element) => element.availableColors
);
