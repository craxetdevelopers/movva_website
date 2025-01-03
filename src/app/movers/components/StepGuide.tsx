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

const StepGuide = () => {
  return (
    <Box w={"100%"} h="auto" backgroundColor={"#22244E"} pos={"relative"}>
      <Box
        left={{ base: "50px", md: "140px", lg: "200px" }}
        top={"70"}
        pos={"absolute"}
      >
        <Image src="/movers/step-bg.png" alt="" w={{base:'300px', md:'504px', lg:'100%'}}/>
      </Box>
      <Box w="100%" maxW="1249px" mx={"auto"}>
        <Box
          py={["2.5rem", "3.5rem", "4.5rem", "8.5rem"]}
          px={["1rem", "2rem", "2rem", "2rem", "0"]}
        >
          <VStack alignItems={{ base: "center", lg: "start" }}>
            <VStack textAlign={{ base: "center", lg: "start" }} pt={{base:'50px', md:'0px'}}>
              <Heading
                fontSize={{ base: "38px", md: "45px", lg: "57.65px" }}
                color={"#FFFFFF"}
                fontWeight={"700"}
              >
                Step-by-Step Guide
              </Heading>
            </VStack>
            <Flex
              mt={{base:'50px', lg:"120px"}}
              w={"100%"}
              h={{ base: "auto", "2xl": "500px" }}
              justifyContent={{ base: "center", "2xl": "space-between" }}
              flexWrap={"wrap"}
              gap={{ base: "40px", "2xl": "0px" }}
            >
              <VStack justifyContent={"start"} alignItems={"start"} h={"100%"}>
                <VStack
                  w={{base:'100%', sm:"249px"}}
                  h={{base:'100%', sm:"287.85"}}
                
                  border={"1px solid #17D1C6"}
                  bg={"transparent"}
                  borderRadius={"15.89px"}
                  alignItems={"start"}
                  p={"20px"}
                  gap={"30px"}
                >
                  <Box>
                    <Image src="movers/one.png" alt="" />
                  </Box>
                  <Text fontSize={{base:'18px', lg:"24px"}} color={"#fff"} fontWeight={"400"}>
                    {`To create Africa's most inclusive and efficient logistics
                    platform.`}
                  </Text>
                </VStack>
              </VStack>
              <VStack justifyContent={"end"} alignItems={"start"} h={"100%"}>
                <VStack
                  w={{base:'100%', sm:"249px"}}
                  h={{base:'100%', sm:"287.85"}}
                  border={"1px solid #17D1C6"}
                  bg={"transparent"}
                  borderRadius={"15.89px"}
                  alignItems={"start"}
                  p={"20px"}
                  gap={"30px"}
                >
                  <Box>
                    <Image src="movers/two.png" alt="" />
                  </Box>
                  <Text fontSize={{base:'18px', lg:"24px"}} color={"#fff"} fontWeight={"400"}>
                    Verify: Complete our quick KYC process for security.
                  </Text>
                </VStack>
              </VStack>
              <VStack justifyContent={"start"} alignItems={"start"} h={"100%"}>
                <VStack
                   w={{base:'100%', sm:"249px"}}
                   h={{base:'100%', sm:"287.85"}}
                  border={"1px solid #17D1C6"}
                  bg={"transparent"}
                  borderRadius={"15.89px"}
                  alignItems={"start"}
                  p={"20px"}
                  gap={"30px"}
                >
                  <Box>
                    <Image src="movers/three.png" alt="" />
                  </Box>
                  <Text fontSize={{base:'18px', lg:"24px"}} color={"#fff"} fontWeight={"400"}>
                    Pick Up & Deliver: Get matched with packages in your area.
                  </Text>
                </VStack>
              </VStack>
              <VStack justifyContent={"end"} alignItems={"start"} h={"100%"}>
                <VStack
                   w={{base:'100%', sm:"249px"}}
                   h={{base:'100%', sm:"287.85"}}
                  border={"1px solid #17D1C6"}
                  bg={"transparent"}
                  borderRadius={"15.89px"}
                  alignItems={"start"}
                  p={"20px"}
                  gap={"30px"}
                >
                  <Box>
                    <Image src="movers/four.png" alt="" />
                  </Box>
                  <Text fontSize={{base:'18px', lg:"24px"}} color={"#fff"} fontWeight={"400"}>
                    Earn Instantly: Payments are credited after successful
                    delivery.
                  </Text>
                </VStack>
              </VStack>
            </Flex>
            <VStack mt={{base:'30px', lg:"70px"}} alignItems={"center"} w={"100%"}>
              <Button
                p={"30px 25px"}
                bg={"#17D1C6"}
                borderRadius={"100px"}
                color={"#22244E"}
              >
                Sign Up to Movva
              </Button>
            </VStack>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};

export default StepGuide;
