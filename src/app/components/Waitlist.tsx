'use client'

import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const Waitlist = () => {
  return (
    <Box
      py={["1rem", "2rem", "6.5rem", "6.5rem"]}
      px={["1rem", "2rem", "2rem", "2rem", "0"]}
    >
      <Box
        width="100%"
        maxW={"1249px"}
        mx="auto"
        backgroundColor={"#17D1C6"}
        h="321px"
        w="100%"
        backgroundImage="url('/landingpage/waitlist-bg.png')"
        backgroundPosition=""
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        px={["1rem", "2rem", "2rem", "2rem", "0"]}
        borderRadius={"20px"}
      >
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          width="100%"
          maxW={"1000px"}
          mx={"auto"}
          h={"100%"}
        >
          <VStack alignItems={"start"} h={"100%"} w={"100%"}>
            <Flex
              justifyContent={"space-between"}
              w={"100%"}
              h={"100%"}
              alignItems={"center"}
            >
              <VStack alignItems={"start"} w={"100%"} gap={'20px'}>
                <Heading>Join the waitlist</Heading>
                <Flex gap={'15px'}>
                  <form>
                    <Input
                      p={"22px"}
                      w={"346px"}
                      bg={"#F9F9F9"}
                      fontSize={'14px'}
                      borderRadius={"28px"}
                      color="#161616"
                      placeholder="Your email..."
                      _placeholder={{ color: "inherit" }}
                      border={"1px solid grey"}
                    />
                  </form>
                  <Button bg={"#FF7D6A"} p={"22px"} color={"#16193A"} borderRadius={"23px"}>
                    Get started
                  </Button>
                </Flex>
              </VStack>
              <Box>
                <Image src="landingpage/waitlist-img.png" alt="" />
              </Box>
            </Flex>
          </VStack>
        </Flex>
      </Box>
    </Box>
  );
};

export default Waitlist;
