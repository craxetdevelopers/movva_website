'use client'

import { Box } from "@chakra-ui/react";
import React from "react";
import BusinessHero from "./components/BusinessHero";
import BusinessFeatures from "./components/BusinessFeatures";
import WhyBusiness from "./components/WhyBusiness";
import Footer from "../components/Footer";

const Business = () => {
  return (
    <div>
      <Box bg={"#FFFFFF"} w={"100%"}>
        <BusinessHero />
        <BusinessFeatures />
        <WhyBusiness />
        <Footer />
      </Box>
    </div>
  );
};

export default Business;
