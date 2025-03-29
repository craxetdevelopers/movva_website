"use client";

import { Box } from "@chakra-ui/react";
import React from "react";
import SenderHero from "./components/SenderHero";
import SendMovva from "./components/SendMovva";
import SendingGuide from "./components/SendingGuide";
import Footer from "../components/Footer";
import SenderGallary from "./components/SenderGallary";

const Senders = () => {
  return (
    <div>
      <Box  w={"100%"} bg={'#fff'}>
        <SenderHero />
        <SendMovva />
        <SendingGuide />
        <SenderGallary />
        <Footer />
      </Box>
    </div>
  );
};

export default Senders;
