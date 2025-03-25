'use client'


import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const MoveThings = () => {
  return (
    <Box
      px={["1rem", "2rem", "2rem", "2rem", "0"]}
      pt={["4.5rem", "4.5rem", "4.5rem", "5.5rem"]}
      bg={"#16193A"}
      h={"auto"}
    >
      <Flex
        width="100%"
        maxW={"1249px"}
        mx="auto"
        pb={"80px"}
        alignItems={"center"}
        justifyContent={'space-between'}
        direction={['column', 'column', 'column', 'row']}
      >
        <VStack alignItems={"start"} w={'100%'}>
          <Tag
            p={"8px 13px"}
            borderRadius="full"
            bg={"#EDEFFA"}
            fontWeight={"normal"}
            // w={'100%'}
            fontSize={{ base: "12px", lg: "16px" }}
          >
            FOR SENDERS: MOVE THINGS, NOT MOUNTAINS
          </Tag>
          <Stack mt={"45px"}>
            <Heading
              fontSize={{ base: "24px", md: "40px" }}
              color={"#fff"}
              fontWeight={"bold"}
              w={{base: '100%', md:"383px"}}
            >
              A Simpler Way to Get things to Where They Need to Be.
            </Heading>
          </Stack>
          <Text mt={"19px"} w={{ base: "100%", lg: "422px" }} color={"#fff"}>
            Need to send an item? Connect with people already headed in that
            direction.
          </Text>
          <Button
            p={"23px 35px"}
            color={"#000"}
            mt={{ base: "10px", lg: "40px" }}
            cursor={"pointer"}
            fontWeight={"bold"}
            bg={"#17D1C6"}
            borderRadius={"8px"}
            _hover={{ color: "#17D1C6", background: 'none', border: "1px solid #17D1C6"}}
            // onClick={() => router.push("/movers")}
          >
            Download Sender App
          </Button>
        </VStack>
        <Box>
            <Image src="key-benefit/move-things-img.png" alt="" w={'100%'}/>
        </Box>
            
      </Flex>
    </Box>
  );
};

export default MoveThings;
