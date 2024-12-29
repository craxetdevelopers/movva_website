"use client";

import { Box } from "@chakra-ui/react";
import React from "react";
import SenderHero from "./components/SenderHero";
import SendMovva from "./components/SendMovva";
import SendingGuide from "./components/SendingGuide";
import Galary from "../components/Galary";
import Footer from "../components/Footer";

const Senders = () => {
  return (
    <div>
      <Box bg={"#FFFFFF"} w={"100%"} >
        <SenderHero />
        <SendMovva />
        <SendingGuide />
        <Galary />
        <Footer />
      </Box>
    </div>
  );
};

export default Senders;
