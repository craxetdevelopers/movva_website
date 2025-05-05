'use client'

import {
  Flex,
  Heading,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const TripStatistics = () => {
  return (
    <Flex justifyContent={"space-between"} mt={'60px'} gap={'10px'}>
      <VStack
        border={"0.5px solid #E4E7EC"}
        borderRadius={"12px"}
        bg={useColorModeValue("#fff", "grey.400")}
        w={"100%"}
        maxW={{ base: "150px", lg: "298px", "2xl": "320px" }}
        p={"30px"}
        gap={"5px"}
        alignItems={"start"}
      >
        <Heading>1,245</Heading>
        <Text>Total Deliveries</Text>
      </VStack>
      <VStack
        border={"0.5px solid #E4E7EC"}
        borderRadius={"12px"}
        bg={useColorModeValue("#fff", "grey.400")}
        w={"100%"}
        maxW={{ base: "150px", lg: "298px", "2xl": "320px" }}
        p={"30px"}
        gap={"5px"}
        alignItems={"start"}
      >
        <Heading>12</Heading>
        <Text>Ongoing Deliveries</Text>
      </VStack>
      <VStack
        border={"0.5px solid #E4E7EC"}
        borderRadius={"12px"}
        bg={useColorModeValue("#fff", "grey.400")}
        w={"100%"}
        maxW={{ base: "150px", lg: "298px", "2xl": "320px" }}
        p={"30px"}
        gap={"5px"}
        alignItems={"start"}
      >
        <Heading>58</Heading>
        <Text>Cancelled Deliveries</Text>
      </VStack>
      <VStack
        border={"0.5px solid #E4E7EC"}
        borderRadius={"12px"}
        bg={useColorModeValue("#fff", "grey.400")}
        w={"100%"}
        maxW={{ base: "150px", lg: "298px", "2xl": "320px" }}
        p={"30px"}
        gap={"5px"}
        alignItems={"start"}
      >
        <Heading>261</Heading>
        <Text>Delivery Requests</Text>
      </VStack>
    </Flex>
  );
};

export default TripStatistics;
