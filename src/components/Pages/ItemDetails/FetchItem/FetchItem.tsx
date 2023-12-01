import React, { useEffect, useState } from "react";
import { materialsData } from "../../../../data/materialsData";
import { specialEquipmentData } from "../../../../data/specialEquimpentData";
import { useLocation } from "react-router-dom";
import { IMaterialData } from "../../../../data/materialsData";
import { ISpecialEquipmentData } from "../../../../data/specialEquimpentData";
import { ItemInfo } from "../ItemInfo/ItemInfo";
import { IUslugiData } from "../../../../data/uslugiData";
import { uslugiData } from "../../../../data/uslugiData";
export const FetchItem: React.FC = () => {
  let { state } = useLocation();
  const [item, setItem] = useState<
    IMaterialData | ISpecialEquipmentData | IUslugiData
  >();

  useEffect(() => {
    if (state.type === "material") {
      const tempItem = materialsData.find((item) => item.id === state.id);
      setItem(tempItem);
    }
    if (state.type === "techniks") {
      const tempItem = specialEquipmentData.find(
        (item) => item.id === state.id
      );
      setItem(tempItem);
    }
    if (state.type === "uslugi") {
      const tempItem = uslugiData.find((item) => item.id === state.id);
      setItem(tempItem);
    }
  }, [state]);
  return item && <ItemInfo item={item} />;
};
