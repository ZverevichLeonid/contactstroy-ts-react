import React, { useState } from "react";
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
  const [width, setWidth] = useState(window.innerWidth);
  const cardVariantsDesctop: Variants = {
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
  const cardVariantsMobile: Variants = {
    hidden: {
      x: -150,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 1,
      },
    },
  };

  return (
    <motion.div
      variants={width > 767 ? cardVariantsDesctop : cardVariantsMobile}
      className="about-benefits__card"
    >
      <img src={img} alt={title} />
      <p>{title}</p>
      <span>{value}</span>
      <p>{desc}</p>
    </motion.div>
  );
};
