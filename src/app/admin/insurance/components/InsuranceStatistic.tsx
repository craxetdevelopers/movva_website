"use client";

import {
  Flex,
  Heading,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const InsuranceStatistic = () => {
  return (
    <Flex justifyContent={"space-between"} mt={"60px"} gap={"10px"}>
      <VStack
        border={"0.5px solid #E4E7EC"}
        borderRadius={"12px"}
        bg={useColorModeValue("#fff", "grey.400")}
        w={"100%"}
        maxW={{ base: "150px", lg: "338px", "2xl": "390px" }}
        p={"30px"}
        gap={"5px"}
        alignItems={"start"}
      >
         <Text>Total Insurance Premium</Text>
        <Heading>N10,245,987.09</Heading>
       
      </VStack>
      <VStack
        border={"0.5px solid #E4E7EC"}
        borderRadius={"12px"}
        bg={useColorModeValue("#fff", "grey.400")}
        w={"100%"}
        maxW={{ base: "150px", lg: "338px", "2xl": "390px" }}
        p={"30px"}
        gap={"5px"}
        alignItems={"start"}
      >
        <Text>Total Claims Submitted</Text>
        <Heading>89</Heading>
        
      </VStack>
      <VStack
        border={"0.5px solid #E4E7EC"}
        borderRadius={"12px"}
        bg={useColorModeValue("#fff", "grey.400")}
        w={"100%"}
        maxW={{ base: "150px", lg: "338px", "2xl": "390px" }}
        p={"30px"}
        gap={"5px"}
        alignItems={"start"}
      >
        <Text>Total Claims Refunded</Text>
        <Heading>11</Heading>
        
      </VStack>
    </Flex>
  );
};

export default InsuranceStatistic;
