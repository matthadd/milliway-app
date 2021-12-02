import clothes1 from "../images/options/row-2-options/row-2-option-05/row-2-option-05-001.png";
import clothes2 from "../images/options/row-2-options/row-2-option-05/row-2-option-05-002.png";
import clothes3 from "../images/options/row-2-options/row-2-option-05/row-2-option-05-003.png";
import clothes4 from "../images/options/row-2-options/row-2-option-05/row-2-option-05-004.png";
import clothes5 from "../images/options/row-2-options/row-2-option-05/row-2-option-05-005.png";
import clothes6 from "../images/options/row-2-options/row-2-option-05/row-2-option-05-006.png";
// import clothes7 from "../images/options/row-2-options/row-2-option-05/row-2-option-05-007.png";
// import clothes8 from "../images/options/row-2-options/row-2-option-05/row-2-option-05-008.png";
// import clothes9 from "../images/options/row-2-options/row-2-option-05/row-2-option-05-009.png";
// import clothes10 from "../images/options/row-2-options/row-2-option-05/row-2-option-05-010.png";

export const clothesData = [
  {
    source: clothes1,
    alt: "tshirt",
    availableColors: [1, 2, 7, 8],
    gender: "male",
  },
  {
    source: clothes2,
    alt: "tank top",
    availableColors: [1, 2, 7, 8],
    gender: "male",
  },

  {
    source: clothes3,
    alt: "bra",
    availableColors: [1, 2, 7, 8],
    gender: "female",
  },

  {
    source: clothes4,
    alt: "woman tank top",
    availableColors: [1, 2, 7, 8],
    gender: "female",
  },

  {
    source: clothes5,
    alt: "shirt",
    availableColors: [1, 2, 7, 4],
    gender: "neutral",
  },

  {
    source: clothes6,
    alt: "biker jacket",
    availableColors: [],
    gender: "neutral",
  },
  // {
  //   source: clothes7,
  //   alt: "suit",
  // },
  // {
  //   source: clothes8,
  //   alt: "bomber",
  // },
  // {
  //   source: clothes9,
  //   alt: "decorated woman tank top",
  // },
  // {
  //   source: clothes10,
  //   alt: "sweater",
  // },
];

export const femaleClothesData = clothesData.filter(
  (element) => element.gender === "female" || element.gender === "neutral"
);

export const femaleClothesDataLength = Array.from(
  femaleClothesData,
  (element) => element.availableColors.length
);

export const maleClothesData = clothesData.filter(
  (element) => element.gender === "male" || element.gender === "neutral"
);

export const maleClothesDataLength = Array.from(
  maleClothesData,
  (element) => element.availableColors.length
);

export const femaleClothesColorsData = Array.from(
  femaleClothesData,
  (element) => element.availableColors
);

export const maleClothesColorsData = Array.from(
  maleClothesData,
  (element) => element.availableColors
);
