import trashIMG from "../assets/images/uslugi/musor.png";
import gruntIMG from "../assets/images/uslugi/grunt.jpg";
import bulkIMG from "../assets/images/uslugi/bulk_materials.png";
import snowIMG from "../assets/images/uslugi/sneg_1.jpg";

export interface IUslugiData {
  id: string;
  type: "uslugi";
  title: string;
  name: string;
  previewImg: string;
  slug: string;
  characteristics: ICharacteristics[];
}
interface ICharacteristics {
  characteristic: string;
  value: string;
}
export const uslugiData: IUslugiData[] = [
  {
    id: "vyivoz_musora",
    type: "uslugi",
    title: "Вывоз строительного мусора",
    name: "Вывоз строительного мусора",
    previewImg: trashIMG,
    slug: "/uslugi/vyivoz_musora",
    characteristics: [
      {
        characteristic: "Стоимость",
        value: "по согласованию",
      },
    ],
  },
  {
    id: "vyivoz_grunta",
    type: "uslugi",
    title: "Вывоз грунта",
    name: "Вывоз грунта",
    previewImg: gruntIMG,
    slug: "/uslugi/vyivoz_grunta",
    characteristics: [
      {
        characteristic: "Стоимость",
        value: "по согласованию",
      },
    ],
  },
  {
    id: "sipuchie_materiali",
    type: "uslugi",
    title: "Перевозка сыпучих материалов",
    name: "Перевозка сыпучих материалов",
    previewImg: bulkIMG,
    slug: "/uslugi/sipuchie_materiali",
    characteristics: [
      {
        characteristic: "Стоимость",
        value: "по согласованию",
      },
    ],
  },
  {
    id: "uborka_snega",
    type: "uslugi",
    title: "Уборка снега",
    name: "Уборка снега",
    previewImg: snowIMG,
    slug: "/uslugi/uborka_snega",
    characteristics: [
      {
        characteristic: "Стоимость",
        value: "по согласованию",
      },
    ],
  },
];
