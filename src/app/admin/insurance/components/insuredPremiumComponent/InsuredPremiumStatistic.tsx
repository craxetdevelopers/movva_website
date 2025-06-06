"use client";

import { Flex, Heading, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import React from "react";

const InsuredPremiumStatistic = () => {
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
        <Text>Total Items Insured</Text>
        <Heading>245</Heading>
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
        <Text>Total Premiums Paid</Text>
        <Heading>N10,189,500</Heading>
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
        <Text>Total Delivery Value</Text>
        <Heading>N519,415,000</Heading>
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
        <Text>Avg. Premium Rate</Text>
        <Heading>0.7%</Heading>
      </VStack>
    </Flex>
  );
};

export default InsuredPremiumStatistic;
