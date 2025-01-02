'use client'

import { Box } from "@chakra-ui/react";
import React from "react";
import FaqHero from "./components/FaqHero";
import QuestionSection from "./components/QuestionSection";
import Footer from "../components/Footer";

const FAQ = () => {
  return (
    <div>
      <Box bg={"#FFFFFF"} w={"100%"}>
        <FaqHero />
        <QuestionSection />
        <Footer />
      </Box>
    </div>
  );
};

export default FAQ;
