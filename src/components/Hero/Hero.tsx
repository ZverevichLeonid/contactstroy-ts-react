import React from "react";
import { Button } from "../Button/Button";
import heroIMG from "../../assets/images/slider_1.jpg";
import "./hero.scss";

export const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__box">
          <div className="hero__text">
            <h1 className="hero__title">
              <span>Аренда</span>
              <br /> Строительной техники
            </h1>
            <div className="hero__desc">
              <span>Доставка строительных материалов </span>
              <br /> по ЦФО и южному округу
            </div>
            <div className="hero__btns">
              <Button>Подобрать технику</Button>
              <Button backgroundColor="white">Рассчитать стоимость</Button>
            </div>
          </div>
          <div className="hero__img">
            <img className="hero__pic" src={heroIMG} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
