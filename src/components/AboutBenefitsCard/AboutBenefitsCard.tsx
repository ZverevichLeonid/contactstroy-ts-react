import React from "react";
import { Variants, motion } from "framer-motion";
import "./aboutbenefitscars.scss";

interface AboutBenefitsCardProps {
  img: string;
  title: string;
  value: string;
  desc: string;
}

export const AboutBenefitsCard: React.FC<AboutBenefitsCardProps> = ({
  img,
  title,
  value,
  desc,
}) => {
  const cardVariants: Variants = {
    hidden: {
      y: -150,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 1,
      },
    },
  };
  return (
    <motion.div variants={cardVariants} className="about-benefits__card">
      <img src={img} alt={title} />
      <p>{title}</p>
      <span>{value}</span>
      <p>{desc}</p>
    </motion.div>
  );
};
