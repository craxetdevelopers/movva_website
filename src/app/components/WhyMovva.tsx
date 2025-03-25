"use client";

import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import HowSenderWorks from "./HowSenderWorks";

const WhyMovva = () => {
  return (
    <Box
      px={["1rem", "2rem", "2rem", "2rem", "0"]}
      pt={["4.5rem", "4.5rem", "4.5rem", "7.5rem"]}
      bg={"#16193A"}
      h={"auto"}
    >
      <VStack
        width="100%"
        maxW={"1249px"}
        mx="auto"
        pb={"80px"}
        alignItems={{base:'start', md: 'center'}}
        justifyContent={"space-between"}
      >
        <Heading
          color={"#fff"}
          fontSize={{ base: "24px", md: "30px", lg: "36px" }}
        >
          Why use Movva?
        </Heading>
        <VStack mt={{base: '40px', lg:"80px"}} gap={{base: '15px', lg:"30px"}} w={"100%"}>
          {whyMovva.map((why, idx) => (
            <Flex
              key={idx}
              w={{ base: "100%", lg: "784px" }}
              h={{ base: "auto", lg: "255px" }}
              bg={"#F3F3F3"}
              borderRadius={"20px"}
              justifyContent={"space-between"}
              alignItems={"center"}
              px={"2rem"}
              py={"1rem"}
            >
              <VStack alignItems={"start"}>
                <Box>
                  <Image src={why.icon} alt="" w="100%" />
                </Box>
                <Heading fontSize={{ base: "14px", md: "20px", lg: "24px" }}>
                  {why.title}
                </Heading>
                <Text
                  w={{ base: "200px", lg: "267px" }}
                  fontSize={{ base: "12px", lg: "16px" }}
                >
                  {why.details}
                </Text>
              </VStack>
              <Box>
                <Image src={why.img} alt="" w="100%" />
              </Box>
            </Flex>
          ))}
        </VStack>
        <HowSenderWorks />
      </VStack>
    </Box>
  );
};

export default WhyMovva;

interface WhyMovva {
  icon: string;
  title: string;
  details: string;
  img: string;
}

const whyMovva: WhyMovva[] = [
  {
    icon: "why-movva/cost-icon.svg",
    title: "Cost-Effective",
    details: "Pay less than traditional couriers",
    img: "why-movva/cost-img.svg",
  },
  {
    icon: "why-movva/fast-icon.svg",
    title: "Faster Matches",
    details: "Find someone nearby already heading the direction of your item",
    img: "why-movva/fast-img.svg",
  },
  {
    icon: "why-movva/wait-icon.svg",
    title: "No Waiting",
    details: "On-demand movement when you need it",
    img: "why-movva/wait-img.svg",
  },
];
