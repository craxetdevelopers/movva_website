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

const SendingGuide = () => {
  return (
    <Box w={"100%"} h="auto" backgroundColor={"#22244E"} pos={"relative"}>
      <Box left={"200px"} top={"70px"} pos={"absolute"}>
        <Image src="/movers/step-bg.png" />
      </Box>
      <Box right={"0px"} bottom={"0px"} pos={"absolute"}>
        <Image src="/senders/send-arrow.png" />
      </Box>

      <Box w="100%" px={"200px"}>
        <Box
          py={["1rem", "2rem", "8.5rem", "8.5rem"]}
          px={["1rem", "2rem", "2rem", "2rem", "0"]}
          zIndex={"1000"}
        >
          <VStack alignItems={"start"} width="100%" maxW="1249px">
            <Heading w={'573px'} fontSize={"57.65px"} color={"#FFFFFF"} fontWeight={"700"}>
              Step-by-Step Guide to sending
            </Heading>
            <Flex mt={"120px"} w={"100%"} h={"auto"} gap={"60px"}>
              <VStack
                w={"249px"}
                h={"287.85"}
                border={"1px solid #17D1C6"}
                bg={"transparent"}
                borderRadius={"15.89px"}
                alignItems={"start"}
                p={"20px"}
                gap={"20px"}
                backgroundColor={"#22244E"}
              >
                <Box>
                  <Image src="movers/one.png" />
                </Box>
                <Heading fontSize={"24px"} color={"#fff"} fontWeight={"600"}>
                  Book a Delivery (Movva):
                </Heading>
                <Text fontSize={"16px"} color={"#fff"} fontWeight={"400"}>
                  Enter delivery details, pick up and drop off address.
                </Text>
              </VStack>
              <VStack
                w={"249px"}
                h={"287.85"}
                border={"1px solid #17D1C6"}
                bg={"transparent"}
                borderRadius={"15.89px"}
                alignItems={"start"}
                p={"20px"}
                gap={"20px"}
                backgroundColor={"#22244E"}
              >
                <Box>
                  <Image src="movers/two.png" />
                </Box>
                <Heading fontSize={"24px"} color={"#fff"} fontWeight={"600"}>
                  Get Matched:
                </Heading>
                <Text fontSize={"16px"} color={"#fff"} fontWeight={"400"}>
                  A Movva nearby picks up your package.
                </Text>
              </VStack>
              <VStack
                w={"249px"}
                h={"287.85"}
                border={"1px solid #17D1C6"}
                bg={"transparent"}
                borderRadius={"15.89px"}
                alignItems={"start"}
                p={"20px"}
                gap={"20px"}
                backgroundColor={"#22244E"}
              >
                <Box>
                  <Image src="movers/three.png" />
                </Box>
                <Heading fontSize={"24px"} color={"#fff"} fontWeight={"600"}>
                  Track & Relax:
                </Heading>
                <Text fontSize={"16px"} color={"#fff"} fontWeight={"400"}>
                  Real-time tracking until it’s delivered.
                </Text>
              </VStack>
            </Flex>
            <Button
              p={"30px 25px"}
              bg={"#17D1C6"}
              borderRadius={"100px"}
              color={"#22244E"}
              mt={"70px"}
            >
              {" "}
              Book a Delivery Now
            </Button>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};

export default SendingGuide;
