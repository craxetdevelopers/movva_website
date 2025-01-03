'use client'

import Navbar from "@/app/components/Navbar";
import { Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const BusinessHero = () => {
  return (
    <Box
      h={{base:'auto', md:"100vh"}}
      w="100%"
      backgroundImage="url('/business/business-hero.png')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize={"cover"}
    >
      <Stack>
        <Navbar />
        <Box
          px={["1rem", "2rem", "2rem", "2rem", "0"]}
          py={["1rem", "3rem", "5rem", "5rem"]}
        >
          <VStack width="100%" pb={{base:'50px', md:'0px'}} pt={"90px"} maxW={"1249px"} mx="auto">
            <Text
              fontSize={{ base: "32px", md: "55px", lg: "75px" }}
              color={"#17D1C6"}
              fontWeight={"700"}
              w={{ base: "100%", lg: "790px" }}
              textAlign={"center"}
              lineHeight={{base:'auto', lg:'80px'}}
            >
              Empower Your Business{" "}
              <span style={{ color: "#fff" }}>with Movva</span>
            </Text>
            <VStack alignItems={"center"} my={{base:'20px', md:"40px"}} w={{ base: "100%", lg: "627px" }} >
              <Text color={"#fff"} fontSize={{ base: "16px", md: "24px"}} textAlign={"center"}>
                Let Movva take care of your deliveries while you focus on
                growing your business.
              </Text>
            </VStack>
          </VStack>
        </Box>
      </Stack>
    </Box>
  );
};

export default BusinessHero;
