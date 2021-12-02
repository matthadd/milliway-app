import clothes01_01 from "../images/layers/layer-05-clothes/layer-05-clothes-001-01.png";
import clothes01_02 from "../images/layers/layer-05-clothes/layer-05-clothes-001-02.png";
import clothes01_03 from "../images/layers/layer-05-clothes/layer-05-clothes-001-03.png";
import clothes01_04 from "../images/layers/layer-05-clothes/layer-05-clothes-001-04.png";

import clothes02_01 from "../images/layers/layer-05-clothes/layer-05-clothes-002-01.png";
import clothes02_02 from "../images/layers/layer-05-clothes/layer-05-clothes-002-02.png";
import clothes02_03 from "../images/layers/layer-05-clothes/layer-05-clothes-002-03.png";
import clothes02_04 from "../images/layers/layer-05-clothes/layer-05-clothes-002-04.png";

import clothes03_01 from "../images/layers/layer-05-clothes/layer-05-clothes-003-01.png";
import clothes03_02 from "../images/layers/layer-05-clothes/layer-05-clothes-003-02.png";
import clothes03_03 from "../images/layers/layer-05-clothes/layer-05-clothes-003-03.png";
import clothes03_04 from "../images/layers/layer-05-clothes/layer-05-clothes-003-04.png";

import clothes04_01 from "../images/layers/layer-05-clothes/layer-05-clothes-004-01.png";
import clothes04_02 from "../images/layers/layer-05-clothes/layer-05-clothes-004-02.png";
import clothes04_03 from "../images/layers/layer-05-clothes/layer-05-clothes-004-03.png";
import clothes04_04 from "../images/layers/layer-05-clothes/layer-05-clothes-004-04.png";

import clothes06_01 from "../images/layers/layer-05-clothes/layer-05-clothes-006-01.png";
import clothes06_02 from "../images/layers/layer-05-clothes/layer-05-clothes-006-02.png";
import clothes06_03 from "../images/layers/layer-05-clothes/layer-05-clothes-006-03.png";
import clothes06_04 from "../images/layers/layer-05-clothes/layer-05-clothes-006-04.png";

import clothes07_01 from "../images/layers/layer-05-clothes/layer-05-clothes-007-01.png";

const layer5Data = [
  [
    {
      source: clothes01_01,
      alt: "clothes 01 01",
      gender: "male",
    },
    {
      source: clothes01_02,
      alt: "clothes 01 02",
      gender: "male",
    },
    {
      source: clothes01_03,
      alt: "clothes 01 03",
      gender: "male",
    },
    {
      source: clothes01_04,
      alt: "clothes 01 04",
      gender: "male",
    },
  ],
  [
    {
      source: clothes02_01,
      alt: "clothes 02 01",
      gender: "male",
    },
    {
      source: clothes02_02,
      alt: "clothes 02 02",
      gender: "male",
    },
    {
      source: clothes02_03,
      alt: "clothes 02 03",
      gender: "male",
    },
    {
      source: clothes02_04,
      alt: "clothes 02 04",
      gender: "male",
    },
  ],
  [
    {
      source: clothes03_01,
      alt: "clothes 03 01",
      gender: "female",
    },
    {
      source: clothes03_02,
      alt: "clothes 03 02",
      gender: "female",
    },
    {
      source: clothes03_03,
      alt: "clothes 03 03",
      gender: "female",
    },
    {
      source: clothes03_04,
      alt: "clothes 03 04",
      gender: "female",
    },
  ],
  [
    {
      source: clothes04_01,
      alt: "clothes 04 01",
      gender: "female",
    },
    {
      source: clothes04_02,
      alt: "clothes 04 02",
      gender: "female",
    },
    {
      source: clothes04_03,
      alt: "clothes 04 03",
      gender: "female",
    },
    {
      source: clothes04_04,
      alt: "clothes 04 04",
      gender: "female",
    },
  ],
  [
    {
      source: clothes06_01,
      alt: "clothes 06 01",
      gender: "neutral",
    },
    {
      source: clothes06_02,
      alt: "clothes 06 02",
      gender: "neutral",
    },
    {
      source: clothes06_03,
      alt: "clothes 06 03",
      gender: "neutral",
    },
    {
      source: clothes06_04,
      alt: "clothes 06 04",
      gender: "neutral",
    },
  ],
  [
    {
      source: clothes07_01,
      alt: "clothes 07 01",
      gender: "neutral",
    },
  ],
];

export const femaleClothesLayer = layer5Data.filter(
  (element) => element[0].gender === "female" || element[0].gender === "neutral"
);

export const maleClothesLayer = layer5Data.filter(
  (element) => element[0].gender === "male" || element[0].gender === "neutral"
);
