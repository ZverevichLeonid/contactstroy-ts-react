import React from "react";
import heroIMG from "../../assets/images/hero/slider_1.jpg";
import { Link } from "react-router-dom";
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
              <p>
                <span>Доставка строительных материалов </span>
                <br /> по ЦФО и южному округу
              </p>
            </div>
            <div className="hero__btns">
              <Link to={"/technika"}>Подобрать технику</Link>
              <Link to={"/nerudnie_materiali"}>Рассчитать стоимость</Link>
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
