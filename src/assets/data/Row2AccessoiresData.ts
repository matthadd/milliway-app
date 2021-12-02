import accessoires1 from "../images/options/row-2-options/row-2-option-06/row-2-option-06-001.png";
import accessoires2 from "../images/options/row-2-options/row-2-option-06/row-2-option-06-002.png";
import accessoires3 from "../images/options/row-2-options/row-2-option-06/row-2-option-06-003.png";
import accessoires4 from "../images/options/row-2-options/row-2-option-06/row-2-option-06-004.png";
import accessoires5 from "../images/options/row-2-options/row-2-option-06/row-2-option-06-005.png";
import accessoires6 from "../images/options/row-2-options/row-2-option-06/row-2-option-06-006.png";

export const accessoiresData = [
  {
    source: accessoires1,
    alt: "glasses",
    availableColors: [1, 7, 5, 2, 6, 4],
  },
  {
    source: accessoires2,
    alt: "3d glasses",
    availableColors: [],
  },

  {
    source: accessoires3,
    alt: "mask",
    availableColors: [7, 3, 1, 5],
  },

  {
    source: accessoires4,
    alt: "earings",
    availableColors: [],
  },

  {
    source: accessoires5,
    alt: "mask with bird",
    availableColors: [],
  },

  {
    source: accessoires6,
    alt: "slick glasses",
    availableColors: [],
  },
];

export const accessoiresDataLength = Array.from(
  accessoiresData,
  (element) => element.availableColors.length
);

export const accessoiresColorsData = Array.from(
  accessoiresData,
  (element) => element.availableColors
);
