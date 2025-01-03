"use client";

import Navbar from "@/app/components/Navbar";
import { Box, Image, Stack, Text, VStack } from "@chakra-ui/react";

import React from "react";


const AboutHero = () => {
  return (
    <Box
      h="auto"
      w="100%"
      backgroundImage="url('/landingpage/hero-bg.png')"
      backgroundPosition="center"
      backgroundRepeat="repeat"
    >
      <Stack>
        <Navbar />
        <Box
          px={["1rem", "2rem", "2rem", "2rem", "0"]}
          py={["1rem", "3rem", "5rem", "5rem"]}
        >
          <VStack width="100%" maxW={"1249px"} mx="auto">
            <Text
              fontSize={{ base: "32px", md: "55px", lg: "75px" }}
              color={"#fff"}
              fontWeight={"700"}
              w={{ base: "100%", lg: "900px" }}
             
              textAlign={"center"}
            >
              Revolutionizing Last Mile Delivery, One Mover at a Time.{" "}
            </Text>
            <VStack alignItems={"center"} mt={"90px"}>
              <Text color={"#fff"} fontSize={"7px"}>
                Scroll
              </Text>
              <div>
                <VStack
                  justifyContent={"center"}
                  w={"21px"}
                  h={"61px"}
                  bg={"#17D1C6"}
                  borderRadius={"100px"}
                  cursor={"pointer"}
                >
                  <Image src="landingpage/scroll.png" alt="" />
                </VStack>
              </div>
            </VStack>
          </VStack>
        </Box>
      </Stack>
    </Box>
  );
};

export default AboutHero;
