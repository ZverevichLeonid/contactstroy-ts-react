import React from "react";
import "./button.scss";

interface ButtonProps {
  children: string;
  borderColor?: "yellow" | "white";
  backgroundColor?: "yellow" | "white";
  textColor?: "gray" | "white";
  active?: boolean;
  onClick?: () => any;
}
export const Button: React.FC<ButtonProps> = ({
  children,
  borderColor = "yellow",
  backgroundColor = "yellow",
  textColor = "gray",
  active = false,
  onClick,
}) => {
  if (active) {
    return (
      <button
        onClick={onClick}
        className={`button button-backgroundColor-yellow button-border-yellow`}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      onClick={onClick}
      className={`button button-border-${borderColor} button-backgroundColor-${backgroundColor} button-textColor-${textColor}`}
    >
      {children}
    </button>
  );
};
