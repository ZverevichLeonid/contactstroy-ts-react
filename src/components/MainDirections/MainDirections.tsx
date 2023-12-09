import React, { useState } from "react";
import { Button } from "../Button/Button";
import { materialsData } from "../../data/materialsData";
import { specialEquipmentData } from "../../data/specialEquimpentData";
import { PreviewCard } from "../PreviewCard/PreviewCard";
import { AnimatePresence, motion } from "framer-motion";
import "./maindirections.scss";
import "./responsive.scss";
export const MainDirections: React.FC = () => {
  const [list, setList] = useState<
    typeof materialsData | typeof specialEquipmentData | []
  >([...specialEquipmentData]);
  const [active, setActive] = useState(0);

  return (
    <section className="main-directions">
      <div className="container">
        <div className="main-directions__title">
          <h2>Основные направления</h2>
        </div>
        <div className="main-directions__filter">
          <Button
            backgroundColor="white"
            active={active === 0 ? true : false}
            onClick={() => {
              setList(specialEquipmentData);
              setActive(0);
            }}
          >
            СпецТехника
          </Button>
          <Button
            backgroundColor="white"
            active={active === 1 ? true : false}
            onClick={() => {
              setList(materialsData);
              setActive(1);
            }}
          >
            Нерудные материалы
          </Button>
        </div>
        <motion.div className="main-directions__list">
          <AnimatePresence initial={false} mode="wait">
            {list.map((item) => {
              return (
                <PreviewCard
                  key={item.name}
                  img={item.previewImg}
                  name={item.name}
                  slug={item.slug}
                  id={item.id}
                  type={item.type}
                />
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
