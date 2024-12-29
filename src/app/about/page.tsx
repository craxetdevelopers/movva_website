"use client";

import { Stack } from "@chakra-ui/react";
import React from "react";
import AboutHero from "./components/AboutHero";
import OurVision from "./components/OurVision";
import WhyChoose from "./components/WhyChoose";
import Waitlist from "../components/Waitlist";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <Stack bg={"#FFFFFF"} w={"100%"}>
        <AboutHero />
        <OurVision />
        <WhyChoose />
        <Waitlist />
        <Footer />
      </Stack>
    </div>
  );
};

export default About;
