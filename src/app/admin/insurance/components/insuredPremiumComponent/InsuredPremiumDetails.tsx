"use client";

import {
  Button,
  Divider,
  Flex,
  Heading,
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { BsThreeDots } from "react-icons/bs";

const InsuredPremiumDetails = () => {
  const backgroundColor = useColorModeValue("#ffffff", "#1A202C");
  return (
    <Popover placement="left-end" closeOnBlur={false} size={"2xl"}>
      <PopoverTrigger>
        <Button
          _hover={{ background: "none" }}
          bg={"none"}
          color={useColorModeValue("#000", "#fff")}
        >
          <Icon as={BsThreeDots} fontSize="lg" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        bg={backgroundColor}
        p={5}
        maxW="1000px"
        minW="400px"
        w={"100%"}
        mb={"60px"}
      >
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader
          fontSize={"20px"}
          fontWeight={"700"}
          mt={"20px"}
          border={"none"}
        >
          Insurance Details
        </PopoverHeader>
        <Divider my={"10px"} w={"100%"} />
        <PopoverBody w={"100%"}>
          <VStack w={"100%"} fontSize={"14px"} alignItems={"start"}>
            <Text color={"gray"}>Total Premium Paid</Text>
            <Heading fontSize={"24px"}>N1,200</Heading>
          </VStack>
          <Divider my={"30px"} w={"100%"} />
          <VStack alignItems={"start"} fontSize={"14px"} w={"100%"}>
            <Flex justifyContent={'space-between'} w={"100%"}>
              <Text color={"gray"}>Delivery Item</Text>
              <Text fontSize={'16px'}>Iphone 13 Pro Max</Text>
            </Flex>
            <Flex justifyContent={'space-between'} mt={'20px'}  w={"100%"}>
              <Text color={"gray"}>Item Value</Text>
              <Text fontSize={'16px'}>N50,000</Text>
            </Flex>
          </VStack>
          <Divider my={"30px"} w={"100%"} />
          <VStack alignItems={"start"} fontSize={"14px"} w={"100%"}>
            <Flex justifyContent={'space-between'} w={"100%"}>
              <Text color={"gray"}>Coverage Type</Text>
              <Text fontSize={'16px'}>Standard (Loss Only)</Text>
            </Flex>
            <Flex justifyContent={'space-between'} mt={'20px'}  w={"100%"}>
              <Text color={"gray"}>Insurance Rate</Text>
              <Text fontSize={'16px'}>0.7%</Text>
            </Flex>
          </VStack>
        </PopoverBody>
        <PopoverFooter
          display="flex"
          justifyContent="flex-end"
          mt={"20px"}
          pt={"20px"}
          gap={2}
        >
          <Button bg={"#22244E"} color={"#fff"}>
            Close
          </Button>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};

export default InsuredPremiumDetails;
