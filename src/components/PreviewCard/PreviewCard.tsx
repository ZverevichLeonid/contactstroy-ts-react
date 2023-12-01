import React from "react";
import "./previewcard.scss";
import { Button } from "../Button/Button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
interface MainDirectionsCardProps {
  name: string;
  img: string;
  slug: string;
  id: number;
  type: string;
}
export const PreviewCard: React.FC<MainDirectionsCardProps> = ({
  name,
  img,
  slug,
  id,
  type,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateX: -100 }}
      animate={{ opacity: 1, translateX: 0 }}
      exit={{ opacity: 0 }}
      whileHover={{ scale: 1.05 }}
      className="main-directions__card"
    >
      <Link state={{ id: id, type: type }} to={slug}>
        <h3>{name}</h3>
        <img src={img} alt={name} />
        <Button backgroundColor="white">Подробнее</Button>
      </Link>
    </motion.div>
  );
};
