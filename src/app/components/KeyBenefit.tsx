"use client";

import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

const MotionBox = motion(VStack);

const KeyBenefit = () => {
  return (
    <Box
      px={["1rem", "2rem", "2rem", "2rem", "0"]}
      pt={["4.5rem", "4.5rem", "4.5rem", "5.5rem"]}
    >
      <VStack
        width="100%"
        maxW={"1249px"}
        mx="auto"
        pb={"80px"}
        alignItems={"start"}
      >
        <Heading
          fontSize={{ base: "24px", md: "30px", lg: "36px" }}
          color={"#000"}
          fontWeight={"semibold"}
        >
          Key benefits
        </Heading>
        <Flex
          mt={"30px"}
          justifyContent={"space-between"}
          w={"100%"}
          flexWrap={"wrap"}
          gap={"20px"}
        >
          {keyBenefit.map((benefit, idx) => (
            <MotionBox
              key={idx}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              w={{ base: "100%", md: "380px" }}
              h={{ base: "auto", md: "160px" }}
              bg={"#F3F3F3"}
              borderRadius={"8px"}
              alignItems={"start"}
              p={"1.3rem"}
              justifyContent={"center"}
            >
              <Flex
                justifyContent={"space-between"}
                w={"100%"}
                alignItems={"center"}
              >
                <VStack w={"100%"} alignItems={"start"} gap={"10px"}>
                  <Text fontWeight={"semibold"} color={'#000'}>{benefit.title}</Text>
                  <Text fontSize={"12px"} color={'#000'} fontWeight={"normal"} w={"210px"}>
                    {benefit.details}
                  </Text>
                  <Button color={'#000'} bg={"#fff"} borderRadius={"100px"}>
                    Get App
                  </Button>
                </VStack>
                <Box>
                  <Image
                    src={benefit.img}
                    alt=""
                    w={{ base: "100%", lg: "300px" }}
                  />
                </Box>
              </Flex>
            </MotionBox>
          ))}
        </Flex>
      </VStack>
    </Box>
  );
};

export default KeyBenefit;

interface KeyBenefit {
  title: string;
  details: string;
  img: string;
}

const keyBenefit: KeyBenefit[] = [
  {
    title: "Earn",
    details: "Earn extra money as you move—no bike or car required",
    img: "/key-benefit/money-icon.svg",
  },
  {
    title: "Fast",
    details: "Receive instant payouts after successful trips.",
    img: "/key-benefit/person-icon.svg",
  },
  {
    title: "Flexible",
    details: "No fixed schedule—pick up orders whenever you need to move",
    img: "/key-benefit/calender-icon.svg",
  },
];
