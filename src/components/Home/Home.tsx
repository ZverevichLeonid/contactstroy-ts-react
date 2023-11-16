import React from "react";
import { Header } from "../Header/Header";
import { Hero } from "../Hero/Hero";
import { MainDirections } from "../MainDirections/MainDirections";
import { About } from "../About/About";
import { ChooseUs } from "../ChooseUs/ChooseUs";

export const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <MainDirections />
      <About />
      <ChooseUs />
    </>
  );
};
