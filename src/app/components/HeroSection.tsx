'use client'

import { Box, Button, Flex, Image, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
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
            <Text
              w={{ base: "100%", md: "776px" }}
              color={"#fff"}
              fontWeight={"700"}
              fontSize={{ base: "38px", md: "60px", lg: "81px" }}
            >
              Delivery, Simplified for Everyone
            </Text>
            <Flex justifyContent={'space-between'}>
              <VStack py={'30px'} alignItems={'start'} gap={'50px'}>
                <Text color={'#FFFFFF'} fontWeight={'400'} w={'527px'} fontSize={'21px'}>
                  we believe everyone deserves an opportunity to earn and every
                  package deserves to arrive on time.
                </Text>
                <Button py={'25px'} bg={'#17D1C6'} border={'1px solid #2057C2'}>Learn more</Button>
              </VStack>
              <Box>
                <Image src="landingpage/hero-img1.png" alt=""/>
              </Box>
            </Flex>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default HeroSection;
