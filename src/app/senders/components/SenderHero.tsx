"use client";

import Navbar from "@/app/components/Navbar";
import { Box, Flex, Image, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const SenderHero = () => {
  return (
    <Box
      h="auto"
      w="100%"
      backgroundImage="url('/senders/sender-hero.png')"
      backgroundPosition="center"
      backgroundRepeat="none"
      backgroundSize={"cover"}
    >
      <Stack>
        <Navbar />
        <Box
          px={["1rem", "2rem", "2rem", "2rem", "0"]}
          py={["1rem", "3rem", "5rem", "5rem"]}
        >
          <Stack width="100%" maxW={"1249px"} mx="auto">
            <Flex alignItems={'center'} justifyContent={{base:'center', lg:"space-between"}} direction={{base: 'column-reverse', lg:'row'}} pos={"relative"}>
              <VStack py={"30px"} alignItems={{base:'center', lg:"start"}} gap={"50px"}>
                <Text
                  w={{ base: "100%", md: "600px" }}
                  color={"#fff"}
                  fontWeight={"700"}
                  fontSize={{ base: "38px", md: "60px", lg: "70px" }}
                  textAlign={{base:'center', lg:"start"}}
                >
                  Delivering Peace of Mind.
                </Text>
              </VStack>
              <Box>
                <Image src="senders/sender-img.png" alt="" display={{ base: "none", lg: "block" }}  w={{base:'100%', md:'525px'}}/>
                <Box pos={{base:'relative', lg:"absolute"}} top={{base:'0px', lg:"220px"}} right={{base:'0px', lg:"250px"}}>
                  <Image src="senders/phone-img.png" alt="" />
                </Box>
              </Box>
            </Flex>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default SenderHero;
