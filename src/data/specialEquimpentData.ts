import truckСranePreview from "../assets/images/special-equipment/truckcrane/light/1.jpg";
import truckСraneLight from "../assets/images/special-equipment/truckcrane/light/1.jpg";
import truckСraneMedium from "../assets/images/special-equipment/truckcrane/medium/1.jpeg";
import truckСraneHeavy from "../assets/images/special-equipment/truckcrane/heavy/1.jpeg";

import aerialPlatformPreview from "../assets/images/special-equipment/aerial-platform/cranked/1.jpeg";
import aerialPlatformTelescopic from "../assets/images/special-equipment/aerial-platform/telescopic/1.jpg";
import aerialPlatformCranked from "../assets/images/special-equipment/aerial-platform/cranked/1.jpeg";

import bulldozerPreview from "../assets/images/special-equipment/bulldozer/1.jpeg";
import bulldozer from "../assets/images/special-equipment/bulldozer/1.jpeg";

import dumptruckPreview from "../assets/images/special-equipment/dumptruck/1.png";
import dumptruck from "../assets/images/special-equipment/dumptruck/1.png";

import manipulatorPreview from "../assets/images/special-equipment/manipulator/1.jpg";
import manipulator from "../assets/images/special-equipment/manipulator/1.jpg";

import frontloaderPreview from "../assets/images/special-equipment/frontloader/1.jpg";
import frontloader from "../assets/images/special-equipment/frontloader/1.jpg";

import excavatorPreview from "../assets/images/special-equipment/excavator/crawler/1.jpeg";
import excavatorCrawler from "../assets/images/special-equipment/excavator/crawler/1.jpeg";
import excavatorWheeled from "../assets/images/special-equipment/excavator/wheeled/1.jpeg";

import trawlPreview from "../assets/images/special-equipment/trawl/1.jpg";
import trawl from "../assets/images/special-equipment/trawl/1.jpg";

export const specialEquipmentData = [
  {
    title: "Аренда автокрана",
    name: "АВТОКРАН",
    previewImg: truckСranePreview,
    types: {
      light: {
        typeIMG: truckСraneLight,
        characteristics: [
          {
            characteristicTitle:
              "Грузоподъемность 25 ТОНН Вылет стрелы 22, 28, 31, 40 метров",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "от 1800 до 3000 руб.",
              },
              {
                characteristic: "1 смена:",
                value: "от 14500 до 24000 руб.",
              },
            ],
          },
          {
            characteristicTitle:
              "Грузоподъемность 32 ТОННЫ Вылет стрелы 33, 40 метров",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "от 2500 до 3500 руб.",
              },
              {
                characteristic: "1 смена:",
                value: "от 20000 до 28000 руб.",
              },
            ],
          },
          {
            characteristicTitle:
              "Грузоподъемность 40 ТОНН Вылет стрелы 33, 40 метров",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "от 3500 до 5000 руб.",
              },
              {
                characteristic: "1 смена:",
                value: "от 28000 до 32000 руб.",
              },
            ],
          },
          {
            characteristicTitle:
              "Грузоподъемность 50 ТОНН Вылет стрелы 34, 44 метров",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "от 4000 до 5000 руб.",
              },
              {
                characteristic: "1 смена:",
                value: "от 32000 до 40000 руб.",
              },
            ],
          },
        ],
      },
      medium: {
        typeIMG: truckСraneMedium,
        characteristics: [
          {
            characteristicTitle:
              "Грузоподъемность 70 ТОНН Вылет стрелы 44 метра",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "от 6000 руб.",
              },
              {
                characteristic: "1 смена:",
                value: "от 48000 руб.",
              },
            ],
          },
          {
            characteristicTitle:
              "Грузоподъемность 80 ТОНН Вылет стрелы 52 метра",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "от 8000 руб.",
              },
              {
                characteristic: "1 смена:",
                value: "от 64000 руб.",
              },
            ],
          },
          {
            characteristicTitle:
              "Грузоподъемность 100 ТОНН Вылет стрелы 52 метра",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "от 10000 руб.",
              },
              {
                characteristic: "1 смена:",
                value: "от 80000 руб.",
              },
            ],
          },
        ],
      },
      heavy: {
        typeIMG: truckСraneHeavy,
        characteristics: [
          {
            characteristicTitle:
              "Грузоподъемность 160 ТОНН Вылет стрелы 64 метра",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "по согласованию",
              },
              {
                characteristic: "1 смена:",
                value: "по согласованию",
              },
            ],
          },
          {
            characteristicTitle:
              "Грузоподъемность 200 ТОНН Вылет стрелы 68 метров",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "по согласованию",
              },
              {
                characteristic: "1 смена:",
                value: "по согласованию",
              },
            ],
          },
          {
            characteristicTitle:
              "Грузоподъемность 300 ТОНН Вылет стрелы 80 метров",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "по согласованию",
              },
              {
                characteristic: "1 смена:",
                value: "по согласованию",
              },
            ],
          },
          {
            characteristicTitle:
              "Грузоподъемность 350 ТОНН Вылет стрелы 80 метров",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "по согласованию",
              },
              {
                characteristic: "1 смена:",
                value: "по согласованию",
              },
            ],
          },
        ],
      },
    },
  },
  {
    title: "Аренда автовышки",
    name: "АВТОВЫШКА",
    previewImg: aerialPlatformPreview,
    types: {
      telescopic: {
        typeIMG: aerialPlatformTelescopic,
        characteristics: [
          {
            characteristicTitle: "Высота подъема 18 метров",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "от 1500 руб.",
              },
              {
                characteristic: "1 смена:",
                value: "от 12000 руб.",
              },
            ],
          },
          {
            characteristicTitle: "Высота подъема 22 метра",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "от 1700 руб.",
              },
              {
                characteristic: "1 смена:",
                value: "от 13600 руб.",
              },
            ],
          },
          {
            characteristicTitle: "Высота подъема 28 метров",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "от 2000 руб.",
              },
              {
                characteristic: "1 смена:",
                value: "от 16000 руб.",
              },
            ],
          },
          {
            characteristicTitle: "Высота подъема 36 метров",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "от 2500 руб.",
              },
              {
                characteristic: "1 смена:",
                value: "от 20000 руб.",
              },
            ],
          },
          {
            characteristicTitle: "Высота подъема 45 метров",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "от 2800 руб.",
              },
              {
                characteristic: "1 смена:",
                value: "от 22400 руб.",
              },
            ],
          },
          {
            characteristicTitle: "Высота подъема 60 метров",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "по согласованию",
              },
              {
                characteristic: "1 смена:",
                value: "по согласованию",
              },
            ],
          },
          {
            characteristicTitle: "Высота подъема 70 метров",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "по согласованию",
              },
              {
                characteristic: "1 смена:",
                value: "по согласованию",
              },
            ],
          },
        ],
      },
      cranked: {
        typeIMG: aerialPlatformCranked,
        characteristics: [
          {
            characteristicTitle: "Высота подъема 22 метра",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "от 1700 руб.",
              },
              {
                characteristic: "1 смена:",
                value: "от 13600 руб.",
              },
            ],
          },
          {
            characteristicTitle: "Высота подъема 28 метров",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "от 2000 руб.",
              },
              {
                characteristic: "1 смена:",
                value: "от 16000 руб.",
              },
            ],
          },
        ],
      },
    },
  },
  {
    title: "Аренда бульдозера",
    name: "БУЛЬДОЗЕР",
    previewImg: bulldozerPreview,
    types: {
      bulldozer: {
        typeIMG: bulldozer,
        characteristics: [
          {
            characteristicTitle: "Рабочий вес 16 тонн",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "от 2500 руб.",
              },
              {
                characteristic: "1 смена:",
                value: "от 20000 руб.",
              },
            ],
          },
          {
            characteristicTitle: "Рабочий вес 24 тонны",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "от 3000 руб.",
              },
              {
                characteristic: "1 смена:",
                value: "от 24000 руб.",
              },
            ],
          },
          {
            characteristicTitle: "Рабочий вес 36 тонн",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "от 3500 руб.",
              },
              {
                characteristic: "1 смена:",
                value: "от 28000 руб.",
              },
            ],
          },
        ],
      },
    },
  },
  {
    title: "Аренда самосвала",
    name: "САМОСВАЛ",
    previewImg: dumptruckPreview,
    types: {
      dumptruck: {
        typeIMG: dumptruck,
        characteristics: [
          {
            characteristicTitle: "Объем кузова 10 м3",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "от 1400 руб.",
              },
              {
                characteristic: "1 смена:",
                value: "от 11200 руб.",
              },
            ],
          },
          {
            characteristicTitle: "Объем кузова 20 м3",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "от 2000 руб.",
              },
              {
                characteristic: "1 смена:",
                value: "от 16000 руб.",
              },
            ],
          },
          {
            characteristicTitle: "Объем кузова 30 м3",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "от 2500 руб.",
              },
              {
                characteristic: "1 смена:",
                value: "от 20000 руб.",
              },
            ],
          },
        ],
      },
    },
  },
  {
    title: "Аренда манипулятора",
    name: "МАНИПУЛЯТОР",
    previewImg: manipulatorPreview,
    types: {
      manipulator: {
        typeIMG: manipulator,
        characteristics: [
          {
            characteristicTitle:
              "Вылет стрелы 11 метров, грузоподъемность 3 тонны",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "от 1500 руб.",
              },
              {
                characteristic: "1 смена:",
                value: "от 12000 руб.",
              },
            ],
          },
          {
            characteristicTitle:
              "Вылет стрелы 14 метров, грузоподъемность 5 тонн",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "от 1800 руб.",
              },
              {
                characteristic: "1 смена:",
                value: "от 14400 руб.",
              },
            ],
          },
          {
            characteristicTitle:
              "Вылет стрелы 21 метр, грузоподъемность 7 тонн",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "от 2000 руб.",
              },
              {
                characteristic: "1 смена:",
                value: "от 16000 руб.",
              },
            ],
          },
          {
            characteristicTitle:
              "Вездеход Вылет стрелы 21 метр, грузоподъемность 7 тонн",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "от 2500 руб.",
              },
              {
                characteristic: "1 смена:",
                value: "от 20000 руб.",
              },
            ],
          },
        ],
      },
    },
  },
  {
    title: "Аренда погрузчика",
    name: "ПОГРУЗЧИК",
    previewImg: frontloaderPreview,
    types: {
      frontloader: {
        typeIMG: frontloader,
        characteristics: [
          {
            characteristicTitle: "Объем ковша 2 м3",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "от 2000 руб.",
              },
              {
                characteristic: "1 смена:",
                value: "от 16000 руб.",
              },
            ],
          },
          {
            characteristicTitle: "Объем ковша 3 м3",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "от 2300 руб.",
              },
              {
                characteristic: "1 смена:",
                value: "от 18400 руб.",
              },
            ],
          },
        ],
      },
    },
  },
  {
    title: "Аренда экскаватора",
    name: "ЭКСКАВАТОР",
    previewImg: excavatorPreview,
    types: {
      crawler: {
        typeIMG: excavatorCrawler,
        characteristics: [
          {
            characteristicTitle: "Объем ковша 1 м3",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "от 2500 руб.",
              },
              {
                characteristic: "1 смена:",
                value: "от 20000 руб.",
              },
            ],
          },
          {
            characteristicTitle: "Объем ковша 1,2 м3",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "от 2800 руб.",
              },
              {
                characteristic: "1 смена:",
                value: "от 22400 руб.",
              },
            ],
          },
          {
            characteristicTitle: "Объем ковша 1,5 м3",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "от 3000 руб.",
              },
              {
                characteristic: "1 смена:",
                value: "от 24000 руб.",
              },
            ],
          },
        ],
      },
      wheeled: {
        typeIMG: excavatorWheeled,
        characteristics: [
          {
            characteristicTitle: "Экскаватор-погрузчик",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "от 1800 руб.",
              },
              {
                characteristic: "1 смена:",
                value: "от 14400 руб.",
              },
            ],
          },
          {
            characteristicTitle: "Полноповоротный колесный экскаватор",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "от 2500 руб.",
              },
              {
                characteristic: "1 смена:",
                value: "от 20000 руб.",
              },
            ],
          },
        ],
      },
    },
  },
  {
    title: "Аренда трала",
    name: "ТРАЛ",
    previewImg: trawlPreview,
    types: {
      trawl: {
        typeIMG: trawl,
        characteristics: [
          {
            characteristicTitle: "Низкорамный раздвижной, г/п от 45 до 75 тонн",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "по согласованию",
              },
              {
                characteristic: "1 смена:",
                value: "по согласованию",
              },
            ],
          },
        ],
      },
    },
  },
];

// ДОДЕЛАТЬ ДАТУ
