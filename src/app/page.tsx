import React from "react";
import Hero from "./copmponents/Hero";
import getFitnessData from "@/lib/fitnessData";
import { IData } from "@/types/dataType";
import Fitness from "./copmponents/Fitness";

const HomePage =  () => {
  
  return (
    <div>
      <Hero />
      <Fitness />
      </div>
  );
};

export default HomePage;
