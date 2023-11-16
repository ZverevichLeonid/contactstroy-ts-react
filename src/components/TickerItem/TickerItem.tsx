import React from "react";
import "./tickeritem.scss";

interface TickerItemProps {
  img: string;
}
export const TickerItem: React.FC<TickerItemProps> = ({ img }) => {
  return (
    <div className="ticker__item">
      <img src={img} alt="" />
    </div>
  );
};
