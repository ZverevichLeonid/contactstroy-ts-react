import React from "react";
import { Header } from "../Header/Header";
import { Hero } from "../Hero/Hero";
import { MainDirections } from "../MainDirections/MainDirections";

export const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <MainDirections />
    </>
  );
};
