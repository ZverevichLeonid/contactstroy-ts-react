import React from "react";
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
  return (
    <div className="about-benefits__card">
      <img src={img} alt={title} />
      <p>{title}</p>
      <span>{value}</span>
      <p>{desc}</p>
    </div>
  );
};
