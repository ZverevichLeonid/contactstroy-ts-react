import React from "react";
import "./button.scss";

interface ButtonProps {
  children: string;
  borderColor?: "yellow" | "white";
  backgroundColor?: "yellow" | "white";
  textColor?: "gray" | "white";
}
export const Button: React.FC<ButtonProps> = ({
  children,
  borderColor = "yellow",
  backgroundColor = "yellow",
  textColor = "gray",
}) => {
  return (
    <button
      className={`button button-border-${borderColor} button-backgroundColor-${backgroundColor} button-textColor-${textColor}`}
    >
      {children}
    </button>
  );
};
