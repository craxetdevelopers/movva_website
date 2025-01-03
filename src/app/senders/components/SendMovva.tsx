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
import React from "react";

const SendMovva = () => {
  return (
    <Box
      h={{base:'auto', md:"100vh"}}
      w={"100%"}
      backgroundImage="url('/senders/whysend-img.png')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      border={"1px solid black"}
    >
      <Stack>
        <Box
          px={["1rem", "2rem", "2rem", "2rem", "0"]}
          py={["1rem", "3rem", "5rem", "5rem"]}
        >
          <VStack
            color={"#14141A"}
            py={"60px"}
            width="100%"
            maxW={"1249px"}
            mx="auto"
            alignItems={"start"}
          >
            <Heading fontSize={{ base: "38px", md: "45px", lg: "60px" }} fontWeight={"700"}>
              Why Send with Movva?
            </Heading>
            <VStack alignItems={"start"} pt={"50px"} gap={"50px"}>
              {whySend.map((data, idx) => (
                <Flex gap={"20px"} justifyContent={"center"} key={idx}>
                  <Box>
                    <Image src="senders/check-circle.png" alt="" />
                  </Box>
                  <VStack alignItems={"start"}>
                    <Heading fontSize={{ base: "24px", lg: "32px" }} fontWeight={"600"}>
                      {data.title}
                    </Heading>
                    <Text fontSize={{ base: "18px", lg: "25px"}} fontWeight={"400"}>
                      {data.details}
                    </Text>
                  </VStack>
                </Flex>
              ))}
            </VStack>
          </VStack>
        </Box>
      </Stack>
    </Box>
  );
};

export default SendMovva;

interface WhySend {
  title: string;
  details: string;
}

const whySend: WhySend[] = [
  {
    title: "Convenient:",
    details: "Immediate matching with local Movers.",
  },
  {
    title: "Fast:",
    details: "Reduce delay time to deliver goods.",
  },
  {
    title: "Affordable Pricing:",
    details: "Save on delivery costs with our community-driven model.",
  },
  {
    title: "Reliable Tracking:",
    details: "Real-time updates from pick-up to drop-off.",
  },
];
