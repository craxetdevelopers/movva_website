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
        left={"200px"}
        top={"70"}
        pos={"absolute"}
      >
         <Image src="/movers/step-bg.png" />
      </Box>
      <Box w="100%" backgroundSize="inherit" px={" 200px  "}>
        <Box
          py={["1rem", "2rem", "8.5rem", "8.5rem"]}
          px={["1rem", "2rem", "2rem", "2rem", "0"]}
        >
          <VStack alignItems={"start"} width="100%" maxW="1249px">
            <Heading fontSize={"57.65px"} color={"#FFFFFF"} fontWeight={"700"}>
              Step-by-Step Guide
            </Heading>
            <Flex
              mt={"120px"}
              w={"100%"}
              h={"500px"}
              justifyContent={"space-between"}
            >
              <VStack justifyContent={"start"} alignItems={"start"} h={"100%"}>
                <VStack
                  w={"249px"}
                  h={"287.85"}
                  border={"1px solid #17D1C6"}
                  bg={"transparent"}
                  borderRadius={"15.89px"}
                  alignItems={"start"}
                  p={"20px"}
                  gap={"30px"}
                >
                  <Box>
                    <Image src="movers/one.png" />
                  </Box>
                  <Text fontSize={"24px"} color={"#fff"} fontWeight={"400"}>
                    {`To create Africa's most inclusive and efficient logistics
                    platform.`}
                  </Text>
                </VStack>
              </VStack>
              <VStack justifyContent={"end"} alignItems={"start"} h={"100%"}>
                <VStack
                  w={"249px"}
                  h={"287.85"}
                  border={"1px solid #17D1C6"}
                  bg={"transparent"}
                  borderRadius={"15.89px"}
                  alignItems={"start"}
                  p={"20px"}
                  gap={"30px"}
                >
                  <Box>
                    <Image src="movers/two.png" />
                  </Box>
                  <Text fontSize={"24px"} color={"#fff"} fontWeight={"400"}>
                    Verify: Complete our quick KYC process for security.
                  </Text>
                </VStack>
              </VStack>
              <VStack justifyContent={"start"} alignItems={"start"} h={"100%"}>
                <VStack
                  w={"249px"}
                  h={"287.85"}
                  border={"1px solid #17D1C6"}
                  bg={"transparent"}
                  borderRadius={"15.89px"}
                  alignItems={"start"}
                  p={"20px"}
                  gap={"30px"}
                >
                  <Box>
                    <Image src="movers/three.png" />
                  </Box>
                  <Text fontSize={"24px"} color={"#fff"} fontWeight={"400"}>
                    Pick Up & Deliver: Get matched with packages in your area.
                  </Text>
                </VStack>
              </VStack>
              <VStack justifyContent={"end"} alignItems={"start"} h={"100%"}>
                <VStack
                  w={"249px"}
                  h={"287.85"}
                  border={"1px solid #17D1C6"}
                  bg={"transparent"}
                  borderRadius={"15.89px"}
                  alignItems={"start"}
                  p={"20px"}
                  gap={"30px"}
                >
                  <Box>
                    <Image src="movers/four.png" />
                  </Box>
                  <Text fontSize={"24px"} color={"#fff"} fontWeight={"400"}>
                    Earn Instantly: Payments are credited after successful
                    delivery.
                  </Text>
                </VStack>
              </VStack>
            </Flex>
            <VStack mt={'70px'} alignItems={'center'} w={'100%'}>
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
