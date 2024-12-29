"use client";

import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Galary from "./components/Galary";
import HeroSection from "./components/HeroSection";
import MoveYourWay from "./components/MoveYourWay";
import Waitlist from "./components/Waitlist";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <div>
      <Box bg={"#FFFFFF"} w={"100%"} h={"auto"}>
        <HeroSection />
        <AboutUs />
        <MoveYourWay />
        <Galary />
        <Waitlist />
        <Footer />
      </Box>
    </div>
  );
}
