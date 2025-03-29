"use client";

import {
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
// import { useRouter } from "next/navigation";
import React from "react";

const MotionVStack = motion(VStack);

const MoveYourWay = () => {
  // const router = useRouter();
  return (
    <Box
      px={["1rem", "2rem", "2rem", "2rem", "0"]}
      py={["1rem", "2rem", "2.5rem", "2.5rem"]}
    >
      <VStack width="100%" maxW={"1249px"} mx="auto" pb={"80px"}>
        <Heading
          fontSize={{ base: "24px", md: "30px", lg: "40px" }}
          color={"#000"}
        >
          Why Move with Movva
        </Heading>
        <Flex
          mb={"60px"}
          w={"100%"}
          mt={"50px"}
          justifyContent={{ base: "center", xl: "space-between" }}
          flexWrap={"wrap"}
          gap={{ base: "40px" }}
        >
          {yourWay.map((data, idx) => (
            <MotionVStack
              h={{ base: "100%", md: "448px" }}
              w={{ base: "100%", md: "280px" }}
              bg={data.bg}
              borderRadius={"36px"}
              p={"30px"}
              alignItems={"start"}
              key={idx}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.99 }}
              transition={{ duration: 0.3 }}
            >
              <Stack h={{ base: "auto", md: "250px" }}>
                <Heading
                  color={data.titleColor}
                  fontSize={{ base: "20px", lg: "32px" }}
                  fontWeight={'bold'}
              
                >
                  {data.title}
                </Heading>
                <Text
                  pt={"15px"}
                  fontSize={{ base: "14px", lg: "16px" }}
                  color={data.color}
                >
                  {data.details}
                </Text>
              </Stack>
              <Box pt={{ base: "10px", lg: "30px" }}>
                <Image src={data.img} alt="" w={{base: '100px', lg:'100%'}}/>
              </Box>
            </MotionVStack>
          ))}
        </Flex>
      </VStack>
    </Box>
  );
};

export default MoveYourWay;

interface YourWay {
  title: string;
  details: string;
  img: string;
  titleColor: string;
  color: string;
  bg: string;
}

const yourWay: YourWay[] = [
  
  {
    title: "Earn on the Go",
    details: "Make extra money just by helping people move items while you commute.",
    img: "/movers/earn-icon.svg",
    titleColor: "#FFFFFF",
    color: "#EBFBFF",
    bg: "#3366FF",
  },
  {
    title: "No Extra Work",
    details: "You’re already heading there just carry a package alongside",
    img: "/movers/extra-icon.svg",
    titleColor: "#22244E",
    color: "#22244E",
    bg: "#dbe9f4",
  },
  {
    title: "Flexible & Hassle-free",
    details:
      "Choose when and what to move—no pressure, no fixed schedule.",
    img: "/movers/free-icon.svg",
    titleColor: "#FFFFFF",
    color: "#EBFBFF",
    bg: "#22244E",
  },
  {
    title: "Safe & Secure",
    details:
      "Movva ensures  senders are verified and packages are legit",
    img: "/movers/lock-icon.svg",
    titleColor: "#22244E",
    color: "#22244E",
    bg: "#FF7D6A",
  },
];
