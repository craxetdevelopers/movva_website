"use client";

import Navbar from "@/app/components/Navbar";
import {
  Box,
  Flex,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const MoverHero = () => {
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
          <Stack width="100%" maxW={"1249px"} mx="auto">
            <Flex justifyContent={"space-between"}>
              <VStack py={"30px"} alignItems={"start"} gap={"50px"} >
                <Text
                  w={{ base: "100%", md: "612px" }}
                  color={"#fff"}
                  fontWeight={"700"}
                  fontSize={{ base: "38px", md: "60px", lg: "70px" }}
                >
                  Turn Your Daily Movement into Income.
                </Text>
              </VStack>
              <Box>
                <Image src="movers/movers-img.png" alt="" />
              </Box>
            </Flex>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default MoverHero;
