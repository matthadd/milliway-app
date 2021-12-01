import hair01_01 from "../images/layers/layer-04-hair/layer-04-hair-001-01.png";
import hair01_02 from "../images/layers/layer-04-hair/layer-04-hair-001-02.png";
import hair01_03 from "../images/layers/layer-04-hair/layer-04-hair-001-03.png";
import hair01_04 from "../images/layers/layer-04-hair/layer-04-hair-001-04.png";

import hair02_01 from "../images/layers/layer-04-hair/layer-04-hair-002-01.png";
import hair02_02 from "../images/layers/layer-04-hair/layer-04-hair-002-02.png";
import hair02_03 from "../images/layers/layer-04-hair/layer-04-hair-002-03.png";
import hair02_04 from "../images/layers/layer-04-hair/layer-04-hair-002-04.png";

import hair04_01 from "../images/layers/layer-04-hair/layer-04-hair-004-01.png";
import hair04_02 from "../images/layers/layer-04-hair/layer-04-hair-004-02.png";
import hair04_03 from "../images/layers/layer-04-hair/layer-04-hair-004-03.png";
import hair04_04 from "../images/layers/layer-04-hair/layer-04-hair-004-04.png";

import hair05_01 from "../images/layers/layer-04-hair/layer-04-hair-005-01.png";
import hair05_02 from "../images/layers/layer-04-hair/layer-04-hair-005-02.png";
import hair05_03 from "../images/layers/layer-04-hair/layer-04-hair-005-03.png";
import hair05_04 from "../images/layers/layer-04-hair/layer-04-hair-005-04.png";

const layer4Data = [
  [
    {
      source: hair01_01,
      alt: "hair 01 01",
      gender: "male",
    },
    {
      source: hair01_02,
      alt: "hair 01 02",
      gender: "male",
    },
    {
      source: hair01_03,
      alt: "hair 01 03",
      gender: "male",
    },
    {
      source: hair01_04,
      alt: "hair 01 04",
      gender: "male",
    },
  ],
  [
    {
      source: hair02_01,
      alt: "hair 02 01",
      gender: "male",
    },
    {
      source: hair02_02,
      alt: "hair 02 02",
      gender: "male",
    },
    {
      source: hair02_03,
      alt: "hair 02 03",
      gender: "male",
    },
    {
      source: hair02_04,
      alt: "hair 02 04",
      gender: "male",
    },
  ],
  [
    {
      source: hair04_01,
      alt: "hair 04 01",
      gender: "female",
    },
    {
      source: hair04_02,
      alt: "hair 04 02",
      gender: "female",
    },
    {
      source: hair04_03,
      alt: "hair 04 03",
      gender: "female",
    },
    {
      source: hair04_04,
      alt: "hair 04 04",
      gender: "female",
    },
  ],
  [
    {
      source: hair05_01,
      alt: "hair 05 01",
      gender: "female",
    },
    {
      source: hair05_02,
      alt: "hair 05 02",
      gender: "female",
    },
    {
      source: hair05_03,
      alt: "hair 05 03",
      gender: "female",
    },
    {
      source: hair05_04,
      alt: "hair 05 04",
      gender: "female",
    },
  ],
];

export const femaleHairLayer = layer4Data.filter(
  (element) => element[0].gender === "female" || element[0].gender === "neutral"
);

export const maleHairLayer = layer4Data.filter(
  (element) => element[0].gender === "male" || element[0].gender === "neutral"
);
