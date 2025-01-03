'use client'

import Navbar from "@/app/components/Navbar";
import { Box, Flex, Image, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const FaqHero = () => {
  return (
    <Box h="auto" w="100%" backgroundColor={"#17D1C6"}>
      <Stack>
        <Navbar />
        <Box
          px={["1rem", "2rem", "2rem", "2rem", "0"]}
          py={["1rem", "3rem", "5rem", "5rem"]}
        >
          <Stack width="100%" maxW={"1249px"} mx="auto" color={"#22244E"}>
            <Flex justifyContent={"space-between"} pos={"relative"} alignItems={'center'}>
              <VStack py={"30px"} textAlign={{base:'center', lg:'start'}} alignItems={{base:'center', lg:"start"}} gap={"30px"}>
                <Text
                  w={{ base: "100%", lg: "795px" }}
                  fontWeight={"700"}
                  fontSize={{ base: "38px", md: "60px", lg: "70px" }}
                  lineHeight={{base:'auto', lg:'80px'}}
                >
                  Frequently Asked Questions (FAQs)
                </Text>
                <Text fontSize={{ base: "16px", md: "24px"}}>Got Questions? We’ve Got Answers.</Text>
              </VStack>
              <Box display={{ base: "none", lg: "block" }}>
                <Image src="faq/faq-img.png" alt="" w={{base:'100%', md:'525px'}}/>
              </Box>
            </Flex>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default FaqHero;
