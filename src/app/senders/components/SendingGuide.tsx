"use client";

import { Box, Flex, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const SendingGuide = () => {
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
          <Image src="senders/sender-step.png" alt="" />
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
          <VStack gap={"40px"}>
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

export default SendingGuide;

interface Steps {
  details: string;
  img: string;
}

const steps: Steps[] = [
  {
    details: "Enter Pickup & Destination - Tell us where your package needs to go.",
    img: "/movers/one.svg",
  },
  {
    details: "Get Matched Instantly  - Movva connects you with a Movva already heading that way.",
    img: "/movers/two.svg",
  },
  {
    details:
      "Hand over your Package - Meet your Movva, hand over the item, and track the journey.",
    img: "/movers/three.svg",
  },
  {
    details:
      "Delivery confirmed - Once received, the recipient confirms the delivery, and the Movva gets paid .",
    img: "/movers/four.svg",
  },
  
];
