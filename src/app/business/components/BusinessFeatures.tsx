'use client'


import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const BusinessFeatures = () => {
  return (
    <Box
      px={["1rem", "2rem", "2rem", "2rem", "0"]}
      py={["1rem", "2rem", "6.5rem", "6.5rem"]}
      color={"#fff"}
      
    >
      <Flex
        width="100%"
        maxW={"1249px"}
        mx="auto"
        justifyContent={"space-between"}
        py={"40px"}
        alignItems={"center"}
        direction={{base:'column', lg:'row'}}
      >
        <Box display={{ base: "none", lg: "block" }}>
          <Image src="business/business-img.png" alt="" />
        </Box>
        <VStack color={"#14141A"} alignItems={"start"} w={{base:'100%', lg:"600px"}}>
          <Heading w={{ base: "100%", lg: "499px" }}  fontSize={{ base: "28px", lg: "40px" }} fontWeight={"700"} mb={"40px"}>
            Key Features for Businesses:
          </Heading>
          <VStack alignItems={"start"} gap={"25px"}>
            {feature.map((data, idx) => (
              <Flex gap={"20px"} key={idx}>
                <Box>
                  <Image src="business/key-icon.png" alt="" />
                </Box>
                <Text fontSize={{ base: "16px", md: "24px"}}>
                  {data.details}
                </Text>
              </Flex>
            ))}
          </VStack>
        </VStack>
      </Flex>
    </Box>
  );
};

export default BusinessFeatures;

interface Feature {
  details: string;
}

const feature: Feature[] = [
  {
    details:
      "Affordable Delivery Rates: Reduce overhead with our competitive pricing.",
  },
  {
    details:
      "Reliable Service: Real-time tracking and trusted Movers ensure your goods are delivered safely.",
  },
  {
    details:
      "Flexible Options: Schedule one-time deliveries or set up recurring pickups.",
  },
  {
    details:
      "Custom Solutions: Tailored services for high-volume or specialized needs.",
  },
];
