"use client";

import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const StepGuide = () => {
  return (
    <Box
      px={["1rem", "2rem", "2rem", "2rem", "0"]}
      py={["1.5rem", "1.5rem", "2.5rem", "8.5rem"]}
      w={"100%"}
      backgroundColor={"#16193A"}
    >
      <Flex
        w="100%"
        maxW="1249px"
        mx={"auto"}
        justifyContent={"space-between"}
        whiteSpace={"100%"}
      >
        <Box>
          <Image src="movers/movva-step.png" alt="" />
        </Box>
        <VStack alignItems={"start"}>
          <Heading
            fontSize={"36px"}
            mb={"30px"}
            fontWeight={"bold"}
            color={"#fff"}
          >
            How it works
          </Heading>
          <VStack gap={'40px'}>
            {steps.map((step, idx) => (
              <HStack gap={"20px"} key={idx}>
                <Box>
                  <Image src={step.img} alt="" />
                </Box>
                <Text fontSize={"16px"} color={"#fff"} w={"349px"}>
                  {step.details}
                </Text>
              </HStack>
            ))}
          </VStack>
        </VStack>
      </Flex>
    </Box>
  );
};

export default StepGuide;

interface Steps {
  details: string;
  img: string;
}

const steps: Steps[] = [
  {
    details: "Download the Movva app - Complete your KYC and be verified.",
    img: "/movers/one.svg",
  },
  {
    details: "Set Your Destination - Tell Movva where you’re going.",
    img: "/movers/two.svg",
  },
  {
    details:
      "Get Matched with Senders - See available delivery requests along your route.",
    img: "/movers/three.svg",
  },
  {
    details:
      "Pick Up & Deliver - Collect the package and drop it off at the destination.",
    img: "/movers/four.svg",
  },
  {
    details:
      "Get Paid Instantly - Once the recipient confirms delivery, you receive your earnings.",
    img: "/movers/five.svg",
  },
];
