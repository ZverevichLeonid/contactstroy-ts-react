import React, { useState } from "react";
import "./maindirections.scss";
import { Button } from "../Button/Button";
import { materialsData } from "../../data/materialsData";
import { specialEquipmentData } from "../../data/specialEquimpentData";
import { MainDirectionsCard } from "../MainDirectionsCard/MainDirectionsCard";
export const MainDirections: React.FC = () => {
  const [list, setList] = useState<
    typeof specialEquipmentData | typeof materialsData
  >(specialEquipmentData);

  return (
    <section className="main-directions">
      <div className="container">
        <h2 className="main-directions__title">Основные направления</h2>
        <div className="main-directions__filter">
          <Button onClick={() => setList(specialEquipmentData)}>
            СпецТехника
          </Button>
          <Button onClick={() => setList(materialsData)}>
            Нерудные материалы
          </Button>
        </div>
        <div className="main-directions__list">
          {list.map((item, index) => {
            return (
              <MainDirectionsCard
                key={index}
                img={item.previewImg}
                name={item.name}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
