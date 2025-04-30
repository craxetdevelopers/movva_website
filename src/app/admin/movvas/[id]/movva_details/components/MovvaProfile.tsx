"use client";

import {
  Avatar,
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { CiEdit } from "react-icons/ci";
import { AiOutlineStop } from "react-icons/ai";
import { MdVerified } from "react-icons/md";

const MovvaProfile = () => {
  return (
    <VStack
      h={"550px"}
      borderRadius={"8px"}
      bg={useColorModeValue("#fff", "grey.400")}
      alignItems={"start"}
      border={"0.5px solid grey"}
      w={"100%"}
    >
      <Flex
        p={"40px"}
        alignItems={"start"}
        justifyContent={"space-between"}
        w={"100%"}
      >
        <HStack gap={"20px"}>
          <Avatar size="2xl" name="Admin User" />
          <VStack alignItems={"start"}>
            <Heading fontSize={"24px"}>Adeshola Ayantuga</Heading>
            <Text color={useColorModeValue("#344054", "white.900")}>
              +234908765431
            </Text>
            <Text color={useColorModeValue("#344054", "white.900")}>
              Adeshola.Ayantuga@gmail.com
            </Text>
          </VStack>
        </HStack>
        <HStack>
          <Button
            border={"0.5px solid grey"}
            bg={useColorModeValue("#fff", "grey.400")}
          >
            <Icon mr={"10px"} as={CiEdit} fontSize="lg" /> Edit
          </Button>
          <Button
            color={useColorModeValue("#fff", "#22244E")}
            border={"0.5px solid grey"}
            bg={useColorModeValue("#22244E", "#fff")}
          >
            <Icon mr={"10px"} as={AiOutlineStop} fontSize="lg" /> Disable
          </Button>
        </HStack>
      </Flex>
      <Divider/>
      <Grid
        mt={"20px"}
        justifyContent={"space-between"}
        p={"40px"}
        templateColumns="repeat(4, 1fr)"
        gap={16}
        w={"100%"}
      >
        <GridItem w="100%">
          <Text
            fontSize={"14px"}
            color={useColorModeValue("#344054", "white.900")}
          >
            Movva ID
          </Text>
          <Heading fontSize={"16px"}>MOV123</Heading>
        </GridItem>
        <GridItem>
          <Text
            fontSize={"14px"}
            color={useColorModeValue("#344054", "white.900")}
          >
            Status
          </Text>
          <Heading color={"#065F46"} fontSize={"16px"}>
            Active
          </Heading>
        </GridItem>
        <GridItem>
          <Text
            fontSize={"14px"}
            color={useColorModeValue("#344054", "white.900")}
          >
            Joined Date
          </Text>
          <Heading fontSize={"16px"}>14 Jan 2024</Heading>
        </GridItem>
        <GridItem>
          <Text
            fontSize={"14px"}
            color={useColorModeValue("#344054", "white.900")}
          >
            Assigned Region
          </Text>
          <Heading fontSize={"16px"}>Lagos State</Heading>
        </GridItem>
        <GridItem>
          <Text fontSize={"14px"} color={useColorModeValue("#344054", "white.900")}>
          Total Deliveries
          </Text>
          <Heading fontSize={"16px"}>149</Heading>
        </GridItem>
        <GridItem>
          <Text fontSize={"14px"} color={useColorModeValue("#344054", "white.900")}>
          Verification
          </Text>
          <Heading color={'#1C84FF'} display={'flex'} alignItems={'center'} fontSize={"16px"}> <Icon mr={"10px"} as={MdVerified} fontSize="lg" />Verified</Heading>
        </GridItem>
      </Grid>
    </VStack>
  );
};

export default MovvaProfile;
