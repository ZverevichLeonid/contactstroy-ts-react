import React from "react";
import "./materialdirectionscard.scss";
import { Button } from "../Button/Button";
interface MainDirectionsCardProps {
  name: string;
  img: string;
}
export const MainDirectionsCard: React.FC<MainDirectionsCardProps> = ({
  name,
  img,
}) => {
  return (
    <div className="main-directions__card">
      <h3>{name}</h3>
      <img src={img} alt="" />
      <Button backgroundColor="white">Подробнее</Button>
    </div>
  );
};
