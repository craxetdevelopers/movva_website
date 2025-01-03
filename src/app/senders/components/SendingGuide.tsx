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
      <Box
        left={{ base: "50px", md: "140px", lg: "200px" }}
        top={"70px"}
        pos={"absolute"}
      >
        <Image
          src="/movers/step-bg.png"
          alt=""
          w={{ base: "300px", md: "504px", lg: "100%" }}
        />
      </Box>
      <Box
        right={"0px"}
        bottom={"0px"}
        pos={"absolute"}
        display={{ base: "none", xl: "block" }}
      >
        <Image src="/senders/send-arrow.png" alt="" />
      </Box>

      <Box w="100%" maxW="1249px" mx={"auto"}>
        <Box
          py={["1rem", "2rem", "8.5rem", "8.5rem"]}
          px={["1rem", "2rem", "2rem", "2rem", "0"]}
          zIndex={"100000"}
        >
          <VStack alignItems={{ base: "center", lg: "start" }}>
            <VStack
              textAlign={{ base: "center", lg: "start" }}
              pt={{ base: "50px", md: "0px" }}
            >
              <Heading
                w={{ base: "100%", md: "573px" }}
                fontSize={{ base: "38px", md: "45px", lg: "57.65px" }}
                color={"#FFFFFF"}
                fontWeight={"700"}
              >
                Step-by-Step Guide to sending
              </Heading>
            </VStack>
            <Flex
              mt={{ base: "50px", lg: "120px" }}
              w={"100%"}
              h={"auto"}
              flexWrap={"wrap"}
              gap="40px"
              justifyContent={{ base: "center", lg: "start" }}
            >
              <VStack
                w={{ base: "100%", sm: "249px" }}
                h={{ base: "100%", sm: "287.85" }}
                border={"1px solid #17D1C6"}
                bg={"#22244E"}
                borderRadius={"15.89px"}
                alignItems={"start"}
                p={"20px"}
                gap={"20px"}
                backgroundColor={"#22244E"}
              >
                <Box>
                  <Image src="movers/one.png" alt="" />
                </Box>
                <Heading fontSize={"24px"} color={"#fff"} fontWeight={"600"}>
                  Book a Delivery (Movva):
                </Heading>
                <Text fontSize={"16px"} color={"#fff"} fontWeight={"400"}>
                  Enter delivery details, pick up and drop off address.
                </Text>
              </VStack>
              <VStack
                w={{ base: "100%", sm: "249px" }}
                h={{ base: "100%", sm: "287.85" }}
                border={"1px solid #17D1C6"}
                bg={"transparent"}
                borderRadius={"15.89px"}
                alignItems={"start"}
                p={"20px"}
                gap={"20px"}
                backgroundColor={"#22244E"}
              >
                <Box>
                  <Image src="movers/two.png" alt="" />
                </Box>
                <Heading fontSize={"24px"} color={"#fff"} fontWeight={"600"}>
                  Get Matched:
                </Heading>
                <Text fontSize={"16px"} color={"#fff"} fontWeight={"400"}>
                  A Movva nearby picks up your package.
                </Text>
              </VStack>
              <VStack
                w={{ base: "100%", sm: "249px" }}
                h={{ base: "100%", sm: "287.85" }}
                border={"1px solid #17D1C6"}
                bg={"#22244E"}
                borderRadius={"15.89px"}
                alignItems={"start"}
                p={"20px"}
                gap={"20px"}
                backgroundColor={"#22244E"}
              >
                <Box>
                  <Image src="movers/three.png" alt="" />
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
              my={{base:'30px', lg:"70px"}} 
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
