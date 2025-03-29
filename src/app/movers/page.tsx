"use client";

import { Box } from "@chakra-ui/react";
import React from "react";
import MoverHero from "./components/MoverHero";
import MoveYourWay from "../components/MoveYourWay";
import StepGuide from "./components/StepGuide";
import Galary from "../components/MovverGalary";
import Footer from "../components/Footer";

const Movers = () => {
  return (
    <div>
      <Box bg={"#FFFFFF"} w={"100%"}>
        <MoverHero />
        <MoveYourWay />
        <StepGuide />
        <Galary />
        <Footer />
      </Box>
    </div>
  );
};

export default Movers;
