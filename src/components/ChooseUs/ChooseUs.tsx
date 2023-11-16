import React from "react";
import "./chooseus.scss";
import ticker1 from "../../assets/images/choose-us/Eurochem_Logo_Rus_Ve.jpg";
import ticker2 from "../../assets/images/choose-us/b_rosneft.png";
import ticker3 from "../../assets/images/choose-us/kbp.png";
import ticker4 from "../../assets/images/choose-us/logo.png";
import ticker5 from "../../assets/images/choose-us/norsi.png";
import ticker6 from "../../assets/images/choose-us/polyplast.jpg";
import ticker7 from "../../assets/images/choose-us/schekinoazot.jpeg";
import ticker8 from "../../assets/images/choose-us/tulachermet.png";
import { TickerItem } from "../TickerItem/TickerItem";

export const ChooseUs: React.FC = () => {
  return (
    <section className="choose-us">
      <h3 className="choose-us__title">Нас выбирают</h3>
      <div className="ticker">
        <div className="ticker__wrapper">
          <div className="ticker__line">
            <TickerItem img={ticker1} />
            <TickerItem img={ticker2} />
            <TickerItem img={ticker3} />
            <TickerItem img={ticker4} />
            <TickerItem img={ticker5} />
            <TickerItem img={ticker6} />
            <TickerItem img={ticker7} />
            <TickerItem img={ticker8} />
          </div>
          <div className="ticker__line">
            <TickerItem img={ticker1} />
            <TickerItem img={ticker2} />
            <TickerItem img={ticker3} />
            <TickerItem img={ticker4} />
            <TickerItem img={ticker5} />
            <TickerItem img={ticker6} />
            <TickerItem img={ticker7} />
            <TickerItem img={ticker8} />
          </div>
        </div>
      </div>
    </section>
  );
};
