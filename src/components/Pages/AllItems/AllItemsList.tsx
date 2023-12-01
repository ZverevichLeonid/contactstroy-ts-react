import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { PreviewCard } from "../../PreviewCard/PreviewCard";
import { specialEquipmentData } from "../../../data/specialEquimpentData";
import { materialsData } from "../../../data/materialsData";
import { uslugiData } from "../../../data/uslugiData";
import { ISpecialEquipmentData } from "../../../data/specialEquimpentData";
import { IMaterialData } from "../../../data/materialsData";
import { IUslugiData } from "../../../data/uslugiData";
import "./allitemslist.scss";
export const AllItemsList: React.FC = () => {
  let location = useLocation();
  const [dataCard, setDataCard] = useState<
    ISpecialEquipmentData[] | IMaterialData[] | IUslugiData[]
  >();
  useEffect(() => {
    if (location.pathname === "/technika") {
      return setDataCard(specialEquipmentData);
    }
    if (location.pathname === "/nerudnie_materiali") {
      return setDataCard(materialsData);
    }
    if (location.pathname === "/uslugi") {
      return setDataCard(uslugiData);
    }
  }, [location]);
  const SetTitle: React.FC = () => {
    if (location.pathname === "/technika") {
      return <h1>Спецтехника</h1>;
    }
    if (location.pathname === "/nerudnie_materiali") {
      return <h1>Нерудные материалы</h1>;
    }
    if (location.pathname === "/uslugi") {
      return <h1>Услуги</h1>;
    }
  };
  return (
    <section className="items">
      <div className="container">
        <div className="items__title">
          <SetTitle />
        </div>
        {location.pathname === "/nerudnie_materiali" ? (
          <div className="items__desc">
            <p>
              ДОСТАВКА НЕРУДНЫХ МАТЕРИАЛОВ ОСУЩЕСТВЛЯЕТСЯ ПРИ ЗАКАЗЕ ОТ 25 М3
            </p>
          </div>
        ) : null}
        <div className="items__list">
          {dataCard &&
            dataCard.map((technik) => {
              return (
                <PreviewCard
                  key={technik.name}
                  img={technik.previewImg}
                  name={technik.name}
                  id={technik.id}
                  slug={technik.slug}
                  type={technik.type}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
};
