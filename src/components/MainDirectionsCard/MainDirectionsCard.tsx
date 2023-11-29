import React from "react";
import "./materialdirectionscard.scss";
import { Button } from "../Button/Button";
import { motion } from "framer-motion";

interface MainDirectionsCardProps {
  name: string;
  img: string;
}
export const MainDirectionsCard: React.FC<MainDirectionsCardProps> = ({
  name,
  img,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateX: -100 }}
      animate={{ opacity: 1, translateX: 0 }}
      exit={{ opacity: 0 }}
      whileHover={{ scale: 1.05 }}
      className="main-directions__card"
    >
      <h3>{name}</h3>
      <img src={img} alt={name} />
      <Button backgroundColor="white">Подробнее</Button>
    </motion.div>
  );
};
