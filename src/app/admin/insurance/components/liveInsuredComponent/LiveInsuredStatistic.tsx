"use client";

import {
  Flex,
  Heading,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const LiveInsuredStatistic = () => {
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
         <Text>Premium Paid</Text>
        <Heading>N945,987</Heading>
       
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
        <Text>Total Item Value</Text>
        <Heading>N12,089,032</Heading>
        
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
        <Text>Active Insured Deliveries</Text>
        <Heading>195</Heading>
        
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
        <Text>Flagged Deliveries</Text>
        <Heading>6</Heading>
        
      </VStack>
    </Flex>
  );
};

export default LiveInsuredStatistic;
